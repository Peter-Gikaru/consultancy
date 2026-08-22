import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const ipRateLimitMap = new Map();

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const windowMs = 60 * 1000; 
    const maxRequests = 5;

    const userRequests = ipRateLimitMap.get(ip) || [];
    const validRequests = userRequests.filter(timestamp => now - timestamp < windowMs);

    if (validRequests.length >= maxRequests) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      );
    }

    validRequests.push(now);
    ipRateLimitMap.set(ip, validRequests);

    const body = await request.json();
    const { name, organisation, email, phone, enquiryType, message, website_url } = body;

    if (website_url && website_url.trim().length > 0) {
      
      return NextResponse.json(
        { success: true, message: 'Thank you for reaching out to DERAP Consult.' },
        { status: 200 }
      );
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Message content is required' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      organisation: (organisation || '').trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: (phone || '').trim().slice(0, 30),
      enquiryType: (enquiryType || 'General').trim().slice(0, 50),
      message: message.trim().slice(0, 2000),
      receivedAt: new Date().toISOString()
    };

    console.log('[DERAP Contact Form Submission Received]:', sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out to DERAP Consult. We will respond within two working days.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
