export type FAQ = {
  question: string;
  answer: string;
  timesSearched: number;
  timesLiked: number;
};

export type faqType =  FAQ[];

export const sample_data: FAQ[] = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    timesSearched: 0,
    timesLiked: 0,
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
    timesSearched: 0,
    timesLiked: 0,
  },
  {
    question: "What is a component in React?",
    answer:
      "A component is a reusable piece of code that encapsulates a part of a user interface.",
    timesSearched: 0,
    timesLiked: 0,
  },
];
