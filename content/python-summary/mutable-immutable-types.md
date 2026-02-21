---
title: "Python summary: mutable and immutable types"
date: 2015-01-26T14:00:29+00:00
draft: false
topics: ["Python"]
slug: "mutable-immutable-types"
aliases: ["/python-summary-mutable-immutable-types/"]
lang: en
---

<!--more-->
<em><span style="color: #999999;">((Mutability and immutability))</span></em>

In Python, the built-in types are objects. And obviously the<strong> objects are stored in memory</strong>. So, we can view the <strong>reference</strong> of an object by using the <strong><span style="color: #008000;">id()</span></strong> function:
<pre>>>> message = "Hello"
>>> <span style="color: #008000;">id(</span>message<span style="color: #008000;">)</span>
140604692041544</pre>
 

We created a <em>Hello</em> string. And the <strong>data types</strong> can be either mutable or immutable:
<ul>
	<li><strong>Immutable:</strong> integers, floats, strings, booleans, tuples, frozensets...</li>
	<li><strong>Mutable:</strong> lists, sets...</li>
</ul>
<span style="color: #999999;">However, a exception exists: the type depends on dictionaries. For example, keys must be immutable. Read more about <a style="color: #999999;" href="/python-summary/dictionaries/">dictionaries in Python</a>.</span>

But what do inmmutable and mutable classification mean?
<table>
<tbody>
<tr>
<td style="border-left-color: #ffffff; border-top-color: #ffffff; text-align: center;"></td>
<th style="background-color: #e3e3e3; text-align: center;"><strong>Accessible</strong></th>
<th style="background-color: #e3e3e3; text-align: center;"><strong>Modifiable</strong></th>
</tr>
<tr>
<td style="background-color: #e3e3e3; text-align: center;"><strong>Immutable</strong></td>
<td style="text-align: center;"><span style="color: #008000;">✓</span></td>
<td style="text-align: center;"><span style="color: #ff0000;">✗</span></td>
</tr>
<tr>
<td style="background-color: #e3e3e3; text-align: center;"><strong>Mutable</strong></td>
<td style="text-align: center;"><span style="color: #008000;">✓</span></td>
<td style="text-align: center;"><span style="color: #008000;">✓</span></td>
</tr>
</tbody>
</table>
 

<strong>Some examples:</strong>
<pre>>>> num = 7 <strong><span style="color: #999999;"># IMMUTABLE TYPE</span></strong>
>>> id(num)
10455232
>>> num = 9 <span style="color: #999999;"># We do not modify, but replace the reference ID assigned to the var</span>
>>> id(num) <span style="color: #999999;"># Obviously, we will obtain a different ID</span>
10455296</pre>
<pre>>>> text = "Esperanto is the future" <strong><span style="color: #999999;"># IMMUTABLE TYPE</span></strong>
>>> id(text)
140604741450896
>>> <span style="color: #008000;">text[0]</span> <span style="color: #999999;"># Accessing</span>
<span style="color: #008000;">'E'</span>
>>> <span style="color: #ff0000;">text[:9] = "English"</span> <span style="color: #999999;"># Again, we cannot modify because strings are immutable</span>
<span style="color: #ff0000;">Traceback (most recent call last):
  File "", line 1, in 
TypeError: 'str' object does not support item assignment</span>
>>> text = "Esperanto is our open source language"
>>> id(text) <span style="color: #999999;"># Obviously, we will obtain a different ID</span>
140604742015968
</pre>
<pre>>>> list = [1, 2, 3] <strong><span style="color: #999999;"># MUTABLE TYPE</span></strong>
>>> id(list)
140604692044616
>>> list[0]
1
>>> list[0] = 9 <span style="color: #999999;"># We can do changes</span>
>>> list
[9, 2, 3]
>>> id(list) <span style="color: #999999;"># And the reference ID will keep being the same</span>
140604692044616
</pre>
 

Find out why the immutability/mutabilty difference exists, <strong>what the utility is</strong>, with an example:
<pre><strong>[IMMUTABLE]</strong>            <strong>[MUTABLE]</strong>
>>> x = 1              >>> x = [1, 2, 3]
>>> y = x              >>> y = x
>>> y                  >>> y
1                      [1, 2, 3]
>>> x = 9              >>> x[0] = 9
>>> <span style="color: #ff6600;">x</span>                  >>> <span style="color: #ff6600;">x</span>
<span style="color: #ff6600;">9</span>                      <span style="color: #ff6600;">[9, 2, 3]</span>
>>> <span style="color: #ff6600;">y</span>                  >>> <span style="color: #ff6600;">y</span>
<span style="color: #ff6600;">1</span>                      <span style="color: #ff6600;">[9, 2, 3]</span>

<span style="color: #999999;"><strong>[Different]</strong></span>            <span style="color: #999999;"><strong>[Equal]
[!= object in memory]  [== object in memory]
[Change X != change Y] [Change X » change Y]
</strong></span></pre>
