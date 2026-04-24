---
layout: post
title: Clash 订阅链接完全指南 - 如何获取和使用
date: 2026-03-26
category: 教程
keywords: "Clash 订阅链接, 订阅配置, 代理订阅"
description: "详细讲解如何获取 Clash 订阅链接，以及如何在 Clash 中正确导入和使用订阅链接"
---

## 什么是 Clash 订阅链接

Clash 订阅链接是一个特殊的 URL，包含了多个代理节点的配置信息。通过订阅链接，您可以一次导入多个节点，而不需要手动添加每个节点。

## 如何获取订阅链接

### 从机场获取

1. 登录您的机场账户
2. 找到"订阅链接"或"Clash 订阅"选项
3. 复制订阅链接（通常看起来像 `https://example.com/api/v1/client/subscribe?token=xxxxx`）

### 订阅链接的组成

```
https://example.com/api/v1/client/subscribe?token=abc123xyz
```

- `https://example.com` - 机场服务器地址
- `/api/v1/client/subscribe` - API 端点
- `?token=abc123xyz` - 您的个人令牌

## 在 Clash 中导入订阅链接

### 方法一：Web UI 导入

1. 打开 Clash Web UI（通常是 `http://localhost:9090/ui`）
2. 点击左侧菜单的"配置"
3. 在"订阅"部分粘贴您的订阅链接
4. 点击"导入"按钮
5. 等待导入完成

### 方法二：配置文件导入

1. 编辑 Clash 的配置文件（`config.yaml`）
2. 在 `proxy-providers` 部分添加：

```yaml
proxy-providers:
  my-airport:
    url: https://example.com/api/v1/client/subscribe?token=xxxxx
    interval: 3600
    path: ./providers/my-airport.yaml
    health-check:
      enable: true
      interval: 600
      url: http://www.gstatic.com/generate_204
```

3. 保存文件并重启 Clash

## 常见问题

### Q: 订阅链接失效怎么办？
A: 检查您的账户是否还有有效期，或联系机场客服。

### Q: 如何更新订阅？
A: 大多数 Clash 客户端会自动定期更新订阅，您也可以手动点击"更新"按钮。

### Q: 订阅链接可以分享吗？
A: 不建议分享您的订阅链接，因为它包含您的个人令牌。

