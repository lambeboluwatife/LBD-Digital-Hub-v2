import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, company, email, service, budget, message } =
      await request.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields (name, email, message) are missing." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Graceful development simulation if RESEND_API_KEY is not configured yet
    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "⚠️ [Contact API Dev Mode] RESEND_API_KEY is not configured in .env.local.\n" +
            "Simulating successful email transmission for local testing.\n" +
            "Payload received:",
          { name, company, email, service, budget, message }
        );

        return NextResponse.json({
          success: true,
          mock: true,
          message:
            "Dev Mode: Submission received successfully. Configure RESEND_API_KEY in .env.local to send live emails.",
        });
      }

      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY in environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL || "boluwatifelambe@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "LBD Digital Hub <onboarding@resend.dev>";

    const submissionTime = new Date().toUTCString();
    const serviceDisplay = service || "General Consultation";
    const budgetDisplay = budget || "Not specified";
    const companyDisplay = company || "Individual / Not specified";

    // Plaintext version for high deliverability and fallback clients
    const textContent = `
NEW PROJECT INQUIRY — LBD DIGITAL HUB
==================================================

Client Information:
• Name: ${name}
• Email: ${email}
• Company: ${companyDisplay}
• Services Needed: ${serviceDisplay}
• Estimated Budget: ${budgetDisplay}
• Submitted: ${submissionTime}

Project Details:
--------------------------------------------------
${message}
--------------------------------------------------

Direct Reply: mailto:${email}
Automated inquiry notification from LBD Digital Hub (lbddigitalhub.com)
`;

    // High-end branded HTML email template matching the Obsidian & Emerald app UI
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050809; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #DFE3E4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #050809; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #080D0E; border: 1px solid #1B2727; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);">
          
          <!-- Top Accent Line -->
          <tr>
            <td style="height: 3px; background: linear-gradient(90deg, #12C887 0%, #18D6A0 50%, #008197 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #141D1E;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <!-- Monogram / Brand Name -->
                    <div style="font-size: 11px; font-family: 'SF Mono', Monaco, Consolas, monospace; letter-spacing: 0.15em; color: #12C887; text-transform: uppercase; font-weight: 700; margin-bottom: 6px;">
                      // LBD DIGITAL HUB
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #F5F7F7; letter-spacing: -0.02em;">
                      New Project Inquiry
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <!-- Status Badge -->
                    <div style="display: inline-block; padding: 4px 10px; background-color: #0E1F1A; border: 1px solid #12C88740; border-radius: 9999px; font-size: 11px; font-family: 'SF Mono', Monaco, Consolas, monospace; color: #18D6A0; font-weight: 600;">
                      ● LIVE INQUIRY
                    </div>
                  </td>
                </tr>
              </table>
              <p style="margin: 12px 0 0 0; font-size: 13px; color: #94A3A8; line-height: 1.5;">
                A new project proposal was submitted through the contact page.
              </p>
            </td>
          </tr>

          <!-- Client Details Section -->
          <tr>
            <td style="padding: 24px 32px;">
              <div style="font-size: 10px; font-family: 'SF Mono', Monaco, Consolas, monospace; letter-spacing: 0.15em; color: #627276; text-transform: uppercase; font-weight: 600; margin-bottom: 12px;">
                CLIENT SPECIFICATIONS
              </div>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #101718; border: 1px solid #1B2727; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 12px; color: #94A3A8; width: 140px; font-family: 'SF Mono', Monaco, Consolas, monospace;">
                    CLIENT NAME
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 14px; font-weight: 600; color: #F5F7F7;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 12px; color: #94A3A8; font-family: 'SF Mono', Monaco, Consolas, monospace;">
                    COMPANY
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 14px; color: #F5F7F7;">
                    ${companyDisplay}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 12px; color: #94A3A8; font-family: 'SF Mono', Monaco, Consolas, monospace;">
                    EMAIL ADDRESS
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #12C887; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 12px; color: #94A3A8; font-family: 'SF Mono', Monaco, Consolas, monospace;">
                    SERVICES
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #1B2727; font-size: 13px;">
                    <span style="display: inline-block; background-color: #0E1F1A; color: #18D6A0; border: 1px solid #12C88740; padding: 3px 10px; border-radius: 4px; font-weight: 600; font-size: 12px;">
                      ${serviceDisplay}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; color: #94A3A8; font-family: 'SF Mono', Monaco, Consolas, monospace;">
                    BUDGET
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #12C887;">
                    ${budgetDisplay}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Message Box -->
          <tr>
            <td style="padding: 0 32px 28px 32px;">
              <div style="font-size: 10px; font-family: 'SF Mono', Monaco, Consolas, monospace; letter-spacing: 0.15em; color: #627276; text-transform: uppercase; font-weight: 600; margin-bottom: 12px;">
                PROJECT OVERVIEW &amp; REQUIREMENTS
              </div>
              <div style="background-color: #101718; border: 1px solid #1B2727; border-left: 3px solid #12C887; border-radius: 8px; padding: 18px 20px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #DFE3E4; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
${message}
                </p>
              </div>
            </td>
          </tr>

          <!-- Action CTA Button -->
          <tr>
            <td style="padding: 0 32px 32px 32px;" align="center">
              <a href="mailto:${email}?subject=Re:%20Project%20Inquiry%20from%20LBD%20Digital%20Hub" style="display: inline-block; background-color: #12C887; color: #080D0E; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 6px; box-shadow: 0 4px 14px rgba(18, 200, 135, 0.35); text-align: center;">
                Reply to ${name} &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="padding: 20px 32px; background-color: #050809; border-top: 1px solid #1B2727; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-family: 'SF Mono', Monaco, Consolas, monospace; color: #627276;">
                Timestamp: ${submissionTime} • LBD Digital Hub Form API
              </p>
              <p style="margin: 0; font-size: 11px; color: #526060;">
                Delivered securely via Resend. To respond, reply directly to this email or click the button above.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Send styled notification email with reply-to set to the prospect
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Project Inquiry: ${serviceDisplay} by ${name}`,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
