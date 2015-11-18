## Sublime

>The following instructions apply just as much to any other programming language, for example ERB code.

In Rails you are using `.scss` files and Sublime doesn’t have a default color formatting for SCSS. So to get it be formatted nicely you will have to install a package for SCSS formatting. Doing that is a little complicated in Sublime but doable:
First we need to install “Package Control” which allows us to add more add-on packages to Sublime. To do that open Sublime (the file that’s open doesn’t matter).

1. Press **Ctrl** +  **\`** or in the top menu click on “View” and then on “Show Console”
2. Now in your Sublime window at the bottom a console will show up.
In the small text field at the bottom paste the following code and press `Enter` afterwards:

**Sublime 2:**

```no-scroll
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

**Sublime 3:**

```no-scroll
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

3. Great. Now Package Control is installed. Close Sublime completely and start it again.
4. After you opened Sublime again in the top menu at the top left, click on “Sublime Text”, then click on “Preferences” and then on “Package Control” (at the bottom)
5. A menu will show up in the Sublime window. Type in “Install” and “Install Package” will show up. Just press `Enter`. Wait a moment! It will possibly take a few seconds to load now.
6. Now a new menu will show up. Here type in “SCSS” and press `Enter`. This will install the SCSS text formatting library.
7. Now in Sublime open the “scss” file you want to work on. At the bottom right of the Sublime window it will say probably something like “Plain Text” or “CSS”. You can click on there and scroll down until you see “SCSS”. Click on that and it will format your Code with nice colors
