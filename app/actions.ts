"use server";

import { extractTasks as taskExtractorAgent } from "@/ai/agents/task-extractor";

export async function extractTasks(message: string) {
  return await taskExtractorAgent.call(null, message);
}
