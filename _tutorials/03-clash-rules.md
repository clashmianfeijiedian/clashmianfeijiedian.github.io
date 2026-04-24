---
layout: tutorial
title: Clash 规则配置完全指南
icon: "📋"
description: "学习如何配置 Clash 的规则和分流"
keywords: "Clash 规则, Clash 分流, 规则配置"
---

## Clash 规则基础

Clash 使用规则来决定流量如何被代理。

## 常见规则类型

1. **DOMAIN** - 按域名匹配
2. **DOMAIN-SUFFIX** - 按域名后缀匹配
3. **IP-CIDR** - 按 IP 地址范围匹配
4. **GEOIP** - 按地理位置匹配

## 规则优先级

规则从上到下依次匹配，第一个匹配的规则生效。

