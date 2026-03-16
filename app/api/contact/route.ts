import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    // ── Log to Google Sheet ──────────────────────────────────────────────────
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
    console.log('Webhook URL:', webhookUrl) // temporary debug — remove after confirming it works

    if (!webhookUrl) {
      console.error('GOOGLE_SHEET_WEBHOOK_URL is not set in .env.local')
      return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
    }

    const sheetRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (!sheetRes.ok) {
      const errText = await sheetRes.text()
      console.error('Google Sheet webhook error:', errText)
      return NextResponse.json({ error: 'Failed to log to sheet.' }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! I will get back to you soon.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
