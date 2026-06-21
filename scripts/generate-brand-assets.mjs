import sharp from "sharp";

const logo = "public/Logo_only.png";

await sharp(logo)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("public/icon-32.png");

await sharp(logo)
  .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("public/icon-48.png");

await sharp(logo)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("public/apple-icon.png");

await sharp(logo)
  .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("public/icon-192.png");

const ogWidth = 1200;
const ogHeight = 630;
const resizedLogo = await sharp(logo)
  .resize(400, 330, { fit: "inside", withoutEnlargement: true })
  .png()
  .toBuffer();
const logoMeta = await sharp(resizedLogo).metadata();

const bg = Buffer.from(`<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a4d9b"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#0a4d9b"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="600" y="520" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" font-weight="bold" fill="#ffffff">Apex Solar Infra Pvt. Ltd.</text>
  <text x="600" y="565" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="#ffb400">Intelligent Solar Solutions</text>
</svg>`);

const left = Math.round((ogWidth - logoMeta.width) / 2);
const top = Math.round((ogHeight - logoMeta.height - 80) / 2);

await sharp(bg)
  .composite([{ input: resizedLogo, left, top }])
  .png()
  .toFile("public/og-image.png");

console.log("Generated icon and OG assets");
