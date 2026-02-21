---
title: "Python summary: spacing"
date: 2015-05-04T14:00:19+00:00
draft: false
topics: ["Python"]
slug: "spacing"
aliases: ["/python-summary-spacing/"]
lang: en
---

<!--more-->We are free by adding spaces and newlines in Python. Some examples:
<pre>>>> <span style="text-decoration: underline;">print("Hello")</span> is <span style="text-decoration: underline;">print( "Hello")</span>
Hello
Hello
True</pre>
<pre>var1 = <strong>int(</strong>input("How old? ")<strong>)</strong>
var2 = <strong>int(</strong> input("How old? ") <strong>)</strong></pre>
<pre># A name
#A name</pre>
<pre><span style="color: #999999;"># In dictionaries:</span>
>>> our_dictionary={"name" : "Enric Baltasar" ,"age":20}
>>> phone_directory = {'Jack': 608475436,
                       'Phillip': 986585552,
                       'Peter': 688732233}</pre>
Limits are specific rules, our style and recommendations. For example, identation must have the same quantity and character type(s) (either tabs or spaces).
<pre>>>> number = 9
>>> if number == 9:
...   print("First text")
...         <span style="color: #ff0000;">print("Second text")</span>
  File "", line 3
    print("Second text")
    ^
IndentationError: unexpected indent</pre>
 

A related trick is, for convenience, to use a backslash (\) for viewing in our code different lines, but by running they are the same ones (new physical line, however the same logical line):
<pre>>>> print("Now I can buying something green")
Now I am buying something green
</pre>
<pre>>>> print("Now I am buying <span style="color: #008000;"><strong>\</strong></span>
... something green")
Now I can buying something green
</pre>
And we can use a several backslashes.

<hr />

<strong>More information:</strong>
<ul>
	<li><a href="/python-summary/printing/">The print() function and default spacing</a></li>
	<li><a href="http://www.secnetix.de/olli/Python/block_indentation.hawk" target="_blank" rel="noopener noreferrer">http://www.secnetix.de/olli/Python/block_indentation.hawk</a></li>
</ul>
