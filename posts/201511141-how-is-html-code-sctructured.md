## Review HTML syntax

This is what HTML tags look like: `< … >`.
Usually HTML tags have an opening and a closing tag like this: `<…> </…>`.
Now all HTML tags have a name. They are called something like `html`, `body`, `div`, `p`, `a`, `table`, `h1`, `h2`, `tr`, `td` and much more. [Here](http://overapi.com/html/) is an overview over the most important HTML tags.
Don’t worry: It’s not necessary to know all of them! It’s good to know the most basic and common ones. The rest you should just know where to look up. No course can teach all of them (well it could… but it’s not really necessary).
Alright. So all HTML tags look sort of like this: `<h1> Some text </h1>`
All HTML tags come predefined with some styling. So `h1` for example will add some padding and a big font size to its content. `<span></span>` will make its content `display: inline;` and `<div></div>` on the other hand has `display: block;` applied by default.
Now _ALL_ HTML elements can have so called **attributes**. Attributes are _always_ added to the opening tag and add additional information or functionality to the HTML tag. Attributes also always have the same basic syntax:
`attribute="value"`
First the attribute name, then an equal sign `=` and then in quotes a value. Here an example:

```
<h1 id="intro" class="padding1 margin2">Some text</h1>
```

Here we have an `h1` HTML tag with **two attributes**: `id` and `class` are both attributes of the `h1` tag. The “value” of the `id` attribute is “intro”. The “value of the `class` attribute is “padding1 margin2” (which are _two_ classes).
A quick reminder: Each HTML element can only have a single ID (attribute value) and there can not be any other HTML element with the same ID. IDs are unique. Classes however can be used over and over again. Many HTML elements can have the same classes and a single HTML element can have **many** classes as class attribute value. If you want to apply more classes to a single element you just separate them with spaces (but inside the quotes) like this:

```
<p class="class1 class2 class3 another-class one-more-class">Some text</p>
```

The above example has 5 classes: `class1`, `class2`, `class3`, `another-class`, `one-more-class`.

Alright. So this is how HTML syntax works. Always. 
