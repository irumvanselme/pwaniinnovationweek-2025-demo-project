import z from "zod";
import { tasksSchema } from "../agents/task-extractor";

export type Evaluation = {
  id: string;
  only?: boolean;
  givenMessage: string;
  expectedTasksLen: number;
  expectedTasks: z.infer<typeof tasksSchema>;
};
