---
title: "Static Site Generators"
date: 2015-12-11 22:14:00
layout: blog

---
Sometimes you just want to create a portfolio or maybe just a blog, and you feel (like any reasonable person)
that using static html is not an option. You'd have to copy the whole layout to all your pages every time you
make a change to it. Meanwhile you might not have access to a server to run serverside code, such as PHP or
Node.js. Maybe you think to yourself *"Hmm. I could use ifra-"* **NO.**

While iframes sure have their... [charm](http://www.rwblackburn.com/2012/07/iframe-evil/), they are not the
~~demonic hellspawns~~ solution you are looking for. What you are looking for is something that behaves like a
dynamic site written in PHP/Node.js/whatever but that does not use that fancy serverside rendering and
stitching. *"But how?"* I can hear you thinking.

####Let's create a website
First we need a layout, and we want it to be something like this

1. A header
2. A Navigation bar
3. The content of the current page
4. Some sort of footer

We want these to be the same on all our subpages, our *whole* website actually. Now let's build our website
using this pattern. *(I'll only demo this using two pages, index and about, but imagine the same with 10 or
20 subpages.)*

**index.html**
{% highlight html linenos %}
<html>
    <head>
        <title>My website</title>
    </head>
    <body>
        <header>
            <img src="mycoollogo.png">
            <span>My slogan</span>
        </header>
        <nav>
            <a>Home</a>
            <a>About</a>
        </nav>
        <main>
            <h1>Welcome!</h1>
            <p>
                Welcome to my website, glad you could join me!
            </p>
        </main>
        <footer>
            Copyright Demoman 2020
        </footer>
    </body>
</html>
{% endhighlight %}

**about.html**
{% highlight html linenos %}
<html>
    <head>
        <title>About me - My website</title>
    </head>
    <body>
        <header>
            <img src="mycoollogo.png">
            <span>My slogan</span>
        </header>
        <nav>
            <a>Home</a>
            <a>About</a>
        </nav>
        <main>
            <h1>About me</h1>
            <p>
                I'm just a demoman running a demosite.
                This is me.
            </p>
            <img src="me.jpg">
        </main>
        <footer>
            Copyright Demoman 2020
        </footer>
    </body>
</html>
{% endhighlight %}

At a glance these pages look the same, but they're not! As you can see the content inside ```<main>``` are
different, as are the titles in ```<head>```. Imagine us now wanting to add another page to our site, a
```contact``` page. You think *"I'll just copy one of the files and then change the title and the content"*.
Sure you can do that, it would look good in the browser, the design will stay the same, so you go ahead and
copy paste it into a new file and voilá, you have a new page with your contact information. But now you want
to change the footer to say "```Copyright Demoman 2020. All rights reserved. (please do not steal)```".
So you go and copy paste it into your three files, no harm done. You figure the layout is done and now it's
time to publish it! Yay! **BUT WAIT**! You forgot to add a ```hyperlink``` to your contact page. *"Oh well,
I'll just add it to one of the file then copy and paste it to the other two."*

This does not seem like a big deal, and it's not if you only have a handfull of pages (but even then it becomes
an annoyance). Now imagine the same setup, but with 20 subpages. Each time you change something in the layout
of one page, such as the navigation bar, you have to copy paste that to all 20 subpages. What used to be an
annoyance is now a timesink.

Enter Static Site Generators. SSG's allow you to essentially *automate* the copy-pasting of documents. Let me
show you a simple example using [Jekyll](https://jekyllrb.com/).

**layout.html**
{% highlight html linenos %}
{% raw %}
<html>
    <head>
        <title> {{ page.title }}</title>
    </head>
    <body>
        {% include header.html %}
        <main>
            {{ content }}
        </main>
        <footer>
            Copyright Demoman 2020
        </footer>
    </body>
</html>
{% endraw %}
{% endhighlight %}

**header.html**
{% highlight html linenos %}
{% raw %}
<header>
    <img src="mycoollogo.png">
    <span>My slogan</span>
</header>
<nav>
    <a>Home</a>
    <a>About</a>
</nav>
{% endraw %}
{% endhighlight %}

**index.html**
{% highlight html linenos %}
{% raw %}
---
layout: layout.html
title: My website
---
<h1>Welcome!</h1>
<p>
    Welcome to my website, glad you could join me!
</p>
{% endraw %}
{% endhighlight %}

**about.html**
{% highlight html linenos %}
{% raw %}
---
layout: layout.html
title: About - My website
---
<h1>About me</h1>
<p>
    I'm just a demoman running a demosite.
    This is me.
</p>
<img src="me.jpg">
{% endraw %}
{% endhighlight %}

Now when the webbrowser 
