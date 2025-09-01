// This file implements the AI chatbot flow for customer support.
'use server';

/**
 * @fileOverview An AI chatbot for answering customer questions about products and orders.
 *
 * - aiChatbot - A function that handles the chatbot interaction.
 * - AiChatbotInput - The input type for the aiChatbot function.
 * - AiChatbotOutput - The return type for the aiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiChatbotInputSchema = z.object({
  message: z.string().describe('The customer message to the chatbot.'),
  adminInstructions: z
    .string()
    .optional()
    .describe('Admin instructions on how the bot should respond to questions.'),
});
export type AiChatbotInput = z.infer<typeof AiChatbotInputSchema>;

const AiChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the customer message.'),
});
export type AiChatbotOutput = z.infer<typeof AiChatbotOutputSchema>;

export async function aiChatbot(input: AiChatbotInput): Promise<AiChatbotOutput> {
  return aiChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotPrompt',
  input: {schema: AiChatbotInputSchema},
  output: {schema: AiChatbotOutputSchema},
  prompt: `You are a customer support chatbot for an online store. Your goal is to answer customer questions about products and orders.

Admin Instructions: {{{adminInstructions}}}

Customer Message: {{{message}}}

Response:`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AiChatbotInputSchema,
    outputSchema: AiChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
