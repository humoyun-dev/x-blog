import nodemailer from "nodemailer";

export default async function sendEmailPasswordReset(
  to: string,
  subject: string,
  resetUrl: string,
) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Reset - X Blog</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: sans-serif; background-color: #ffffff; color: #222222;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #333333 0%, #444444 100%); padding: 40px 30px; text-align: center;">
          <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
            <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png" alt="X Blog" style="width: 50px; height: 50px; border-radius: 8px;" />
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">X Blog</h1>
        </div>

        <!-- Content -->
        <div style="padding: 50px 30px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="background-color: #f9f9f9; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; border: 1px solid #dddddd;">
              <img src="${process.env.NEXT_PUBLIC_BASE_URL}/icons/lock.png" alt="Lock Icon" style="width: 24px; height: 24px;" />
            </div>
            <h2 style="color: #222222; margin: 0 0 10px; font-size: 28px; font-weight: 700;">Reset Your Password</h2>
            <p style="color: #666666; font-size: 16px;">We received a request to reset your password for your X Blog account.</p>
          </div>

          <div style="background-color: #f9f9f9; border: 1px solid #dddddd; border-radius: 10px; padding: 30px; margin-bottom: 30px;">
            <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
              To reset your password, click the button below. This link will expire in <strong>1 hour</strong>.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}"
                 style="display: inline-block;
                        background: linear-gradient(135deg, #333333 0%, #444444 100%);
                        color: #ffffff;
                        padding: 16px 32px;
                        text-decoration: none;
                        border-radius: 10px;
                        font-weight: 600;
                        font-size: 16px;">
                Reset My Password
              </a>
            </div>
            <p style="color: #666666; font-size: 14px; text-align: center;">
              Or copy and paste this link into your browser:<br />
              <a href="${resetUrl}" style="color: #333333; font-size: 12px;">${resetUrl}</a>
            </p>
          </div>

          <!-- Security Notice -->
          <div style="background-color: #fff4f4; border-left: 4px solid #ff4d4f; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h4 style="color: #d32f2f; margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Security Notice</h4>
            <p style="color: #444; margin: 0; font-size: 14px;">
              If you didn't request this password reset, please ignore this email. Your account remains secure.
            </p>
          </div>

          <!-- Support -->
          <div style="text-align: center; border-top: 1px solid #dddddd; padding: 20px 0;">
            <p style="color: #666666; font-size: 14px;">Need help? Contact our support team</p>
            <a href="mailto:humoyunbektursunniyazov@gmail.com" style="color: #333333; text-decoration: none; font-weight: 500;">humoyunbektursunniyazov@gmail.com</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #dddddd;">
          <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png" alt="X Blog" style="width: 32px; height: 32px; border-radius: 4px; margin-bottom: 10px;" />
          <p style="color: #888888; font-size: 14px;">© ${new Date().getFullYear()} X Blog. All rights reserved.</p>
          <p style="color: #aaaaaa; font-size: 12px;">This email was sent to ${to}</p>
          <div style="margin-top: 20px;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe" style="color: #888888; font-size: 12px; margin: 0 10px;">Unsubscribe</a>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/privacy" style="color: #888888; font-size: 12px; margin: 0 10px;">Privacy</a>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/terms" style="color: #888888; font-size: 12px; margin: 0 10px;">Terms</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
X Blog - Password Reset Request

We received a request to reset your password.

Click the link below to reset your password:
${resetUrl}

This link will expire in 1 hour.

If you didn't request this, ignore this email.

Need help? Contact: support@xblog.com

© ${new Date().getFullYear()} X Blog. All rights reserved.
  `;

  await transporter.sendMail({
    from: `"X Blog" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: htmlContent,
    text: textContent,
  });
}
