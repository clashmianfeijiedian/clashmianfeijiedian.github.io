---
layout: tutorial
title: Clash 安装和基础配置教程
icon: "⚙️"
description: "详细的 Clash 安装步骤和基础配置指南，适合初学者"
keywords: "Clash 安装, Clash 配置, Clash 教程"
toc:
  - "什么是 Clash"
  - "系统要求"
  - "下载和安装"
  - "基础配置"
  - "常见问题"
---

## 什么是 Clash

Clash 是一个基于规则的代理工具，支持多种代理协议，包括 Shadowsocks、Trojan、VMess 等。它可以帮助用户访问全球互联网资源。

## 系统要求

- Windows 10 及以上
- macOS 10.12 及以上
- Linux（各种发行版）
- Android 5.0 及以上
- iOS 13 及以上

## 下载和安装

### Windows 用户

1. 访问 [Clash 官方 GitHub](https://github.com/Dreamacro/clash/releases)
2. 下载最新的 `clash-windows-amd64.zip`
3. 解压到任意文件夹
4. 双击 `clash.exe` 运行

### macOS 用户

```bash
brew install clash
```

### Linux 用户

```bash
wget https://github.com/Dreamacro/clash/releases/download/v1.x.x/clash-linux-amd64
chmod +x clash-linux-amd64
./clash-linux-amd64
```

## 基础配置

### 1. 获取订阅链接

从您的机场获取订阅链接，通常看起来像：
```
https://example.com/api/v1/client/subscribe?token=xxxxx
```

### 2. 导入配置

在 Clash 的 Web UI 中：
1. 打开 `http://localhost:9090/ui`
2. 点击"配置"
3. 粘贴您的订阅链接
4. 点击"导入"

### 3. 选择代理

1. 在"代理"标签中选择您想使用的节点
2. 选择合适的规则组
3. 启用 Clash

## 常见问题

**Q: Clash 无法连接？**
A: 检查您的订阅链接是否正确，确保节点未过期。

**Q: 如何选择最快的节点？**
A: 使用 Clash 的"测速"功能来测试各个节点的速度。

