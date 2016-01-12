---
title: "Assignment One"
date: 2015-12-10 20:00:00
layout: blog
---

Since my writing skills are just slightly better than that of a [monkey with a typewriter](https://en.wikipedia.org/wiki/Infinite_monkey_theorem) I will be doing this assigment as straight forwards as I can.

Precompiling my CSS is something I'm not entirely sure I like. Sure, I do like the benefits of doing it, especially the nesting of rules as it makes the code less spread out, and a bit less messy.
HOWEVER when using a precompiler I feel the lack of control. If I were to use it for a longer period of time I'm sure the feeling would go away. Building this site I have mainly
been using nesting, variables, and, a few includes.

"Precompiling" whole websites using static site generators gives me a good feeling. The fact that you can generate whole websites and blogs using a few templates is really something
that more people should learn about. It's fast, reliable and it's quite pretty codewise, but it's very limited. There is no server side to load from databses. They work the way their
name implies, they generate a static website using a set of rules and a set of templates. If any content changes the whole website will have to regenerate. On one hand it's fast and
reliable, on the other hand it's still just static content. It's perfect for small blogs/portfolios, information websites for small stores and possibly quite good for sportclubs.

I use robots.txt to let any indexers (Google, for one) know which urls that are not okay to index. Right now it's configured to only stay out of my javascript and css folders. In
my case it does not really matter though, the path /js/ and /css/ does not really exists, but it's for show.

The humans.txt is configured this way at the moment:
{% highlight text linenos %}
/* TEAM */
Your title: Rasmus Israelsson
Site: IsraelssonRasmusRaz@gmail.com
Twitter: rasmusir
Youtube: https://www.youtube.com/user/UltimateWire
Location: Kalmar, Sweden.

/* THANKS */

/* SITE */
Last update: 2016/01/07
Standards: HTML5, CSS3, JavaScript (ECMAScript 5.1)
Components: Jekyll, SASS
Software: Vagrant, Jekyll, Brackets, Git(Hub)
{% endhighlight %}

humans.txt is a file containing information about the website, the author, the tools, and the components the website is using. It's pretty straight forward.

Open graph is a "standard" that you incorporate using metatags in HTML. It tells social media (or other media that share links and websites) how to represent
the information contained on the current page. It usually contains a title, a type, the urls to the specific page and an image that's relevant. You can also
choose to include a little text snippet from the blogpost or content of the page. Mine currently looks like this:

{% highlight html linenos %}
<meta property="og:title" content="{{ page.title }} - {{ site.title }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://rasmusir.github.io/" />
<meta property="og:image" content="https://rasmusir.github.io/css/bild.jpg" />
{% endhighlight %}

It's the same for all subpages right now, due to me being lazy. Ideally I would change the title and image (and include a snippet of text) to something that's
relevant for the current page.