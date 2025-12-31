<p align="center">
  <img src="https://avatars.githubusercontent.com/u/129152888?s=200&v=4" alt="Kimi CLI Logo" width="120">
</p>

<h1 align="center">Awesome Kimi CLI</h1>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="README_CN.md">中文</a>
</p>

> 🚀 A curated list of awesome resources, tools, scripts, and tips for Kimi CLI users.

[Kimi CLI](https://github.com/MoonshotAI/kimi-cli) is a command-line tool for Kimi AI assistant, enabling you to interact with Kimi directly from your terminal.

## Contents

- [Official Resources](#official-resources)
- [Installation & Configuration](#installation--configuration)
- [Tips & Tricks](#tips--tricks)
- [Plugins & Extensions](#plugins--extensions)
- [Integrations](#integrations)
- [Prompts](#prompts)
- [Community](#community)
- [Projects Using Kimi CLI](#projects-using-kimi-cli)

## Official Resources

- [Kimi CLI Repository](https://github.com/MoonshotAI/kimi-cli) - Official source code
- [Kimi CLI Documentation](https://www.kimi.com/coding/docs/kimi-cli.html) - Official documentation
- [Kimi Website](https://kimi.moonshot.cn/) - Kimi AI official website
- [Moonshot AI](https://www.moonshot.cn/) - The company behind Kimi

## Installation & Configuration

### Installation

Kimi CLI is published on PyPI. We recommend installing with [uv](https://docs.astral.sh/uv/):

```bash
# Install Kimi CLI
uv tool install --python 3.13 kimi-cli

# Verify installation
kimi --help

# Upgrade to latest version
uv tool upgrade kimi-cli --no-cache
```

### Configuration

**Initial Setup:** Run `kimi` in your working directory, then send `/setup` for initial configuration.

## Tips & Tricks

### Common Commands

- `/help` - View help
- `/mcp` - Check MCP server status
- `/setup` - Configure API Key
- `Ctrl-X` - Toggle Shell mode

## Plugins & Extensions

- [MCP Servers](https://github.com/modelcontextprotocol/servers) - Official MCP server collection
- MCP Support - Extend tools via MCP protocol. Create `~/.kimi/mcp.json` or use `--mcp-config-file`:

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "context7": {
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

- [zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) - Zsh plugin for Kimi CLI

## Integrations

- IDE Integration - Supports ACP-compatible editors like Zed, JetBrains, etc. Example config:

```json
{
  "agent_servers": {
    "Kimi CLI": {
      "command": "kimi",
      "args": ["--acp"]
    }
  }
}
```

- ACP Protocol - Agent Client Protocol support for editor integration

## Prompts

A collection of useful prompts for Kimi CLI. See [prompts/](prompts/) for more.

## Community

- [Moonshot AI Forum](https://forum.moonshot.ai) - Join discussions, ask questions, and share ideas about the Moonshot AI platform and APIs

## Projects Using Kimi CLI

- [AionUi](https://github.com/iOfficeAI/AionUi) - Official ACP-compatible client that auto-detects and integrates with Kimi CLI via ACP protocol, offering a modern GUI
- [Wise-Will-agent](https://github.com/zjrwtx/Wise-Will-agent) - Open-source AI education agent with thinking different design

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
