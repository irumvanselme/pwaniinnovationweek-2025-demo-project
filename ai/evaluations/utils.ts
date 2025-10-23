type TestCase = {
  only?: boolean
}

export function getTestCases<T extends TestCase>(testCases: T[]): T[] {
  const matching = testCases.filter(testCase => testCase.only)
  return matching.length > 0 ? matching : testCases
}
