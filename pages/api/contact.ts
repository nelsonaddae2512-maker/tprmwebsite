// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Here you could call an email API, DB, or log
    return res.status(200).json({
      success: true,
      data: { name, email, message },
    });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
