# Hello World - Kimi Agent SDK

A simple example demonstrating basic usage of Kimi Agent SDK.

## Overview

This example shows how to:
- Create a session with Kimi Agent SDK
- Send a simple prompt
- Stream and display the response

## Prerequisites

- Python 3.12 or higher
- Kimi CLI installed and in PATH
- API key from [Moonshot AI](https://platform.moonshot.ai/)

## Installation

```bash
# Install dependencies
uv add kimi-agent-sdk
```

## Setup

Set your API key:

```bash
export KIMI_API_KEY="your-api-key-here"
```

## Usage

```bash
python hello_world.py
```

## What it does

The example sends a simple greeting prompt to Kimi and streams the response back to the console.

## Code Example

**Simple Usage:**
```python
from kimi_agent_sdk import prompt

async for msg in prompt("Hello, Kimi! Please introduce yourself in one sentence."):
    print(msg.extract_text(), end="", flush=True)
```

**Advanced Usage with Manual Approval:**
```python
from kimi_agent_sdk import ApprovalRequest, Session, TextPart

async with await Session.create(work_dir=".") as session:
    async for wire_msg in session.prompt("Your prompt here"):
        match wire_msg:
            case TextPart(text=text):
                print(text, end="", flush=True)
            case ApprovalRequest() as req:
                req.resolve("approve")
```

## Features

1. **High-level API**: Simple `prompt()` function for quick usage
2. **Low-level API**: `Session` for fine-grained control
3. **Streaming**: Real-time response streaming
4. **Approval Handling**: Manual or automatic approval of agent actions
