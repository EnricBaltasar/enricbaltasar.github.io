---
title: "Python summary: variables"
date: 2015-04-02T14:00:09+00:00
draft: false
topics: ["Python"]
slug: "python-summary-variables"
lang: en
---

<!--more-->
A variable is <strong>a name that refers to an object</strong> (<em>a data</em>) in memory.
<pre>>>> var1 = 'Hello'
>>> var1
'Hello'</pre>
<pre>>>> var2 = 5 + 5
>>> var2
10</pre>
The single-equal character (=) assigns the value on the right to a variable on the left.

And the reference can be changed:
<pre>>>> var = 1
>>> var
1
>>> var = 2
>>> var
2</pre>
Even referer to a data which is refered by another variable:
<pre>>>> var1 = 'Hello'
>>> var2 = var1
>>> var2
'Hello'</pre>
But in any case, the ones must be created at the moment it is assigned to a data:
<pre>>>> <span style="color: #008000;">wellvar = 'Hello'
</span></pre>
<pre>>>> <span style="color: #ff0000;">badvar
Traceback (most recent call last):
  File "", line 1, in 
NameError: name 'new_var2' is not defined
</span></pre>
And the possible characters for a variable name are:
<ul>
	<li>It can just start with alphabetic character.</li>
	<li>It can contain underscore character (_) and any alphabetic character.</li>
</ul>
 

<hr />

<strong>More information:</strong>
<ul>
	<li><a href="/python-summary-variable-scoops/">Variable scoops</a></li>
</ul>
