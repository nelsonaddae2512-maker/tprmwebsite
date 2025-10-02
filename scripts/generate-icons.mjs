import fs from "fs";
import sharp from "sharp";
import path from "path";

const outDir = path.join(process.cwd(), "public");

// ✅ Use recursive: true to avoid EEXIST errors
fs.mkdirSync(outDir, { recursive: true });


// --- SVG sources ---
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 60 60" fill="none">
  <path d="M30 5L50 15V30C50 45 40 55 30 60C20 55 10 45 10 30V15L30 5Z" fill="#4F46E5"/>
  <path d="M22 32L28 38L40 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="40" viewBox="0 0 300 60" fill="none">
  <path d="M30 5L50 15V30C50 45 40 55 30 60C20 55 10 45 10 30V15L30 5Z" fill="#4F46E5"/>
  <path d="M22 32L28 38L40 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="70" y="38" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#1E1E1E">Truvern</text>
</svg>
`;

// Write SVGs (handy to keep in repo)
fs.writeFileSync(path.join(pub, "favicon.svg"), faviconSvg, "utf8");
fs.writeFileSync(path.join(pub, "logo.svg"), logoSvg, "utf8");

// PNG sizes to export from favicon
const rasterSizes = [16, 32, 180, 512];

const exportPng = async (svgString, outPath, w, h = w) => {
  await sharp(Buffer.from(svgString)).resize(w, h, { fit: "contain" }).png().toFile(outPath);
};

const run = async () => {
  // Favicons & app icon
  for (const size of rasterSizes) {
    const out = path.join(pub, `favicon-${size}x${size}.png`);
    await exportPng(faviconSvg, out, size);
    console.log("✓", out);
  }
  // Apple touch icon (180x180) alias
  fs.copyFileSync(
    path.join(pub, "favicon-180x180.png"),
    path.join(pub, "apple-touch-icon.png")
  );

  // Main logo PNG (nice for <img src="/logo.png" />)
  await exportPng(logoSvg, path.join(pub, "logo.png"), 300, 60);
  console.log("✓ /public/logo.png");

  // Splash screens (portrait)
  const splashSizes = [
    [1170, 2532], // iPhone 12/13/14
    [1284, 2778], // iPhone 12/13/14 Pro Max
    [750, 1334],  // iPhone 6/7/8/SE(2)
    [828, 1792],  // iPhone XR/11
    [1668, 2388], // iPad Pro 11" (portrait)
    [2048, 2732], // iPad Pro 12.9" (portrait)
    [1280, 1920], // Android generic portrait
  ];

  // Create a solid indigo background with centered shield icon for each splash
  for (const [w, h] of splashSizes) {
    // background
    const bg = await sharp({
      create: { width: w, height: h, channels: 3, background: "#4F46E5" },
    }).png().toBuffer();

    // center icon (~28% of min dimension)
    const iconSize = Math.round(Math.min(w, h) * 0.28);
    const iconPng = await sharp(Buffer.from(faviconSvg))
      .resize(iconSize, iconSize)
      .png()
      .toBuffer();

    // composite centered
    const out = path.join(pub, `splash-${w}x${h}.png`);
    await sharp(bg)
      .composite([{ input: iconPng, top: Math.round((h - iconSize) / 2), left: Math.round((w - iconSize) / 2) }])
      .toFile(out);

    console.log("✓", out);
  }

  // Manifest file
  const manifest = {
    name: "Truvern",
    short_name: "Truvern",
    icons: [
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    theme_color: "#4F46E5",
    background_color: "#4F46E5",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(pub, "site.webmanifest"), JSON.stringify(manifest, null, 2));
  console.log("✓ /public/site.webmanifest");

  // Copy 512 icon alias
  fs.copyFileSync(path.join(pub, "favicon-512x512.png"), path.join(pub, "icon-512x512.png"));
  console.log("✓ /public/icon-512x512.png");
};

run().catch((err) => {
  console.error("Icon generation failed:", err);
  process.exit(1);
});
