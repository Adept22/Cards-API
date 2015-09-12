# AD Framework
JS-Framework - реализующий работу с CSS классами DOM элементов.

## Установка

Добавить ad.min.js к проекту:
```html
  <script src="ad.min.js"></script>
```
## Документация
### AD()

Основной метод framework`a, который находит элементы DOM. Возвращает объект с найденными элементами и доступными методами.

```js
AD('#id'); // => self with DOM element.
AD('.class'); // => self with DOM elements.
AD('tagname'); // => self with DOM elements.
AD('<tagname>',[context]); // self with new DOM elements, context(exmaple: '#id', '.class', 'tagname').
```

### AD.each
Данный метод выполняет указанную функцию один раз для каждого элемента в массиве.
```js
AD('.class').each(callback[, thisArg]);
```

### AD.css
Данный метод добавляет указанные CSS свойства для указаннх элементов.
```js
AD('.class').css('width': '100%');
```

### AD.toggleClass
Данный метод добавляет/убирает класс у указанных элементов.
```js
AD('div').toggleClass('hovered');
```
