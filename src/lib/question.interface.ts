export interface IQuestionCard {
  question: string;
  category: {
    name: string;
    color: string;
    logo: {
      path: string;
      filename: string;
      mime: string;
    } | null;
  };
}
