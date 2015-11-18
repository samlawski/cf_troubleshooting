## The layout

Working with ERB code for the first time can be a little bit confusing. Especially if things like loops and conditionals are involved.
That's why I'm going to walk you through building a layout using the Bootstrap grid system.

This is roughly what it will look like in the end:

![](img/201511182_home2.png)

## Start with HTML

Let's say you have created a products model using scaffolding and each product has the properties: title, description and price.
Go to app/views/products/index.html.erb. Ignore the code that's there for now and above all the code that's already there create a new layout. Forget about Rails for a moment. Write everything in HTML and CSS only. Use Bootstrap classes to create a grid that looks like the one above.

You code might look something like this now:

```HTML
<h1>Listing Products</h1>

<div class="container">
  <div class="row">
    <div class="col-sm-2 col-md-4">
      <h1>Bike 1</h1>
      <p>Pretty cool bike</p>
      <strong>$ 42</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 2</h1>
      <p>Really cool bike</p>
      <strong>$ 84</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 3</h1>
      <p>Best bike ever</p>
      <strong>$ 999</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 4</h1>
      <p>This bike is ok</p>
      <strong>$ 1</strong>
    </div><!-- /col -->
  </div>
</div>
```

This will display a grid of products on your page.

## Review Model and Controller

Remember, the `Product` model is an **array** of objects. The model accesses the database and turns the data in it into an array of objects, so that you can easily access and work with it in Rails. Imagine it to look something like this:

```JavaScript
Product = [
  {
    title: "Bike 1",
    description: "Pretty cool bike",
    img_url: "http://website.com/img/picture1.jpg",
    price: 42
  },
  {
    title: "Bike 2",
    description: "Really cool bike",
    img_url: "http://website.com/img/picture2.jpg",
    price: 84
  },
  {
    title: "Bike 3",
    description: "Best bike ever",
    img_url: "http://website.com/img/picture3.jpg",
    price: 999
  },
  {
    title: "Bike 4",
    description: "This bike is ok",
    img_url: "http://website.com/img/picture4.jpg",
    price: 1
  }
]
```

This is not quite what's happening but essentially you can imagine it to look like that. In fact you will need `Product.all` to access the array of all objects.

In the products\_controller.rb file (app/controllers) in the `index` action you will find `@products` to equal `Product.all`. This means now in our views we can access the whole array of all products in our database by just using `@products`.

##Loops and Arrays

Back to your products/index.html.erb file. Now you need to remember some Ruby code and how to work with arrays and loops in Ruby.
You can write a Ruby loop to loop over all elements inside an array. The syntax looks like this:

```Ruby
array = [1, 2, 3, 4, 5]

array.each do |current_element|
  current_element
end
```

First we declare a variable `array` to contain an array with the numbers 1-5. Then we write a loop that iterates over the whole array. During each iteration the current\_element variable will refer to the current element. So the example above will output:

```
12345
```

Now compare that to what Rails automatically generated inside your index.html.erb file:

```HTML
<% @products.each do |product| %>
  <tr>
    <td><%= product.name %></td>
    <td><%= product.description %></td>
    <td><%= product.image_url %></td>
    <td><%= product.price %></td>
    <td><%= link_to 'Show', product %></td>
    <td><%= link_to 'Edit', edit_product_path(product) %></td>
    <td><%= link_to 'Destroy', product, method: :delete, data: { confirm: 'Are you sure?' } %></td>
  </tr>
<% end %>
```

Remember, `@products` is an array of product objects (as seen above). This loop will iterate over `@products` and during each iteration the variable `product` will represent the current element (here aka object).
So let's say you have three products. Then the loop will run three times and each time it will add the code **inside** the loop to your HTML document. So let's strip it down a little to demonstrate how that works. Remove the whole table (everything inside `<table> ... </table>` including the two `table` tags) and replace it with this:

```
<% @products.each do |product| %>
  <%= product.name %>
  <%= product.description %>
  <%= product.image_url %>
  <%= product.price %>
  <%= link_to 'Show', product %>
  <%= link_to 'Edit', edit_product_path(product) %>
  <%= link_to 'Destroy', product, method: :delete, data: { confirm: 'Are you sure?' } %>
<% end %>
```

This is now the pure Ruby loop. No HTML and nothing else. Only the loop. Now go to your website, refresh it and then right click on it. Then click on "View Source". If you scroll down a bit eventually you will see something like this:

```HTML
Bike 1
Pretty cool bike
http://website.com/img/picture1.jpg
42
<a href="/products/1">Show</a>
<a href="/products/1/edit">Edit</a>
<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/products/1">Destroy</a>
Bike 2
Really cool bike
http://website.com/img/picture2.jpg
84
<a href="/products/2">Show</a>
<a href="/products/2/edit">Edit</a>
<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/products/2">Destroy</a>
Bike 3
Best bike ever
http://website.com/img/picture3.jpg
999
<a href="/products/3">Show</a>
<a href="/products/3/edit">Edit</a>
<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/products/3">Destroy</a>
Bike 4
This bike is ok
http://website.com/img/picture4.jpg
1
<a href="/products/3">Show</a>
<a href="/products/3/edit">Edit</a>
<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/products/3">Destroy</a>
```

