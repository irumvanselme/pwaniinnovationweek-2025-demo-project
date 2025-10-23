"use server";
import { extractTasks as TaskExtractorAgent } from "@/ai/agents/task-extractor";

export async function extractTasks(message: string) {
  return await TaskExtractorAgent(message);
}
