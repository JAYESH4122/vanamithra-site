import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phone, review } = await request.json();

    if (!name || !phone || !review) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Reviews" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "📩 New Customer Review",
      html: `
<h2>New Review Received</h2>
<p><b>Name:</b> ${name}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Review:</b></p>
<p>${review}</p>
`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Mail sending failed" }), {
      status: 500,
    });
  }
}
