# Task Extractor AI Agent

A demonstration project for PWANI Innovation Week 2025 showcasing how to build a simple AI Agent that extracts tasks from natural language messages.

## Overview

This project demonstrates the implementation of an AI-powered task extraction agent that intelligently parses manager messages and breaks down tasks into structured data including task owner, description, and due dates.

## What's Included

### Core Features

- Task Extraction Agent: Powered by Google's Gemini 2.5 Flash model to intelligently extract tasks from unstructured text
- Web UI: User-friendly interface built with Next.js and React for inputting messages and viewing extracted tasks
- Test Suite: Comprehensive evaluation tests demonstrating the agent's capabilities
- Type Safety: Full TypeScript support throughout the project

### Project Structure

```
presentation/
├── ai/
│   ├── agents/
│   │   └── task-extractor.ts          # Core agent logic for task extraction
│   └── evaluations/
│       ├── task-extractor.test.ts     # Test cases and evaluations
│       ├── types.ts                   # TypeScript type definitions
│       └── utils.ts                   # Utility functions
├── app/
│   ├── actions.ts                     # Server actions
│   ├── page.tsx                       # Main UI component
│   ├── layout.tsx                     # App layout
│   └── globals.css                    # Global styles
├── components/
│   └── ui/                            # Reusable UI components
│       ├── button.tsx
│       ├── textarea.tsx
│       ├── table.tsx
│       └── sonner.tsx
├── lib/
│   └── utils.ts                       # Utility functions
├── public/                            # Static assets
├── package.json                       # Project dependencies
├── tsconfig.json                      # TypeScript configuration
├── next.config.ts                     # Next.js configuration
├── vitest.config.ts                   # Testing configuration
└── biome.json                         # Code formatting configuration
```

## Technology Stack

- **Frontend**: Next.js 15.5, React 19, TailwindCSS
- **Backend**: Next.js Server Actions
- **AI Model**: Google Gemini 2.5 Flash (via AI SDK)
- **Language**: TypeScript
- **Testing**: Vitest
- **Styling**: Tailwind CSS
- **Code Quality**: Biome (linting and formatting)

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- yarn
- Google API Key for Gemini access

### Installation

1. Clone the repository:
```bash
cd /Users/anselme/Developer/tabiya/presentations/pwaniinnovationweek-2025/presentation
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the project root and add your Google API key:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### Running the Project

#### Development Server

Start the development server with Turbopack for fast builds:
```bash
yarn dev
```

The application will be available at `http://localhost:3000`

#### Production Build

Build and start the production version:
```bash
yarn build
yarn start
```

#### Testing

Run the test suite:
```bash
yarn test
```

Tests include evaluation cases for task extraction accuracy and will retry up to 3 times with a 10-second timeout.

#### Code Quality

Format code:
```bash
yarn format
```

Run linting checks:
```bash
yarn lint
```

## How It Works

### The Task Extraction Agent

The agent (`ai/agents/task-extractor.ts`) works as follows:

1. **Input**: Accepts a natural language message from a manager
2. **Processing**: Uses Gemini 2.5 Flash to intelligently parse the message
3. **Extraction**: Identifies and structures tasks with:
   - Owner: The person assigned to the task
   - Task: A concise description of what needs to be done
   - Due: The deadline (if specified)
4. **Output**: Returns structured JSON data

### Example Usage

Input message:
```
"Hey James, I wanted to let you know that you are about to send the report to the client by tomorrow."
```

Output:
```json
[
  {
    "owner": "James",
    "task": "Send the report to the client",
    "due": "tomorrow"
  }
]
```

### Web Interface

The main page provides:

- **Input Area**: Text textarea for pasting manager messages
- **Extract Button**: Triggers the task extraction process
- **Results Table**: Displays extracted tasks with columns for Owner, Description, and Due Date
- **Toast Notifications**: Real-time feedback on extraction status

## Development

### Project Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production with Turbopack
- `yarn start` - Start production server
- `yarn test` - Run test suite in watch mode
- `yarn lint` - Check code with Biome
- `yarn format` - Format code with Biome

### Key Components

- **extractTasks()**: Main agent function that extracts tasks from messages
- **Home Component**: React component providing the UI
- **Evaluation Tests**: Test cases validating agent accuracy

## API Dependencies

This project uses:

- **@ai-sdk/google**: Google AI SDK integration
- **ai**: Vercel AI SDK for structured object generation
- **zod**: Schema validation and type inference

## Testing & Evaluation

The project includes comprehensive test cases in `ai/evaluations/task-extractor.test.ts` that validate:

- Simple task extraction from direct messages
- Complex multi-task extraction from longer messages
- Accurate owner identification
- Proper due date extraction

Run evaluations with:
```bash
yarn test
```

## Learning Outcomes

This project demonstrates:

1. How to build an AI agent using the Vercel AI SDK
2. Structured output generation with Zod schemas
3. Integration of AI models into Next.js applications
4. Server-side AI processing with Next.js actions
5. Building evaluations and tests for AI agents
6. Creating responsive UIs with React and TailwindCSS

## License

This is a demonstration project for PWANI Innovation Week 2025.

## Next Steps

To extend this project:

- Add support for multiple languages
- Implement task prioritization
- Add email integration for task notifications
- Implement user authentication and task persistence
- Add more sophisticated NLP for edge cases
- Build admin dashboard for team management
