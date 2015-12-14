## Prerequisites

You have **Devise** gem installed and generated a mailer in Rails, e.g. `UserMailer`.

## Overwrite the Devise controller

User sign up is handled by the Devise gem and its own controller. The controller is inside the gem and you can't directly access it inside your app. But you can overwrite it's behavior -- or at least add behavior to it.

In your **app/controllers** directory go ahead and create a new controller. The name doesn't really matter but the class name should be the same as the file name (only the file name needs to be all lower case and separated with underscores and the class name needs to be CamelCase).

I called the file: **user_registrations_controller.rb**

And this should be inside that file:

```
class UserRegistrationsController < Devise::RegistrationsController
  def create
    super
    if @user.persisted?
      UserMailer.welcome(@user).deliver_now
    end
  end
end
```

Our controller class inherits from the Devise::RegistrationsController class. Then we overwrite the `create` method to `deliver_now` the email `welcome` with the newly registered `@user` as argument if a `@user` was successfully created.

## Set up the routes

In our **routes.rb** file we have to tell Devise to use our controller for user sign ups. We do that with this line:

```
devise_for :users, :controllers => { :registrations => "user_registrations" }
```

**Important!** If you already have line in the routes file that starts with `devise_for` for example to specify `:path` or `:path_names` you have to just add the following bit of code at the end of the same line and **not** user the line of code above:

```
, :controllers => { :registrations => "user_registrations" }
```

Don't forget the comma.

## Set up mailer controller

Now go to your app/mailers controller and open **user_mailer.rb**. In there you might already have a method to send emails for example through a `contact_form`. Underneath that method create a new method for our welcome email. And this is what it should look like:

```
def welcome(user)
  @appname = "Bike Shop"
  mail( :to => user.email,
        :subject => "Welcome to #{@appname}!")
end
```

First we assign a single argument and call it `user`. Remember, in the UserRegistrationsController we pass through the `@user` as an argument value.
Then inside the method we first specify our `@appname`. This step is completely optional. But it demonstrates how you can assign variables within that method and then use that exact variable inside the email content (see below).
Then we specify the important information for our email with `mail()`. We assign `:to` to the `email` property of `user` and create a `:subject` that contains our `@appname` variable. We don't need to specify a `:from` because our app already has a default value assigned inside our `application_mailer.rb` file.

## Email template

The email template has to have the same name as the method we just created. So inside app/views/user_mailer create a file called **welcome.html.erb** and fill it with any HTML content you like. This will be the email that will be sent to your new user.

```
<table>
  <tbody>
    <tr>
      <td><h2>Welcome!</h2></td>
    </tr>
    <tr>
      <td><p>Thank you for signing up with <%= @appname %>!</p></td>
    </tr>
    <tr>
      <td><p><strong>Your <%= @appname %> Team!</strong></p></td>
    </tr>
  </tbody>
</table>
```

See how in our example we access `@appname`? We can do that because we assigned that variable inside the `welcome` method earlier.

Now your email is ready to be delivered and if a user signs up an email will be delivered to her/his email address. 
