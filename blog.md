---
layout: default
title: ブログ一覧（年・月別）
permalink: /blog/
---

<div id="blog" class="page">
  <h1>My Blog📝</h1>

{% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year %}
{% assign year = year_group.name %}

<h2 class="toggle-header year-toggle" data-target="year-{{ year }}">{{ year }}年 <span class="toggle-icon">▶</span></h2>

    <div id="year-{{ year }}" class="year-group hidden">
      {% assign posts_by_month = year_group.items | group_by_exp:"post", "post.date | date: '%m'" %}

      {% for month_group in posts_by_month %}
        {% assign month = month_group.name | plus: 0 %}
        <h3 class="toggle-header month-toggle" data-target="month-{{ year }}-{{ month }}">{{ month }}月 <span class="toggle-icon">▶</span></h3>

        <div id="month-{{ year }}-{{ month }}" class="month-group hidden">
          {% for post in month_group.items %}
            <div class="blog-item">
              <a href="{{ post.url | relative_url }}">
                {% if post.image %}
                  <img src="{{ post.image | relative_url }}" alt="『{{ post.title }}』のサムネイル画像" class="thumb-img" />
                {% endif %}
                <h4>{{ post.title }}</h4>
                <p class="post-date">{{ post.date | date: "%Y/%m/%d" }}</p>
                <p class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 80 }}</p>
              </a>
            </div>
          {% endfor %}
        </div>
      {% endfor %}
    </div>
    <hr />

{% endfor %}

</div>

<script src="{{ '/assets/js/script.js' | relative_url }}"></script>
