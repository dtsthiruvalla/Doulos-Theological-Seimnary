// Example of converting PHP to Vercel serverless function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Your application logic here
    // Connect to database (you'd need to use a service like PlanetScale, Supabase, etc.)
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
