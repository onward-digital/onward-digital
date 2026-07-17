import { Resend } from 'resend';

const MAX_LENGTHS = {
  name: 100,
  email: 150,
  projectType: 100,
  message: 2000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validate(body) {
  const { name, email, projectType, message } = body ?? {};

  if (!name || !email || !projectType || !message) {
    return 'Missing required fields';
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof projectType !== 'string' ||
    typeof message !== 'string'
  ) {
    return 'Invalid field types';
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    projectType.length > MAX_LENGTHS.projectType ||
    message.length > MAX_LENGTHS.message
  ) {
    return 'Field exceeds maximum length';
  }

  if (!EMAIL_REGEX.test(email)) {
    return 'Invalid email format';
  }

  return null;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return Response.json({ success: false, error: validationError }, { status: 400 });
  }

  const { name, email, projectType, message } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #111;">Nueva consulta desde Onward Digital</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td>
          <td style="padding: 8px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 8px 0;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Tipo de proyecto:</td>
          <td style="padding: 8px 0;">${safeProjectType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Mensaje:</td>
          <td style="padding: 8px 0;">${safeMessage}</td>
        </tr>
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'Onward Digital <onboarding@resend.dev>',
      to: 'onward.digital.studio@gmail.com',
      replyTo: email,
      subject: `Nueva consulta: ${projectType} — ${name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ success: false, error: 'Failed to send message' }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
