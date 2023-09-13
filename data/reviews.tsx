import {sample_data as sd,Review } from './sample_data/sample_reviews'

export function getReviewById(id: number): Review | undefined {
  const review = sd.reviews.find((review) => review.id === id);
  return review;
}
