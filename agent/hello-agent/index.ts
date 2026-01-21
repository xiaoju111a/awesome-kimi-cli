/**
 * Hello Agent - Kimi Agent SDK Example
 * 
 * This example demonstrates how to use Kimi Agent SDK to create a simple AI assistant
 */

import { createSession } from '@moonshot-ai/kimi-agent-sdk';
import * as path from 'path';
import { execSync } from 'child_process';
import * as os from 'os';
import * as fs from 'fs';

// Find kimi executable path
function findKimiExecutable(): string {
  // Try common locations
  const possiblePaths = [
    path.join(os.homedir(), '.local', 'bin', 'kimi'),
    '/usr/local/bin/kimi',
    '/opt/homebrew/bin/kimi',
  ];

  // Check if kimi is in PATH
  try {
    const whichResult = execSync('which kimi', { encoding: 'utf-8' }).trim();
    if (whichResult) {
      return whichResult;
    }
  } catch (e) {
    // which command failed, continue to check possible paths
  }

  // Check possible paths
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  // Default to 'kimi' and hope it's in PATH
  return 'kimi';
}

async function main() {
  console.log('🤖 Hello Agent - Kimi Agent SDK Example\n');

  // Find kimi executable
  const kimiExecutable = findKimiExecutable();
  console.log(`🔍 Found Kimi CLI at: ${kimiExecutable}\n`);

  // Create workspace directory
  const workDir = path.join(process.cwd(), 'workspace');
  
  // Ensure workspace directory exists
  if (!fs.existsSync(workDir)) {
    fs.mkdirSync(workDir, { recursive: true });
    console.log(`📁 Created workspace directory: ${workDir}\n`);
  }

  // Create Kimi Agent session
  const session = createSession({
    workDir: workDir,
    model: process.env.KIMI_MODEL_NAME || 'moonshot-cn/kimi-k2-thinking-turbo',
    thinking: false, // Don't show thinking process
    yoloMode: true,  // Auto-approve tool calls
    executable: kimiExecutable, // Use the found kimi executable path
    env: {
      ...process.env,
      PATH: `${path.join(os.homedir(), '.local', 'bin')}:${process.env.PATH}`, // Add kimi to PATH
    },
  });

  console.log('✅ Session created');
  console.log(`📁 Work directory: ${workDir}`);
  console.log(`🆔 Session ID: ${session.sessionId}\n`);

  try {
    // Send first prompt
    console.log('👤 User: Hello! Please introduce yourself.\n');
    console.log('🤖 Kimi: ');

    const turn = session.prompt('Hello! Please introduce yourself.');

    // Process streaming response
    for await (const event of turn) {
      // Handle text content
      if (event.type === 'ContentPart' && event.payload.type === 'text') {
        process.stdout.write(event.payload.text);
      }

      // Handle tool calls
      if (event.type === 'ToolCall') {
        const toolCall = event.payload;
        console.log(`\n[🔧 Using tool: ${toolCall.function.name}]`);
      }

      // Handle tool results
      if (event.type === 'ToolResult') {
        const result = event.payload;
        if (!result.return_value.is_error) {
          console.log('[✓ Tool executed successfully]');
        }
      }

      // Handle status updates (Token usage)
      if (event.type === 'StatusUpdate' && event.payload.token_usage) {
        const usage = event.payload.token_usage;
        const total = usage.input_other + usage.output;
        console.log(`\n\n📊 Token usage: ${total} (input: ${usage.input_other}, output: ${usage.output})`);
      }
    }

    console.log('\n');

    // Get final result
    const result = await turn.result;
    console.log(`✅ Status: ${result.status}`);

    // Demonstrate multi-turn conversation
    console.log('\n--- Multi-turn Conversation Example ---\n');
    console.log('👤 User: What can you help me with?\n');
    console.log('🤖 Kimi: ');

    const turn2 = session.prompt('What can you help me with?');

    for await (const event of turn2) {
      if (event.type === 'ContentPart' && event.payload.type === 'text') {
        process.stdout.write(event.payload.text);
      }
    }

    console.log('\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    // Close session
    await session.close();
    console.log('\n👋 Session closed');
  }
}

// Run main function
main().catch(console.error);
