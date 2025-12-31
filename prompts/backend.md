# Backend Development Prompts

## API Design

```
设计一个RESTful API端点，用于用户管理系统：
- 端点：/api/v1/users
- 方法：GET, POST, PUT, DELETE
- 功能：用户CRUD操作、分页、搜索、排序
- 安全：JWT认证、角色权限控制
- 技术：Node.js + Express + TypeScript

请提供完整的控制器代码、路由定义和Swagger文档。
```

## Database Optimization

```
优化以下数据库查询，目标是提升性能：
[SQL查询]

要求：
1. 分析当前查询的执行计划
2. 识别性能瓶颈
3. 提供优化后的查询
4. 建议适当的索引策略
5. 解释优化原理
```

## Security Implementation

```
实现一个安全的用户认证系统，包含：
- JWT token生成和验证
- 密码加密（bcrypt）
- 刷新token机制
- 防止常见攻击（CSRF、XSS、SQL注入）
- 使用Node.js + Express

请提供完整的代码实现，包括中间件和错误处理。
```

## Backend Performance

```
设计一个高并发、低延迟的API系统：
- 支持10万QPS
- 响应时间<100ms
- 使用Redis缓存
- 数据库连接池优化
- 实现限流和熔断

技术栈：Node.js + Redis + PostgreSQL
```
