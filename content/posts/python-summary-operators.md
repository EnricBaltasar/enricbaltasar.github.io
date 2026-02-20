---
title: "Python summary: operators"
date: 2015-05-08T14:00:36+00:00
draft: false
topics: ["Python"]
slug: "python-summary-operators"
lang: en
---

<!--more-->>>> "hello" <strong><span style="color: #008000;">==</span></strong> "hello" True

Where <span style="color: #008000;">==</span> is the <strong>operator</strong> and the two strings the <strong>operands</strong>.

It also is possible use the same operator in the same line, and/or other ones:
<pre>>>> "hello" == "hello" == "hello"
True</pre>
<pre>>>> "hello" == "hell" + "o"
True</pre>
<pre>>>> 2 == 1 + 1
True</pre>
 

The <strong>operator categories</strong> are:
<ul>
	<li>Arithmetic</li>
	<li>Comparison</li>
	<li>Assignment</li>
	<li>Logical</li>
	<li>Bitwise</li>
	<li>Membership</li>
	<li>Identity</li>
</ul>
You will find everything <a href="http://www.tutorialspoint.com/python/python_basic_operators.htm" target="_blank" rel="noopener noreferrer">on this page</a> schematic way.

 

Finally, you must know <strong>operator functions</strong> exist (you will find them in the official documentation). For example:
<pre>>>> total = <strong>2 + 3</strong>
>>> total
5</pre>
<pre>>>> import operator
>>> num1 = 2
>>> num2 = 3
>>> total = operator.<strong>add(num1, num2)</strong>
>>> total
5</pre>
 

<hr />

<strong>More information:</strong>
<ul>
	<li><a href="https://docs.python.org/3/library/operator.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/library/operator.html</a></li>
	<li><a href="http://codigoprogramacion.com/cursos/tutoriales-python/operadores-basicos-de-python.html" target="_blank" rel="noopener noreferrer">http://codigoprogramacion.com/cursos/tutoriales-python/operadores-basicos-de-python.html</a> [es]</li>
	<li><a href="/python-summary-truth-tables/">Truth tables</a></li>
</ul>
