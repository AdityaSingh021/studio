'use server';
/**
 * @fileOverview An AI agent that enhances resume/portfolio content.
 *
 * - enhanceResumeContent - A function that suggests improvements to resume/portfolio content.
 * - EnhanceResumeContentInput - The input type for the enhanceResumeContent function.
 * - EnhanceResumeContentOutput - The return type for the enhanceResumeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceResumeContentInputSchema = z.object({
  content: z
    .string()
    .describe('The resume/portfolio content to be enhanced.'),
});
export type EnhanceResumeContentInput = z.infer<typeof EnhanceResumeContentInputSchema>;

const EnhanceResumeContentOutputSchema = z.object({
  enhancedContent: z
    .string()
    .describe('The enhanced resume/portfolio content with suggested improvements.'),
});
export type EnhanceResumeContentOutput = z.infer<typeof EnhanceResumeContentOutputSchema>;

export async function enhanceResumeContent(input: EnhanceResumeContentInput): Promise<EnhanceResumeContentOutput> {
  return enhanceResumeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceResumeContentPrompt',
  input: {schema: EnhanceResumeContentInputSchema},
  output: {schema: EnhanceResumeContentOutputSchema},
  prompt: `You are an AI assistant specialized in enhancing resume and portfolio content.

  Please review the following content and suggest improvements to make it more clear, concise, and impactful. Focus on highlighting key skills, experiences, and achievements.

  Content to enhance: {{{content}}}`,
});

const enhanceResumeContentFlow = ai.defineFlow(
  {
    name: 'enhanceResumeContentFlow',
    inputSchema: EnhanceResumeContentInputSchema,
    outputSchema: EnhanceResumeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
