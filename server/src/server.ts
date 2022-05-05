import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "16696ff37d90d2",
    pass: "70fc23712d4079"
  }
});

app.get('/', (_req, res) => res.send('Get test'));

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  });

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'gean634n@gmail.com',
    subject: 'novo feedback',
    html: `<p>Feedback</p>`
  });
  
  return res.status(201).json({data: feedback});
});

app.listen(3333, () => {
  console.log(`HTTP server running on port 3333`);
});

// SQlite
// Prisma