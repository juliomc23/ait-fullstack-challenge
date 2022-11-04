import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;

  email?: string;
  user?: string;

  msg?: string;
};

const login = (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  email: string,
  password: string
) => {
  const user = email.split("@")[0];

  if (req.method === "POST") {
    if (email === "" || password === "") {
      res
        .status(403)
        .json({ ok: false, msg: "Introduce your email and password" });
    }

    if (email === "admin@admin.es" && password === "admin_123456") {
      res.status(200).json({ ok: true, email: email, user: user });
    }

    if (email !== "admin@admin.es" || password !== "admin_123456") {
      res.status(403).json({ ok: false, msg: "User is not valid" });
    }
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email;
  const password = req.body.password;

  login(req, res, email, password);
}
