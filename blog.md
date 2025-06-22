---
layout: default
title: ブログ一覧
permalink: /blog
---

<div id="blog" class="page">
    <h2>My Blog📝</h2>
    <div class="blog-list">
    {% for post in site.posts %}
        <div class="blog-item">
            <a href="{{ post.url | relative_url }}">
                {% if post.image %}
                    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="thumb-img" />
                {% endif %}
                <h3>{{ post.title }}</h3>
                <p class="post-date">{{ post.date | date: "%-m/%-d/%Y" }}</p>
                <p class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
            </a>
        </div>
    {% endfor %}
  </div>
</div>
