export type ChatGPTemplate = {
  modelVersion?: string;
  prompt?: string;
  model: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  bestOf: number;
  stop?: string[];
  injectStartText?: string;
  injectRestartText?: string;
};

interface Image {
  title: string;
  links: {
    url: string;
    clodinary_id: number;
  };
  description: string;
  alt: string;
}

export interface OpenAiObject {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  best_of: number;
  frequency_penalty: number;
  presence_penalty: number;
  stop: string[];
}

interface Cost {
  cost_per_token: number;
  profit_margin: number;
}

interface Rating {
  num_of_ratings: number;
  sum_of_ratings: number;
  rating_avg: number;
}

interface Uses {
  times_used: number;
  times_integrated: number;
}

interface Freelancer {
  api_call: OpenAiObject;
  rating: Rating;
  uses: Uses;
  categories: string[];
  cost: Cost;
  prompt_types: string[];
  description: string;
  images: {
    slogan1: Image;
    slogan2: Image;
  };
}

interface SalesPrompts {
  [key: string]: Freelancer;
}

export interface OpenAI {
  sales_prompts: SalesPrompts;
}
//!Data set of freelancer0.1
export interface promptType01 {
  open_ai: OpenAI;
}
