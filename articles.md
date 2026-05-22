---
layout: default
title: Clash 资讯
permalink: /articles
---

<!-- 面包屑导航 -->
<div style="padding: 16px 0; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
    <div class="container" style="font-size: 14px; color: #6b7280;">
        <a href="/" style="color: #1e40af; text-decoration: none;">首页</a>
        <span style="margin: 0 8px;">/</span>
        <span>文章</span>
    </div>
</div>

<!-- 页面头部 -->
<section style="padding: 60px 20px; background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; text-align: center;">
    <div class="container">
        <h1 style="margin: 0 0 20px 0; font-size: 40px; font-family: 'Poppins', sans-serif;">📰 Clash 资讯</h1>
        <p style="margin: 0; font-size: 18px; opacity: 0.9;">最新的 Clash 相关资讯、更新日志和行业动态</p>
    </div>
</section>

<!-- 文章列表 - 带侧边栏 -->
<section style="padding: 60px 20px; background: white;">
    <div class="container" style="max-width: 1200px;">
        <div class="main-with-sidebar">
            <!-- 主要内容 -->
            <div class="main-content">
                <div style="display: grid; gap: 24px;">
                    {% assign posts = site.posts | sort: 'date' | reverse %}
                    {% if posts.size > 0 %}
                        {% for post in posts %}
                        <article style="background: white; padding: 24px; border-radius: 12px; border-left: 4px solid #1e40af; transition: all 0.3s ease; border: 1px solid #e5e7eb;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px; gap: 16px;">
                                <div style="flex: 1;">
                                    <h2 style="font-size: 22px; margin: 0 0 12px 0; line-height: 1.4; font-family: 'Poppins', sans-serif;">
                                        <a href="{{ post.url }}" style="color: #1e40af; text-decoration: none;">{{ post.title }}</a>
                                    </h2>
                                    <div style="display: flex; gap: 16px; font-size: 13px; color: #6b7280; flex-wrap: wrap;">
                                        <span>📅 {{ post.date | date: "%Y 年 %m 月 %d 日" }}</span>
                                        {% if post.author %}
                                        <span>✍️ {{ post.author }}</span>
                                        {% else %}
                                        <span>✍️ Clash 资讯站</span>
                                        {% endif %}
                                        {% if post.category %}
                                        <span style="background: #fed7aa; color: #f97316; padding: 2px 8px; border-radius: 4px; font-size: 12px;">{{ post.category }}</span>
                                        {% endif %}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 文章摘要 -->
                            {% if post.excerpt %}
                            <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                            {% elsif post.description %}
                            <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.description | strip_html | truncate: 150 }}</p>
                            {% else %}
                            <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.content | strip_html | truncate: 150 }}</p>
                            {% endif %}
                            
                            <!-- 标签展示 -->
                            {% if post.tags %}
                            <div class="tag-list" style="margin-bottom: 12px;">
                                {% for tag in post.tags %}
                                <a href="/articles" class="tag-item">{{ tag }}</a>
                                {% endfor %}
                            </div>
                            {% endif %}
                            
                            <a href="{{ post.url }}" style="display: inline-block; color: #1e40af; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 0; border-bottom: 2px solid transparent; transition: all 0.3s;">
                                阅读全文 →
                            </a>
                        </article>
                        {% endfor %}
                    {% else %}
                        <div style="text-align: center; padding: 60px 20px; color: #9ca3af;">
                            <p style="font-size: 18px;">暂无文章</p>
                        </div>
                    {% endif %}
                </div>
            </div>

            <!-- 侧边栏 -->
            {% include sidebar.html %}
        </div>
    </div>
</section>
