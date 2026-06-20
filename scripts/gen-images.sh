#!/usr/bin/env bash
# Generate all images for contractorsprofessionalliability.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/contractorsprofessionalliability.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — PROFESSIONAL CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a modern construction project site at golden-hour: a professional design-build team in hard hats and business casual reviewing architectural blueprints on a large table, glass and steel building frame in background, warm morning light. Bright professional commercial photography, clean corporate atmosphere, high-end, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of a large active commercial construction project: steel frame of a modern office building under construction, construction cranes, professional contractor crew with hard hats, blue sky with soft clouds. Clean professional commercial photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a confident professional contractor in business casual and hard hat standing on a construction site with blueprints, warm natural light, trustworthy genuine expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic view of a professional construction management team reviewing blueprints at a modern building site, glass architecture in background, warm golden light, professional business atmosphere. Premium commercial photography, clean and inviting, no text, no watermark" 4 1216 640

gen "contractors-eo.jpg" \
  "Photorealistic close-up of professional hands reviewing detailed architectural blueprints and engineering drawings on a large drafting table, precision measurement tools, clean modern design studio, sharp professional photography, no text" 4

gen "design-build-liability.jpg" \
  "Photorealistic photo of a design-build contractor team meeting: an architect with blueprints and a construction manager in a hard hat reviewing project plans together in front of a building under construction, professional daylight, commercial photography, no text" 4

gen "professional-liability.jpg" \
  "Photorealistic photo of a professional contractor consultant presenting project analysis on a large screen to clients in a modern conference room, professional business attire, clean corporate environment, commercial photography, no text" 4

gen "general-liability.jpg" \
  "Photorealistic photo of a professional construction safety inspection: a contractor in a hard hat and vest examining a commercial building project, safety equipment, clean organized site, professional photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of a professional construction crew in hard hats and safety vests working safely on a modern commercial building project, teamwork, proper safety equipment, warm daylight, professional photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a fleet of clean professional contractor trucks and vans parked at a commercial construction site, company logos, blue sky, professional commercial automotive photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a professional business meeting between a contractor and insurance advisor in a modern glass office reviewing contract documents, business attire, clean corporate environment, professional photography, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of professional contractor signing official contract documents with a pen, official bond paperwork on a clean desk, professional business attire, clean corporate environment, commercial photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
