---
title: "Layout: Header Video"
header:
  video:
    id: iLqGzEkusIw
    provider: youtube
# categories:
#   - Layout
#   - Uncategorized
# tags:
#   - video
#   - layout
toc: true
toc_sticky: true
---

This post should display a **header with a responsive video**, if the theme supports it.

## Settings

```JAVA
| Parameter  | Required     | Description |
|----------  |---------     | ----------- |
| `id`       | **Required** | ID of the video |
| `provider` | **Required** | Hosting provider of the video, either `youtube` or `vimeo` |
```

### YouTube

```liquid
{% raw %}{% include video id="Eim11QYLfEY" provider="youtube" %}{% endraw %}
```

```liquid
{% raw %}{% include video id="clbI-NL4s2k" provider="youtube" %}{% endraw %}
```

```liquid
{% raw %}{% include video id="bCDBpdsED6Y" provider="youtube" %}{% endraw %}
```

{% include video id="Eim11QYLfEY" provider="youtube" %}

{% include video id="clbI-NL4s2k" provider="youtube" %}

{% include video id="bCDBpdsED6Y" provider="youtube" %}

To embed it as a video header you'd use the following YAML Front Matter

```yaml
header:
  video:
    id: Eim11QYLfEY
    provider: youtube
```

```yaml
header:
  video:
    id: clbI-NL4s2k
    provider: youtube
```

```yaml
header:
  video:
    id: bCDBpdsED6Y
    provider: youtube
```

### Vimeo

To embed the following Vimeo video at url `https://vimeo.com/212731897` into a post or page's main content you'd use:

```liquid
{% raw %}{% include video id="212731897" provider="vimeo" %}{% endraw %}
```

{% include video id="212731897" provider="vimeo" %}

To embed it as a video header you'd use the following YAML Front Matter

```yaml
header:
  video:
    id: 212731897
    provider: vimeo
```
