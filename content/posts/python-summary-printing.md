---
title: "Python summary: printing"
date: 2015-04-29T14:00:13+00:00
draft: false
topics: ["Python"]
slug: "python-summary-printing"
lang: en
---

<!--more-->The <strong>print()</strong> function is used to displaying data on the screen (via reference, math result...). Some examples:
<pre>>>> print("Hello, world") <span style="color: #999999;"># A text</span>
Hello, world</pre>
<pre>>>> price = 9
>>> print(price) <span style="color: #999999;"># A number</span>
9</pre>
<pre>>>> friendname = "Esteban"
>>> print("You are", friendname) <span style="color: #999999;"># A text and passed variable value</span>
You are Esteban</pre>
It is even possible do maths on a print() function:
<pre>>>> print(2 + 2)
4</pre>
<pre>>>> print("Hello!" * 3) <span style="color: #999999;"># Multiplying a string</span>
Hello!Hello!Hello!</pre>
 

Moreover, <em>print()</em> creates a default spacing in the next cases:

<span style="color: #ff6600;"><strong>(1)</strong></span> Between words, after the first one:
<pre>>>> print("Apples","bananas","pears")
Apples bananas pears</pre>
We can change or delete it by employing the word <span style="color: #008000;"><strong>sep=""</strong></span>:
<pre>>>> print("Apples","bananas","pears",sep=", ")
Apples, bananas, pears</pre>
<span style="color: #ff6600;"><strong>(2)</strong></span> When there is another print() then, at the end:
<pre>>>> print("Apples")<strong>;</strong> print("bananas")<strong>;</strong> print("pears")
Apples
bananas
pears</pre>
I have wrote semicolons (<span style="color: #008000;">;</span>) because I put several statements in the same line, and they are needed to delimit them ones.

Well, if we want to change such second spacing, we must use <span style="color: #008000;"><strong>end=""</strong></span>:
<pre>>>> print("Apples",end="")<strong>;</strong> print("bananas",end="")<strong>;</strong> print("pears",end="")
Applesbananaspears</pre>
<span style="color: #ff6600;"><strong>(1+2)</strong></span> And to use both ones also are possible:
<pre>>>> print("Apples", "bananas" ,"pears" , sep=", ", end="...")
Apples, bananas, pears...</pre>
