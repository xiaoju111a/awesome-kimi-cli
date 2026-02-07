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

> 🚀 精选的 Kimi CLI 资源、工具、脚本和使用技巧合集

[Kimi CLI](https://github.com/MoonshotAI/kimi-cli) 是 Kimi AI 助手的命令行工具，让你在终端中与 Kimi 进行交互。

## 目录

- [官方资源](#官方资源)
- [安装与配置](#安装与配置)
- [使用技巧](#使用技巧)
- [插件与扩展](#插件与扩展)
- [集成工具](#集成工具)
- [社区资源](#社区资源)
- [与 Kimi CLI 相关的项目](#与-kimi-cli-相关的项目)

## 官方资源

- [Kimi CLI 官方仓库](https://github.com/MoonshotAI/kimi-cli) - 官方源代码
- [Kimi CLI 官方文档](https://www.kimi.com/coding/docs/kimi-cli.html) - 官方使用文档
- [Kimi 官网](https://kimi.moonshot.cn/) - Kimi AI 官方网站
- [Moonshot AI](https://www.moonshot.cn/) - Kimi 背后的公司

## 安装与配置

### 安装方式

Kimi CLI 发布在 PyPI 上，推荐使用 [uv](https://docs.astral.sh/uv/) 安装：

```bash
# 安装 Kimi CLI
uv tool install --python 3.13 kimi-cli

# 验证安装
kimi --help

# 启动 Kimi CLI
uv run kimi

# 升级到最新版本
uv tool upgrade kimi-cli --no-cache
```

### 配置指南

**首次设置：** 在工作目录运行 `kimi`，然后发送 `/setup` 进行初始配置。

## 使用技巧

### 常用命令

- `/help` - 查看帮助
- `/mcp` - 查看 MCP 服务器状态
- `/setup` - 配置 API Key
- `Ctrl-X` - 切换 Shell 模式

## 插件与扩展

- [MCP Servers](https://github.com/modelcontextprotocol/servers) - 官方 MCP 服务器合集
- MCP 支持 - 可以通过 MCP 协议扩展工具。创建 `~/.kimi/mcp.json` 或使用 `--mcp-config-file`
- [zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) - Zsh 插件

## 集成工具

- IDE 集成 - 支持 Zed、JetBrains 等 ACP 兼容编辑器
- ACP 协议 - Agent Client Protocol 支持，用于编辑器集成

## 社区资源

- [Moonshot AI 论坛](https://forum.moonshot.ai) - 参与讨论、提问和分享关于 Moonshot AI 平台和 API 的想法

## 与 Kimi CLI 相关的项目

- [kimi-agent-sdk](https://github.com/MoonshotAI/kimi-agent-sdk) - 官方 SDK，用于编程方式控制 Kimi CLI，支持 Go、Node.js 和 Python
- [kimi-actions](https://github.com/xiaoju111a/kimi-actions) - 基于 Kimi 的 AI 代码审查 GitHub Action，支持 PR 审查、自动描述和 Issue 分类
- [AionUi](https://github.com/iOfficeAI/AionUi) - ACP 官方兼容客户端，自动检测并通过 ACP 协议集成 Kimi CLI，提供现代化图形界面
- [Wise-Will-agent](https://github.com/zjrwtx/Wise-Will-agent) - 开源 AI 教育 Agent，thinking different design
- [wemac](https://github.com/x5iu/wemac) - It just works 的 Mac 版微信 RPA 群聊机器人
- [kimi-cli-for-xbow](https://github.com/m-sec-org/kimi-cli-for-xbow) - 基于 kimi-cli 二次开发的 CTF 竞赛专用 Agent
- [toad](https://github.com/batrachianai/toad) - 终端中的统一 AI 接口
- [KimiCode-GUI](https://github.com/ZacharyZhang-NY/KimiCode-GUI) - 基于 Rust + Tauri 2 的 Kimi CLI 桌面 GUI，内嵌 PTY 终端保持与 CLI 完全一致的功能
- [OKbot](https://github.com/albertwyjoy-bit/OKbot) - Kimi CLI 飞书集成，支持跨端 Session 接续、语音操控、浏览器/Android 自动化及动态 Skills 热更新

---

## 贡献指南

欢迎提交 PR 来完善这个列表！详见 [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
