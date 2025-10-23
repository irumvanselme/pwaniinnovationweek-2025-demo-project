import z from "zod";
import { tasksSchema } from "../agents/task-extractor";

export type Evaluation = {
  /**
   * The id of the evaluation test - used for unique identification, debugging and logging.
   */
  id: string;

  /**
   * If true, this is the only evaluation that will be run.
   */
  only?: boolean;

  /**
   * The given message to extract tasks from.
   */
  givenMessage: string;

  /**
   * The expected number of tasks extracted from the given message.
   */
  expectedTasksLen: number;

  /**
   * The expected tasks extracted from the given message.
   */
  expectedTasks: z.infer<typeof tasksSchema>;
};
