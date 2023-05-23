export default async function handler(req, res) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    await res.revalidate("/event");
    await res.revalidate("/contact");
    await res.revalidate("/concept");
    await res.revalidate("/404");
    await res.revalidate("/mentions-legales");

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
