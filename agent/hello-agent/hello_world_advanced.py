"""
Advanced Hello World example using Kimi Agent SDK.

This example demonstrates manual approval handling and session management.
"""

import asyncio
from kimi_agent_sdk import ApprovalRequest, Session, TextPart


async def main() -> None:
    """
    Advanced example with manual approval handling.
    
    This demonstrates:
    - Creating a persistent session
    - Handling approval requests manually
    - Processing different message types
    """
    print("Creating Kimi session...")
    print("-" * 50)
    
    # Create a session with custom configuration
    async with await Session.create(
        work_dir=".",
        # You can add more options here:
        # model="kimi-k2-thinking-turbo",
        # api_key="your-key-here"
    ) as session:
        
        print("Sending prompt...")
        
        # Send prompt and handle messages manually
        async for wire_msg in session.prompt(
            "Hello, Kimi! Please introduce yourself and tell me what you can do."
        ):
            match wire_msg:
                case TextPart(text=text):
                    # Print text content
                    print(text, end="", flush=True)
                
                case ApprovalRequest() as req:
                    # Handle approval requests
                    # You can add custom logic here to decide whether to approve
                    print(f"\n[Approval Request: {req.action}]")
                    
                    # For this example, we auto-approve everything
                    req.resolve("approve")
                    print("[Approved]")
                
                case _:
                    # Handle other message types if needed
                    pass
    
    print()
    print("-" * 50)
    print("Session closed!")


if __name__ == "__main__":
    asyncio.run(main())
