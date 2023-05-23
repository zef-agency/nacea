export default async function handler(req, res) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    console.log("home ok");
    /*     await res.revalidate("/event");
    console.log("event ok");
    await res.revalidate("/contact");
    console.log("contact ok");
    await res.revalidate("/concept");
    console.log("concept ok");
    await res.revalidate("/mentions-legales");
    console.log("ml ok"); */

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
