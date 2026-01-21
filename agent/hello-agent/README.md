# Hello Agent

A simple example project using Kimi Agent SDK.

## Features

- ✅ Basic Kimi Agent SDK usage
- ✅ Streaming response handling
- ✅ Multi-turn conversation support
- ✅ Tool call visibility
- ✅ Token usage statistics
- ✅ Error handling

## Prerequisites

- Node.js 18+
- [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) installed and available in PATH
- Moonshot AI API Key ([Get one here](https://platform.moonshot.ai/))

## Installation

```bash
npm install
```

## Configuration

1. Copy the environment variables example file:
```bash
cp .env.example .env
```

2. Edit `.env` file and add your API Key:
```env
KIMI_API_KEY=your-api-key-here
```

## Running

```bash
npm start
```

## Example Output

```
🤖 Hello Agent - Kimi Agent SDK Example

✅ Session created
📁 Work directory: /path/to/workspace
🆔 Session ID: abc123

👤 User: Hello! Please introduce yourself.

🤖 Kimi: Hello! I'm Kimi, an AI assistant developed by Moonshot AI...

📊 Token usage: 150 (input: 50, output: 100)

✅ Status: finished

--- Multi-turn Conversation Example ---

👤 User: What can you help me with?

🤖 Kimi: I can help you with various tasks...

👋 Session closed
```

## Code Explanation

### Create Session

```typescript
import { createSession } from '@moonshot-ai/kimi-agent-sdk';

const session = createSession({
  workDir: './workspace',           // Working directory
  model: 'kimi-k2-thinking-turbo', // Model name
  thinking: false,                  // Show thinking process
  yoloMode: true,                   // Auto-approve tool calls
});
```

### Send Prompt

```typescript
const turn = session.prompt('Hello!');
```

### Handle Response

```typescript
for await (const event of turn) {
  // Handle text content
  if (event.type === 'ContentPart' && event.payload.type === 'text') {
    console.log(event.payload.text);
  }

  // Handle tool calls
  if (event.type === 'ToolCall') {
    console.log('Using tool:', event.payload.function.name);
  }

  // Handle token usage
  if (event.type === 'StatusUpdate' && event.payload.token_usage) {
    console.log('Token usage:', event.payload.token_usage);
  }
}
```

### Get Result

```typescript
const result = await turn.result;
console.log('Status:', result.status); // 'finished' | 'cancelled' | 'max_steps_reached'
```

### Close Session

```typescript
await session.close();
```

## Event Types

Kimi Agent SDK supports the following event types:

- `TurnBegin` - Turn started
- `StepBegin` - Step started
- `ContentPart` - Content part (text, thinking, etc.)
- `ToolCall` - Tool invocation
- `ToolResult` - Tool execution result
- `StatusUpdate` - Status update (token usage, etc.)
- `ApprovalRequest` - Approval request

## Configuration Options

### Session Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `workDir` | string | Required | Working directory path |
| `sessionId` | string | Auto-generated | Session ID (for resuming) |
| `model` | string | - | Model name |
| `thinking` | boolean | false | Show thinking process |
| `yoloMode` | boolean | false | Auto-approve all tool calls |
| `executable` | string | 'kimi' | Kimi CLI executable path |
| `env` | object | - | Environment variables |

## Multi-turn Conversation

```typescript
// First turn
const turn1 = session.prompt('Hello');
for await (const event of turn1) { /* ... */ }

// Second turn (maintains context)
const turn2 = session.prompt('Continue the previous topic');
for await (const event of turn2) { /* ... */ }
```

## Error Handling

```typescript
try {
  const turn = session.prompt('Your question');
  for await (const event of turn) {
    // Handle events
  }
  const result = await turn.result;
} catch (error) {
  console.error('Error occurred:', error);
} finally {
  await session.close();
}
```

## Troubleshooting

### Kimi CLI not found

**Solution**: Install Kimi CLI
```bash
npm install -g @moonshot-ai/kimi-cli
```

### API Key error

**Solution**: Set environment variable
```bash
export KIMI_API_KEY="your-api-key"
```

### Working directory does not exist

**Solution**: Create working directory
```bash
mkdir -p workspace
```

## Next Steps

- Check [Kimi Agent SDK Documentation](https://github.com/MoonshotAI/kimi-agent-sdk)
- Try more complex example projects
- Explore tool calling features
- Learn session management

## License

MIT License
