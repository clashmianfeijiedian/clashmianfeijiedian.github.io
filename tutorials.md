---
layout: default
title: Clash 教程中心
permalink: /tutorials
---

<!-- 面包屑导航 -->
<div style="padding: 16px 0; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
    <div class="container" style="font-size: 14px; color: #6b7280;">
        <a href="/" style="color: #1e40af; text-decoration: none;">首页</a>
        <span style="margin: 0 8px;">/</span>
        <span>教程中心</span>
    </div>
</div>

<!-- 页面头部 -->
<section style="padding: 60px 20px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; text-align: center;">
    <div class="container">
        <h1 style="margin: 0 0 20px 0; font-size: 40px; font-family: 'Poppins', sans-serif;">📚 Clash 教程中心</h1>
        <p style="margin: 0; font-size: 18px; opacity: 0.9;">详细的 Clash 配置教程、使用指南和常见问题解答</p>
    </div>
</section>

<!-- 教程列表 -->
<section style="padding: 60px 20px; background: white;">
    <div class="container" style="max-width: 1200px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
            {% assign tutorials = site.tutorials | sort: 'date' | reverse %}
            {% if tutorials.size > 0 %}
                {% for tutorial in tutorials %}
                <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; transition: all 0.3s; cursor: pointer;">
                    <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); height: 150px; display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">
                        {{ tutorial.icon | default: '📖' }}
                    </div>
                    <div style="padding: 24px;">
                        <h3 style="margin: 0 0 12px 0; font-size: 18px; font-family: 'Poppins', sans-serif;">
                            <a href="{{ tutorial.url }}" style="color: #1e40af; text-decoration: none;">{{ tutorial.title }}</a>
                        </h3>
                        <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px; line-height: 1.6;">{{ tutorial.description | truncate: 100 }}</p>
                        <a href="{{ tutorial.url }}" style="color: #f97316; text-decoration: none; font-weight: 600; font-size: 14px;">阅读教程 →</a>
                    </div>
                </div>
                {% endfor %}
            {% else %}
                <p style="grid-column: 1 / -1; text-align: center; color: #6b7280; padding: 40px;">暂无教程</p>
            {% endif %}
        </div>
    </div>
</section>
