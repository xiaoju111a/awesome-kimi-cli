"""
Hello World example using Kimi Agent SDK.

This demonstrates basic usage of the Kimi Agent SDK to send a prompt
and stream the response.
"""

import asyncio
import os

from kimi_cli.config import Config, LLMModel, LLMProvider
from kimi_agent_sdk import prompt


def make_config() -> Config:
    """Build a Config with API key from environment variable."""
    api_key = os.environ.get("KIMI_API_KEY", "")
    return Config(
        default_model="kimi",
        providers={
            "moonshot": LLMProvider(
                type="kimi",
                base_url="https://api.moonshot.cn/v1",
                api_key=api_key,
            ),
        },
        models={
            "kimi": LLMModel(
                provider="moonshot",
                model="kimi-k2.5",
                max_context_size=128000,
            ),
        },
    )


async def main() -> None:
    print("Sending prompt to Kimi...")
    print("-" * 50)

    async for msg in prompt(
        "Hello, Kimi! Please introduce yourself in one sentence.",
        config=make_config(),
        yolo=True,
    ):
        text = msg.extract_text()
        if text:
            print(text, end="", flush=True)

    print()
    print("-" * 50)
    print("Done!")


if __name__ == "__main__":
    asyncio.run(main())
