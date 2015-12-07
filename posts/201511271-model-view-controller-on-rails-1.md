## Routes

![](img/201511271_mvc-routes.png)

When a user types in the URL to your website your Rails app does *not* instantly just show the HTML files to him. Instead Rails will first open the *config/routes.rb* file. In there it will look, where to redirect the user.

Let's use "products" as an example. If a user tries to access http://mywebsite.com/products Rails will check the *routes.rb* file to see what to do with the route "products". In the routes file it will find something like this: `resources :products`.
That's Rails code that basically says: "Send the user to the `products_controller`."

Even if you have HTML pages created inside the *app/views* folder they will *NOT* be accessible if you don't put them in the *routes.rb* file. If you look around the *routes.rb* file you will also see for example `get 'static_pages/index'`. We put that there earlier. This line says:
"If a user types 'http://mywebsite.com/static_pages/index' in the browser, make an HTTP `GET` request of the *index.html.erb* file inside *app/views/static_pages*". That's how Rails is set up and how it works.

Alright back to our products. So `resources :products` will tell Rails to access the `products_controller.rb` file inside *app/controllers*. Inside that file you have Ruby methods for each page you want to display. These methods are called *actions* (That's important to remember!)
So each action represents a page. And each page is an HTML file inside *app/views/products*. Rails does all that automatically. It matches the routes, controller, views and model of the same name. That's why the controller _must_ be called *products_controller.rb* in order to connect with the folder *views/products* and the routes `resources :products`.

So inside the `products_controller.rb` you have *"actions"* that look like that:

```
def index
  #some code
end
```

These actions tell Rails to look in *app/views/products* for HTML files with the same name. Then those files will be rendered and finally sent back to the user's web browser. And that's what he sees in the end.

So there is a lot of code that runs in the background before anything is shown to the user.
