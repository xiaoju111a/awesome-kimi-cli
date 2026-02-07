# Agent

A collection of agents built with Kimi Agent SDK.

## Overview

This directory contains examples demonstrating how to use Kimi Agent SDK to build AI agents.

## Examples

### [Hello World](./hello-world/)

A simple example demonstrating basic usage of Kimi Agent SDK.

**Features:**
- Basic prompt and response
- Streaming output
- Manual approval handling

**Files:**
- `hello_world.py` - Simple high-level API usage
- `hello_world_advanced.py` - Manual session and approval handling

## Getting Started

### Prerequisites

- Python 3.12 or higher
- [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) installed
- API key from [Moonshot AI](https://platform.moonshot.ai/)

### Installation

Each example includes its own `pyproject.toml`. To install dependencies:

```bash
cd hello-world
uv sync
```

### Configuration

Set your API key:

```bash
export KIMI_API_KEY="your-api-key-here"
```

Or copy `.env.example` to `.env` and fill in your key.

## Key Features

| Feature | Description |
|---------|-------------|
| High-level API | Simple `prompt()` function for quick usage |
| Low-level API | `Session` for fine-grained control |
| Streaming | Real-time response streaming |
| Approvals | Manual or automatic approval handling |
| External Tools | Register custom functions |
| Configuration | Environment variables and options |

## Contributing

Contributions are welcome! To add a new example:

1. Create a new directory with a descriptive name
2. Include a `README.md` explaining the example
3. Add a `pyproject.toml` for dependencies
4. Include `.env.example` for configuration
5. Update this README with a link to your example

## Resources

- [Kimi Agent SDK Documentation](https://github.com/MoonshotAI/kimi-agent-sdk)
- [Kimi CLI Documentation](https://github.com/MoonshotAI/kimi-cli)
- [Moonshot AI Platform](https://platform.moonshot.ai/)
