import { Resend } from "resend";

export async function sendEmail(
  email: string,
  url: string,
  referredBy?: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!referredBy) throw new Error("Referred by is required");

  const newUrl = new URL(url);
  newUrl.searchParams.set("referredBy", referredBy);

  try {
    const { error } = await resend.emails.send({
      from: "Darseen <no-reply@darseen.tech>",
      to: email,
      subject: "Sign Up",
      html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h1>Verify your email</h1>
              <p>Click the link below to finish signing up.</p>
              <a href="${newUrl}" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px;">
                Verify email
              </a>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                If the button doesn't work, copy and paste this link: <br>
                ${newUrl}
              </p>
            </div>
          `,
    });

    if (error) {
      console.error("Resend Error:", error);
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Failed to send magic link:", error);
    throw error;
  }
}
