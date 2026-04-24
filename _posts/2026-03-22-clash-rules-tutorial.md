---
layout: post
title: Clash 规则配置详解 - 从入门到精通
date: 2026-03-22
category: 教程
keywords: "Clash 规则, 规则配置, 分流规则"
description: "详细讲解 Clash 规则配置的各种方法和技巧，帮助您更好地使用 Clash"
---

## Clash 规则基础

Clash 使用规则来决定不同的流量如何被处理。规则从上到下依次匹配，第一个匹配的规则生效。

## 规则类型

### 1. DOMAIN 规则

精确匹配域名：

```yaml
rules:
  - DOMAIN,google.com,PROXY
```

### 2. DOMAIN-SUFFIX 规则

匹配域名后缀：

```yaml
rules:
  - DOMAIN-SUFFIX,google.com,PROXY
```

这会匹配 `google.com` 和 `mail.google.com`。

### 3. IP-CIDR 规则

匹配 IP 地址范围：

```yaml
rules:
  - IP-CIDR,192.168.0.0/16,DIRECT
```

### 4. GEOIP 规则

按地理位置匹配：

```yaml
rules:
  - GEOIP,CN,DIRECT
```

## 规则优先级

规则按照从上到下的顺序匹配，第一个匹配的规则生效。

```yaml
rules:
  - DOMAIN,google.com,PROXY        # 优先级 1
  - DOMAIN-SUFFIX,com,DIRECT       # 优先级 2
  - GEOIP,CN,DIRECT                # 优先级 3
  - MATCH,PROXY                     # 默认规则
```

## 常用规则组合

```yaml
rules:
  # 国内网站直连
  - GEOIP,CN,DIRECT
  
  # 特定域名代理
  - DOMAIN-SUFFIX,google.com,PROXY
  - DOMAIN-SUFFIX,youtube.com,PROXY
  
  # 默认规则
  - MATCH,PROXY
```

