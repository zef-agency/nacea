export default async function handler(req, res) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const urls = [
      "/",
      "/event",
      "/contact",
      "/concept-galettes-bretonnes",
      "/privatisation-creperie",
    ];

    await Promise.all(urls.map(async (url) => await res.revalidate(url)));

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
