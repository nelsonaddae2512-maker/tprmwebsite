import type { NextApiRequest, NextApiResponse } from "next";

const PAGES = ["", "vendors", "pricing", "trust", "privacy", "terms", "contact", "signup"];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const base = "https://www.truvern.com";
  const urls = PAGES.map(p => `<url><loc>${base}/${p}</loc><changefreq>weekly</changefreq><priority>${p===""? "1.0":"0.8"}</priority></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
export const config = { api: { bodyParser: false } };
