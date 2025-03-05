export async function GET(request) {
    const steamApiKey = process.env.STEAM_API_KEY; // from your .env.local
    const publishedFileId = "3121711784"; // Your mod's published file ID
  
    try {
      const apiURL =
        "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/";
      
      // Build the POST request body using URLSearchParams
      const body = new URLSearchParams({
        key: steamApiKey,
        itemcount: "1",
        "publishedfileids[0]": publishedFileId,
      });
  
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });
  
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error ${response.status}: ${errText}`);
      }
  
      const json = await response.json();
      // Ensure that the response has the structure you expect.
      const details = json.response?.publishedfiledetails?.[0] || {};
  
      const stats = {
        views: details.views || 0,
        subscriptions: details.subscriptions || 0,
        favorited: details.favorited || 0,
      };
  
      return new Response(JSON.stringify(stats), { status: 200 });
    } catch (error) {
      console.error("Error fetching Steam stats:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch stats" }), {
        status: 500,
      });
    }
  }