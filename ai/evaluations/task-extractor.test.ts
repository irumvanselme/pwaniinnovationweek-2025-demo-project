import { describe, test, expect } from "vitest";

import { type Evaluation } from "./types";
import { getTestCases } from "./utils";

import { extractTasks } from "../agents/task-extractor";

const evaluationTests: Evaluation[] = [
  {
    id: "simple_test_case",
    givenMessage:
      "Hey James, I wanted to let you know that you are about to send the report to the client by tomorrow.",
    expectedTasksLen: 1,
    expectedTasks: [
      {
        owner: expect.stringMatching(/James/i),
        task: expect.stringMatching(/report/i),
        due: expect.stringMatching(/tomorrow/i),
      },
    ],
  },
  {
    id: "unclear_case",
    givenMessage:
      "Hey team, just a reminder that the project proposal is due next Friday. " +
      "Let's make sure to review it by Wednesday so we have time for any last-minute changes.",
    expectedTasksLen: 2,
    expectedTasks: [
      {
        owner: expect.stringMatching(/team/i),
        task: expect.stringMatching(/submit/i),
        due: expect.stringMatching(/next friday/i),
      },
      {
        owner: expect.stringMatching(/team/i),
        task: expect.stringMatching(/review/i),
        due: expect.stringMatching(/wednesday/i),
      },
    ],
  },
];

describe(
  "task extractor agent evaluations",
  () => {
    test.each(getTestCases(evaluationTests))(
      "should extract tasks from manager's message case: $id",
      async (evalTest) => {
        // GIVEN a manager's message.
        const givenManagersMessage = evalTest.givenMessage;

        // WHEN we extract tasks from the message.
        const actualTasks = await extractTasks(evalTest.givenMessage);

        // Log some debug info for debugging purposes.
        console.debug({ givenManagersMessage, actualTasks });

        // THEN the number of tasks should match the expected number.
        expect(actualTasks.length).toBe(evalTest.expectedTasksLen);

        // AND the tasks should match the expected tasks.
        expect(actualTasks).toEqual(
          expect.arrayContaining(evalTest.expectedTasks),
        );
      },
    );
  },
  { retry: 3, timeout: 10000 },
);
