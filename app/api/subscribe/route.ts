export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string }

  if (!email) {
    return new Response("Email is required", { status: 400 })
  }

  const listId = process.env.EMAILOCTOPUS_LIST_ID
  const apiKey = process.env.EMAILOCTOPUS_API_KEY

  if (!listId || !apiKey) {
    console.error("Missing EmailOctopus configuration")
    return new Response("Server configuration error", { status: 500 })
  }

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email_address: email,
          status: "SUBSCRIBED",
        }),
      }
    )

    const data = (await response.json()) as {
      error?: { code?: string; message?: string }
    }

    if (response.ok) {
      return Response.json({ success: true })
    }

    if (data.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return Response.json(
        { error: "You're already subscribed!" },
        { status: 400 }
      )
    }

    return Response.json(
      { error: data.error?.message || "Failed to subscribe" },
      { status: response.status }
    )
  } catch (error) {
    console.error("EmailOctopus error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
