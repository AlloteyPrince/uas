import nodemailer from "nodemailer";

const transporter = nodemailer.createTestAccount({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_USER,
  },
});

export default transporter;
