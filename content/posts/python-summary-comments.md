---
title: "Python summary: comments"
date: 2015-01-20T14:00:05+00:00
draft: false
topics: ["Python"]
slug: "python-summary-comments"
lang: en
---

Comments are lines of code which do not run, and which are used for documenting (<strong>showing the programmer what a piece code does</strong>). This is useful:
<ul>
	<li>When we review our code later (to remember what it does or view it fast).</li>
	<li>For asking on forums.</li>
	<li>Team work.</li>
</ul>
In Python, comments start with a hash character (<span style="color: #008000;"><strong>#</strong></span>):
<pre><span style="color: #008000;"># Displaying a name</span>
print("Guido van Rossum")</pre>
<pre>print("Guido van Rossum") <span style="color: #008000;"># Displaying a name</span></pre>
 

If we want a <strong>multiline comment</strong>, we can use either some hashes or a triple quote (the second one is the pro way):
<pre><span style="color: #008000;"># Displaying
# a name</span>
print("Guido van Rossum")</pre>
<pre><span style="color: #008000;">'''Displaying
   a name'''</span>
print("Guido van Rossum")</pre>
