"""Upscale low-res public images for retina / large layouts. Run from repo root: python scripts/upscale_public_images.py"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"

# Target widths (px) — tuned for ~2x typical max CSS size on large viewports
HERO_TARGET_W = 2400
GALLERY_TARGET_W = 1280


def upscale_to_width(img: Image.Image, target_w: int) -> Image.Image:
    w, h = img.size
    if w >= target_w:
        return img
    ratio = target_w / w
    new_h = max(1, int(round(h * ratio)))
    return img.resize((target_w, new_h), Image.Resampling.LANCZOS)


def main() -> None:
    hero_path = PUBLIC / "hero-massage-crop.png"
    if hero_path.exists():
        im = Image.open(hero_path).convert("RGB")
        out = upscale_to_width(im, HERO_TARGET_W)
        out.save(PUBLIC / "hero-massage-crop.webp", "WEBP", quality=88, method=6)
        print(f"hero-massage-crop.webp {out.size}")

    for name in [
        "gallery-1.png",
        "gallery-2.png",
        "gallery-3.png",
        "gallery-4.png",
        "gallery-5.png",
        "gallery-6.png",
        "about-spa-room.png",
    ]:
        p = PUBLIC / name
        if not p.exists():
            continue
        im = Image.open(p).convert("RGB")
        out = upscale_to_width(im, GALLERY_TARGET_W)
        webp_name = p.stem + ".webp"
        out.save(PUBLIC / webp_name, "WEBP", quality=88, method=6)
        print(f"{webp_name} {out.size}")


if __name__ == "__main__":
    main()
