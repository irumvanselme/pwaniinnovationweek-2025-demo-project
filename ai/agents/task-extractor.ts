import z from "zod";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

const taskSchema = z.object({
  owner: z
    .string()
    .describe(
      "The owner of the task, usually the employee's proper name assigned to the task.",
    ),
  task: z.string().describe("A concise description of the task to be done."),
  due: z
    .string()
    .optional()
    .describe("The due date for the task, if specified."),
});

export const tasksSchema = z.array(taskSchema);

const responseSchema = z.object({
  tasks: tasksSchema,
});

/**
 * Agent:
 *  Responsibilities:
 *    -- Extract tasks from messages and return them in JSON format.
 *
 * Inputs:
 *  -- message: string the message to extract tasks from
 *
 * Response:
 *  -- tasks: array of task objects see responseSchema for details
 *
 *
 * @param message
 */
export async function extractTasks(message: string) {
  const systemInstructions =
    "You are an agent that extracts tasks from messages.";

  const prompt = `Extract all tasks from the following 
      message ${message} and 
      respond in JSON format with the fields: owner, task, and due (if specified). 
      If no tasks are found, return an empty array.`;

  // Call ai-sdk generateObject function to generate tasks from the message
  const { object: tasks } = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: responseSchema,
    system: systemInstructions,
    prompt: prompt,
  });

  return tasks.tasks;
}
