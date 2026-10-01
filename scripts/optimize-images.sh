#!/bin/sh
# Regenerates the display-sized WebP copies in public/assets/optimized/ from
# the unchanged originals in public/assets/. Requires cwebp (libwebp).
#
# Transparent PNGs are encoded losslessly. JPEG photos, which are already
# lossy, use quality 90 with sharp YUV conversion. Every output keeps at least
# twice its largest rendered size, and nothing is upscaled.
set -eu

cd "$(dirname "$0")/../public/assets"
out=optimized

lossless() { # source width height output
  mkdir -p "$(dirname "$out/$4")"
  cwebp -quiet -lossless -z 9 -exact -resize "$2" "$3" "$1" -o "$out/$4"
}

photo() { # source width height output
  mkdir -p "$(dirname "$out/$4")"
  cwebp -quiet -q 90 -sharp_yuv -metadata none -resize "$2" "$3" "$1" -o "$out/$4"
}

# Ornaments: twice the largest preset image size. Also used as mask images.
lossless card-section/spiral.png 774 774 card-section/spiral.webp
lossless card-section/spiral-small.png 664 664 card-section/spiral-small.webp
lossless card-section/donut.png 688 688 card-section/donut.webp
lossless card-section/cylinder.png 744 744 card-section/cylinder.webp
lossless card-section/cone.png 378 378 card-section/cone.webp
lossless card-section/cone-white-source.png 378 378 card-section/cone-white-source.webp

# Portraits: already at or below twice their rendered size, so only re-encode.
lossless person_holding_laptop.png 0 0 person_holding_laptop.webp
lossless lady_holding_laptop.png 0 0 lady_holding_laptop.webp

# Student avatars: rendered at 32px and 43px.
for n in 1 2 3 4 5 6 7; do
  lossless "happy-students/happy-student-$n.png" 96 96 "happy-students/happy-student-$n.webp"
done

# Course photos: cover a 682 x 391 box (twice 341 x 195.14) without cropping.
photo course-catalog/cata-1.jpg 682 0 course-catalog/cata-1.webp
photo course-catalog/cata-2.jpg 682 0 course-catalog/cata-2.webp
photo course-catalog/cata-3.jpg 682 0 course-catalog/cata-3.webp
photo course-catalog/cata-4.jpg 682 0 course-catalog/cata-4.webp
photo course-catalog/cata-5.jpg 682 0 course-catalog/cata-5.webp
photo course-catalog/cata-6.jpg 0 391 course-catalog/cata-6.webp

# Testimonial portrait: covers a 160px square (twice 80px).
photo testimonials-shot.jpg 0 160 testimonials-shot.webp
