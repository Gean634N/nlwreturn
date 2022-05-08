import { MailAdaper } from "../adpters/mailAdapter";
import { FeedbacksRepository } from "../repositories/feedbackRepository";

interface SubmitFeedbackUseCaseRequeste {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdaper,
  ) { }

  async execute(request: SubmitFeedbackUseCaseRequeste) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'novo feedback',
      body: [
        `<div>`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"  />` : ``,
        `</div>`
      ].join('\n'),
    });
  }
}