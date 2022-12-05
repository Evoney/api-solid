import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider {
  private transporter;
  constructor() {

    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "2ce7ec6b456479",
        pass: "ebd318d9ad106a"
      }
    });

  }

  async sendMail(message: IMessage): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: message.from.email
        },
        suject: message.subject,
        html: message.body
      })
  }
}