You didn't write this. This is what the Ruby loop generated for you. Now you can utilize that knowledge to generate reoccurring code and add HTML to the loop so that it doesn't look so silly.

Take a look at the HTML you wrote before:

```HTML
<div class="container">
  <div class="row">
    <div class="col-sm-2 col-md-4">
      <h1>Bike 1</h1>
      <p>Pretty cool bike</p>
      <strong>$ 42</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 2</h1>
      <p>Really cool bike</p>
      <strong>$ 84</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 3</h1>
      <p>Best bike ever</p>
      <strong>$ 999</strong>
    </div><!-- /col -->
    <div class="col-sm-2 col-md-4">
      <h1>Bike 4</h1>
      <p>This bike is ok</p>
      <strong>$ 1</strong>
    </div><!-- /col -->
  </div>
</div>
```

See how this part comes over and over again?

```HTML
<div class="col-sm-2 col-md-4">
  <h1>Bike 1</h1>
  <p>Pretty cool bike</p>
  <strong>$ 42</strong>
</div><!-- /col -->
```

We use this `div` block four times in our example for four products. Only the text for name, description and price change. What if we would use Ruby to generate these three blocks?

Remove all the column divs except for one and put the Ruby loop around it like this:

```HTML
<div class="container-fluid">
  <div class="row">
    <% @products.each do |product| %>
      <div class="col-sm-2 col-md-4">
        <h1>Bike 1</h1>
        <p>Pretty cool bike</p>
        <strong>$ 42</strong>
      </div><!-- /col -->
    <% end %>
  </div>
</div>
```

Reload the page and see what happens. Do you see how, even though you only wrote one column div, now three of them appear? (Or as many as products you have)

Now you can use the ERB tags from below and replace the static title text inside the loop with the variables to access the title property of the `product` variable:

```HTML
<% @products.each do |product| %>
  <div class="col-sm-2 col-md-4">
    <h1><%= product.name %></h1>
    <p><%= product.description %></p>
    <strong><%= product.price %></strong>
  </div><!-- /col -->
<% end %>
```

Now do the same with the other properties and add all the ERB or HTML tags and CSS stylings you want.

## Link_to and variables

You might be wondering what to do with these three lines of code:

```
<%= link_to 'Show', product %>
<%= link_to 'Edit', edit_product_path(product) %>
<%= link_to 'Destroy', product, method: :delete, data: { confirm: 'Are you sure?' } %>
```

Look at the source code again from before. These three lines generate the following three HTML elements:

```HTML
<a href="/products/1">Show</a>
<a href="/products/1/edit">Edit</a>
<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/products/1">Destroy</a>
```

The value of the `href` attribute looks slightly different for each attribute product. `/products/1` is the path to the individual product. `1` is the ID of the product. In this case it is `1`, because it's the first product we ever created. These IDs are generated by Rails automatically.

Alright. So now we know this `<%= link_to 'Show'` tag seems to generate a link. And the word in quotes (here it is "Show") will be the name of the link, that shows up on the actual page.
You can actually replace `'Show'` with a variable. Remember, `product.name` is a variable that contains the name of the product. So let's make the title of the product clickable. You do that simply replacing `'Show'` with the variable. You can then put this link inside your loop instead of `<%= product.name %>`:

```HTML
<% @products.each do |product| %>
  <div class="col-sm-2 col-md-4">
    <h1><%= link_to product.title, product %></h1>
```

You can keep the Edit and Delete buttons also somewhere. For this example I decided to remove them completely.

## Use an ERB tag as an attribute value

Now, you might have noticed, that we never used the `image_url` property of the product. So let's do that.

Add an image tag to your column div and use Bootstrap's `img-responsive` class to make it responsive. The `src` value (that usually points to the image path) can stay empty for now.

```HTML
<% @products.each do |product| %>
  <div class="col-sm-2 col-md-4">
    <img src="" class="img-responsive">
    <h1><%= product.name %></h1>
    <p><%= product.description %></p>
    <strong><%= product.price %></strong>
  </div><!-- /col -->
<% end %>
```

Remember, if you add `<%= product.title %>` it will simply output `Bike 1` as plain text. No HTML tags attached. If you remember what the source code of your website looked like earlier, you will also remember, that `<%= product.image_url %>` did the exact same thing. It would put the link to the image in plain text on the HTML document. You can put ERB tags anywhere in your HTML. So if `<%= product.image_url %>` puts `http://website.com/img/picture1.jpg` in plain text inside our HTML, we can use that to just put it inside our attribute value like this:

```HTML
<img src="<%= product.image_url %>" class="img-responsive">
```

Refresh your page. Voila! If the link URLs you used point to actual images, you will now see the images on your product page displayed.
