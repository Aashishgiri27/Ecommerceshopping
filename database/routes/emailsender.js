const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");
dotenv.config();

const emailSender = async (email, message, OTP, name) => {
  // Mailgen configuration
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Friends Collection",
      link: "https://friends-collection.com",
      logo: "https://i.ibb.co/dsxB4T9t/Screenshot-2025-05-11-224314.png",
      copyright: "© 2025 Friends Collection. All rights reserved.",
    },
  });

  // Email content
  const emailTemplate = {
    body: {
      name: name || email,
      intro: [
        `👋 Hello <strong>${name || email}</strong>,`,
        `Welcome to <strong>Friends Collection</strong> — your trusted place for personalized fashion! We're thrilled to have you on board.`,
      ],
      action: {
        instructions: "🔐 Please enter the following OTP to verify your email:",
        button: {
          color: "#0d9488",
          text: `Your OTP is: ${OTP}`,
          link: "https://friends-collection.com/verify", // Optional, can be real or placeholder
        },
      },
      outro: [
        "⚠️ This OTP is valid for only 10 minutes. Do not share it with anyone.",
        "If you didn’t request this code, you can ignore this email.",
        "Need help? Reach out to us anytime!",
      ],
      signature: "Cheers,\nThe Friends Collection Team",
    },
  };

  // Generate HTML email
  const emailBody = mailGenerator.generate(emailTemplate);

  // Nodemailer configuration
  const config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password
    },
  };

  const transporter = nodemailer.createTransport(config);

  // Mail details
  const mail = {
    from: `"Friends Collection" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP for Account Verification",
    html: emailBody,
  };

  // Send the email
  await transporter.sendMail(mail);
};

module.exports = emailSender;
