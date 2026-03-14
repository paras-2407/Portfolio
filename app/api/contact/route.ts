import { NextRequest, NextResponse } from 'next/server'

interface ContactRequest {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Send an email notification using a service like Resend, SendGrid, etc.
    // 2. Store the message in a database
    // 3. Send a confirmation email to the sender
    
    // Example with Resend (uncomment and add RESEND_API_KEY env variable):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'goyal.paras004@gmail.com',
    //   subject: `New Contact Form Submission from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `
    // })

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
