---
title: "Пример препринта / рабочего доклада"
authors:
- me
date: "2019-04-07T00:00:00Z"

# Дата публикации на сайте (НЕ дата публикации работы).
publishDate: "2017-01-01T00:00:00Z"

# Тип публикации.
# Принимает одно значение, но оформляется как список YAML (по требованиям Hugo).
# Укажите тип публикации из стандарта CSL.
publication_types: ["article"]

# Название публикации и (необязательно) сокращённое название.
publication: ""
publication_short: ""

abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum. Sed ac faucibus dolor, scelerisque sollicitudin nisi. Cras purus urna, suscipit quis sapien eu, pulvinar tempor diam. Quisque risus orci, mollis id ante sit amet, gravida egestas nisl. Sed ac tempus magna. Proin in dui enim. Donec condimentum, sem id dapibus fringilla, tellus enim condimentum arcu, nec volutpat est felis vel metus. Vestibulum sit amet erat at nulla eleifend gravida.

# Краткое содержание. Необязательный сокращённый абстракт.
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Большие языковые модели

featured: true

hugoblox:
  ids:
    arxiv: 1512.04133v1

links:
- type: preprint
  provider: arxiv
  id: 1512.04133v1
- type: code
  url: https://github.com/HugoBlox/kit
- type: slides
  url: https://www.slideshare.net/
- type: dataset
  url: "#"
- type: poster
  url: "#"
- type: source
  url: "#"
- type: video
  url: https://youtube.com
- type: custom
  label: Произвольная ссылка
  url: http://example.org

# Изображение для превью
# Чтобы использовать, добавьте изображение с именем `featured.jpg/png` в папку страницы. 
image:
  caption: 'Источник изображения: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Связанные проекты (необязательно).
#   Свяжите эту публикацию с одним или несколькими проектами.
#   Просто укажите название папки или файла проекта без расширения.
#   Например, `internal-project` ссылается на `content/project/internal-project/index.md`.
#   В противном случае задайте `projects: []`.
projects:
- internal-project

# Слайды (необязательно).
#   Свяжите эту публикацию со слайдами в формате Markdown.
#   Просто укажите имя файла слайдов без расширения.
#   Например, `slides: "example"` ссылается на `content/slides/example/index.md`.
#   В противном случае задайте `slides: ""`.
slides: ""
---

Эта работа основана на результатах моей [предыдущей статьи](/publications/conference-paper/) о больших языковых моделях.

> [!NOTE]
> Создавайте слайды в Markdown — нажмите кнопку *Слайды*, чтобы посмотреть пример.

Добавьте сюда **полный текст** публикации или **дополнительные примечания**. Можно использовать расширенное форматирование, включая [код, формулы и изображения](https://docs.hugoblox.com/content/writing-markdown-latex/).
