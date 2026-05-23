---
title: 'Markdown Markup Language'
summary: 'Markdown syntax: headings, lists, formatting, links, images, and code blocks.'
date: 2026-04-09
authors:
  - me
tags:
  - Markdown
  - Documentation
  - Web
cover:
  image: 'https://images.unsplash.com/photo-1517430816045-df4b7de1d2ac'
  position: { x: 50, y: 50 }
  overlay:
    enabled: true
    type: 'gradient'
    opacity: 0.4
  fade:
    enabled: true
    height: '80px'
image:
  caption: 'Markdown — a simple language for formatting text.'
---

# Markdown Markup Language

Markdown is a lightweight markup language designed for the rapid creation of structured documents. It is widely used in technical documentation, README files, blogs, and note-taking systems.

## Text Structure

Headings are defined using the `#` symbol. The level is determined by the number of symbols, from one to six:

```markdown
# Heading Level 1

## Heading Level 2

### Heading Level 3
```

A horizontal rule is used to visually separate content sections:

```markdown
---
```

## Formatting

Markdown supports basic text styling:

| Element | Syntax | Result |
|---------|--------|--------|
| Bold | `**text**` | **text** |
| Italic | `*text*` | *text* |
| Bold italic | `***text***` | ***text*** |

## Lists

An unordered list is created using hyphens, asterisks, or plus signs:

```markdown
- Item
- Item
- Item
```

An ordered list uses numbers followed by a period:

```markdown
1. First item
2. Second item
3. Third item
```

## Links and Images

A link consists of text in square brackets and a URL in parentheses:

```markdown
[Link text](https://example.com)
```

An image is distinguished by an exclamation mark at the beginning of the construct:

```markdown
![Alt text](https://example.com/image.png)
```

## Code Blocks

Inline code is marked with single backticks: `` `code` ``.

A multi-line block is wrapped in three backticks. The language is specified for syntax highlighting:

```markdown
\`\`\`javascript
const greeting = "Hello, Markdown!";
console.log(greeting);
\`\`\`
```

## Blockquotes

Quotations are formatted using the `>` symbol:

```markdown
> Quotation text.
```

## Use Cases

Markdown is used for:

- formatting README files in repositories;
- writing technical documentation;
- blogging and creating content for static sites;
- structuring notes in editors and applications.

## Conclusion

Markdown combines the readability of source text with the ability to quickly convert it into a formatted document. Mastering its syntax requires minimal effort and provides access to a wide range of tools for working with text.
