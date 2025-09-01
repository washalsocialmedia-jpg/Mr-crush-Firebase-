'use server';

/**
 * @fileOverview AI-powered product description generator.
 *
 * - generateProductDescription - A function that generates a product description based on product information.
 * - ProductDescriptionInput - The input type for the generateProductDescription function.
 * - ProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productCategory: z.string().describe('The category of the product.'),
  productDetails: z.string().describe('More details about the product.'),
});
export type ProductDescriptionInput = z.infer<typeof ProductDescriptionInputSchema>;

const ProductDescriptionOutputSchema = z.object({
  productDescription: z.string().describe('A detailed and engaging description of the product.'),
});
export type ProductDescriptionOutput = z.infer<typeof ProductDescriptionOutputSchema>;

export async function generateProductDescription(input: ProductDescriptionInput): Promise<ProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productDescriptionPrompt',
  input: {schema: ProductDescriptionInputSchema},
  output: {schema: ProductDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in product descriptions.

  Generate an engaging and informative product description based on the following information:

  Product Name: {{{productName}}}
  Category: {{{productCategory}}}
  Details: {{{productDetails}}}
  `,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: ProductDescriptionInputSchema,
    outputSchema: ProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
