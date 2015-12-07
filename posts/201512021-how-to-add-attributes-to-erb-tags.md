Let's assume you have a `form_tag` and want to add HTML attributes to it:
`<%= form_tag('/posts’) %>` generates this HTML tag:

`<form action="/posts" method="post”>`

All you need to know you find in the official documentation. Let's take a look at the  [part about form\_tag](http://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html#method-i-form_tag).

All the way at the top of that paragraph you see this:

```
form_tag(url_for_options = {}, options = {}, &block)
```

That’s the basic structure or “syntax” of the form_tag. In the documentation you will always see the basic syntax of a tag in the header like above.
So what does that mean? That means, that the `form_tag()` expects different arguments at different positions inside the parentheses. The first argument is `url_for_options`. That’s where the URL for the form needs to go. That’s what is going to end up in the HTML in the `action` attribute. So for example if I only have one argument it will be the URL:

```
<%= form_tag(“/peter”) %>
```
will result in
```
<form action=“/peter" method="post”>
```
Then starting at the second position in the parentheses you can add so called “options”. And options are just additional information you want to add to the form\_tag. For examples classes. So you can write:
```
<%= form_tag(“/peter”, class: “container”) %>
```
That will result in this HTML tag:
```
<form action="/posts” class=“container” method="post”>
```
You can even add multiple classes:
```
<%= form_tag(“/peter”, class: “container hello world”) %>
```
Just like in HTML you just separate them with spaces. Now the above example has three classes: container, hello and world.
```
<form action="/posts” class=“container hello world" method="post”>
```
