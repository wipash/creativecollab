"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("You're on the list! We'll keep you posted.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label className="sr-only" htmlFor="email-address">
          Email address
        </label>
        <input
          autoComplete="email"
          className="flex-1 h-12 rounded-full border-2 border-gray-300 px-5 placeholder-gray-400 focus:outline-none focus:border-creative-purple transition-colors"
          id="email-address"
          name="email"
          placeholder="your@email.com"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
        <button
          className="h-12 px-6 rounded-full bg-creative-purple text-white font-semibold hover:bg-creative-purple/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-green-600 text-center font-medium">{message}</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600 text-center font-medium">{message}</p>
      )}

      <p className="mt-4 text-sm text-gray-500 text-center">
        Get updates on upcoming classes and workshops. No spam, unsubscribe anytime.
      </p>
    </div>
  )
}
