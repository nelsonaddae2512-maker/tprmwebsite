import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ ok: false, error: "Missing fields" });

  // TODO: send email via your provider (Resend/SendGrid) or store in DB
  // For now, log to Vercel function logs:
  console.log("Contact submission:", { name, email, message });

  return res.status(200).json({ ok: true });
}
