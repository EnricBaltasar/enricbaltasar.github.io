---
title: "Python summary: truth tables"
date: 2015-03-05T10:00:19+00:00
draft: false
topics: ["Python"]
slug: "truth-tables"
aliases: ["/python-summary-truth-tables/"]
lang: en
---

<!--more-->For <strong>determining if something is <em>True</em> or <em>False</em></strong>, we can use the next <a href="/python-summary/operators/">operators</a>:
<ul>
	<li><strong>Comparison:</strong> <span style="color: #008000;">==</span>, <span style="color: #008000;">!=</span>, <span style="color: #008000;"><</span>, <span style="color: #008000;">=<</span>, <span style="color: #008000;">></span>, <span style="color: #008000;">=></span>, <span style="color: #008000;"><></span></li>
	<li><strong>Logical:</strong> <span style="color: #008000;">and</span>, <span style="color: #008000;">or</span>, <span style="color: #008000;">not</span>, <span style="color: #008000;">not and</span>, <span style="color: #008000;">not or</span>, <span style="color: #008000;">xor</span> (or exclusive, represented by a caret character [^])</li>
	<li><strong>Membership:</strong> <span style="color: #008000;">in</span>, <span style="color: #008000;">not in</span></li>
	<li><strong>Identity:</strong> <span style="color: #008000;">is</span>, <span style="color: #008000;">is not</span></li>
</ul>
 

The <strong>truth tables</strong> is a way to view the result of the these operations. Scheme with the basic logical operators:
<pre><strong>AND: only <em>True</em> if both operands is one</strong>
<span style="color: #ff0000;">0</span> and<span style="color: #ff0000;"> 0   False</span>
<span style="color: #ff0000;">0</span> and<span style="color: #ff0000;"><span style="color: #008000;"> 1</span>   False</span>
<span style="color: #ff0000;">0</span> and<span style="color: #ff0000;"> 0   False</span>
<span style="color: #008000;">1</span> and<span style="color: #008000;"> 1   True</span>

<strong>OR: <em>True</em> when any operand is one</strong>
<span style="color: #ff0000;">0</span> and<span style="color: #ff0000;"> 0   False
0</span> and<span style="color: #008000;"> 1   True
1</span> and<span style="color: #008000;"><span style="color: #ff0000;"> 0</span>   True
1</span> and<span style="color: #008000;"> 1   True</span>

<strong>NOT: it inverts the value of operand</strong>
not<span style="color: #008000;"><span style="color: #ff0000;"> 0</span>     True</span>
not<span style="color: #ff0000;"><span style="color: #008000;"> 1</span>     False</span>

<strong>XOR: <em>True</em> when only one of the operand is true</strong>
<span style="color: #ff0000;">0</span> ^<span style="color: #ff0000;"> 0     False
0</span> ^<span style="color: #008000;"> 1     True
1</span> ^<span style="color: #008000;"><span style="color: #ff0000;"> 0</span>     True
1</span> ^<span style="color: #008000;"><span style="color: #ff0000;"><span style="color: #008000;"> 1</span>     False</span></span></pre>
 

<strong>We must to know the logical operators are short-circuiting</strong>, what means if from the first operand it is possible to deduce the result, Python won't evaluate the second operand; thereby Python saves time. <span style="color: #808080;">For example, if in AND the first operand is <em>False</em>, it is not necessary to evoaluate the second one, because the result will be <em>False</em>.</span>

 
