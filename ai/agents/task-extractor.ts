import z from 'zod';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';

const ResponseSchema = z.array(
	z.object({
		owner: z
			.string()
			.describe(
				"The owner of the task, usually the employee's proper name assigned to the task."
			),
		task: z.string().describe('A concise description of the task to be done.'),
		dueDate: z
			.string()
			.optional()
			.describe('The due date for the task, if specified.'),
	})
);

const { object } = await generateObject({
	model: openai('gpt-5'),
	schema: ResponseSchema,
	system: 'You are an agent that extracts tasks from messages.',
	prompt: `Extract all tasks from the following message and respond in JSON format with the fields: owner, task, and dueDate (if specified). If no tasks are found, return an empty array.`,
});
