'use server';
/**
 * @fileOverview An AI agent that summarizes customer reviews for a specific product.
 *
 * - summarizeCustomerReviews - A function that summarizes customer reviews.
 * - SummarizeCustomerReviewsInput - The input type for the summarizeCustomerReviews function.
 * - SummarizeCustomerReviewsOutput - The return type for the summarizeCustomerReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerReviewsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  customerReviews: z.string().describe('The customer reviews for the product.'),
});
export type SummarizeCustomerReviewsInput = z.infer<typeof SummarizeCustomerReviewsInputSchema>;

const SummarizeCustomerReviewsOutputSchema = z.object({
  summary: z.string().describe('The summary of the customer reviews.'),
  sentiment: z.string().describe('The overall sentiment of the customer reviews (positive, negative, or neutral).'),
  areasForImprovement: z.string().describe('The areas for improvement based on the customer reviews.'),
});
export type SummarizeCustomerReviewsOutput = z.infer<typeof SummarizeCustomerReviewsOutputSchema>;

export async function summarizeCustomerReviews(input: SummarizeCustomerReviewsInput): Promise<SummarizeCustomerReviewsOutput> {
  return summarizeCustomerReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerReviewsPrompt',
  input: {schema: SummarizeCustomerReviewsInputSchema},
  output: {schema: SummarizeCustomerReviewsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing customer reviews for a specific product.

  Product Name: {{productName}}
  Customer Reviews: {{customerReviews}}

  Provide a concise summary of the customer reviews, identify the overall sentiment (positive, negative, or neutral), and list any areas for improvement based on the reviews.
  Summary:
  Sentiment:
  Areas for Improvement:`,
});

const summarizeCustomerReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerReviewsFlow',
    inputSchema: SummarizeCustomerReviewsInputSchema,
    outputSchema: SummarizeCustomerReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
