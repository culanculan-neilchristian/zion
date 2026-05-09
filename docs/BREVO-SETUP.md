# Brevo (formerly Sendinblue) Integration for Forms

This guide explains how to use Brevo to handle form submissions, allowing you to send email notifications to yourself and/or confirmation emails to users.

## 1. Setup Brevo Account

1.  **Create an Account**: Sign up at [brevo.com](https://www.brevo.com/).
2.  **Get API Key**:
    *   Go to **SMTP & API** in your account settings.
    *   Create a new API key (v3).
3.  **Verify Domain/Sender**: Ensure you have a verified sender email address in Brevo.

## 2. Environment Variables

Add your Brevo API key to your `.env.local` file:

```env
BREVO_API_KEY=your_api_key_here
CONTACT_FORM_RECEIVER_EMAIL=your-email@example.com
```

## 3. Implementation (Server Action)

You can use the Brevo API directly with `fetch` to keep the bundle size small.

Create a server action (e.g., `src/app/actions/contact.ts`):

```typescript
"use server";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  organization?: string;
  message: string;
}) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const RECEIVER_EMAIL = process.env.CONTACT_FORM_RECEIVER_EMAIL || "hello@zionbuild.com";

  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is missing");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Zion Build Contact Form", email: "no-reply@zionbuild.com" },
        to: [{ email: RECEIVER_EMAIL, name: "Admin" }],
        subject: `New Contact Form Submission from ${formData.name}`,
        htmlContent: `
          <h3>New Inquiry from Zion Build Website</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Organization:</strong> ${formData.organization || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
        replyTo: { email: formData.email, name: formData.name }
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return { success: false, error: "Failed to send message" };
    }
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
```

## 4. Connecting to the UI

Update your form component (e.g., `src/components/sections/Contact.tsx`) to use the action:

```tsx
"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

// ... inside your component
const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get("fullName") as string,
    email: formData.get("email") as string,
    organization: formData.get("organization") as string,
    message: formData.get("message") as string,
  };

  const result = await sendContactEmail(data);
  
  if (result.success) {
    setStatus("success");
    e.currentTarget.reset();
  } else {
    setStatus("error");
  }
}
```

## Why Brevo for Forms?

1.  **Reliability**: Unlike `mailto:`, emails are sent from the server and are less likely to be caught by spam filters.
2.  **Tracking**: Brevo provides logs for every email sent, so you can see if they were delivered or opened.
3.  **Automation**: You can trigger automated follow-up workflows in Brevo when a contact is added via the API.
4.  **Free Tier**: Brevo has a generous free tier (300 emails/day), which is plenty for most contact forms.
