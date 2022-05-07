import { MailAdaper, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "16696ff37d90d2",
    pass: "70fc23712d4079"
  }
});

export class NodemailerMailAdapter implements MailAdaper {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'gean634n@gmail.com',
      subject,
      html: body,
    });
  }
}