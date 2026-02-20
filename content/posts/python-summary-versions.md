---
title: "Python summary: versions"
date: 2015-01-23T14:00:13+00:00
draft: false
topics: ["Python"]
slug: "python-summary-versions"
lang: en
---

Now two Python versions are being used: the <strong>2.x</strong> and <strong>3.x</strong> ones.
<pre>$ python --version
Python 2.7.6
$ python3 --version
Python 3.4.0</pre>
<strong>Recommend:</strong> use the latest stable version.

 

Here is a list of the most noticeable changes between them:
<pre><span style="color: #999999;">2.x</span> print "Hello" <span style="color: #999999;"># Display a text</span>
<span style="color: #999999;">3.x</span> print("Hello")</pre>
<pre><span style="color: #999999;">2.x</span> print "Hello", <span style="color: #999999;"># Supress newline</span>
<span style="color: #999999;">3.x</span> print("Hello", end=" ")</pre>
<pre><span style="color: #999999;">2.x</span> raw_input("How old? ") <span style="color: #999999;"># Ask to the user</span>
<span style="color: #999999;">3.x</span> input("How old? ")</pre>
<pre><span style="color: #999999;">2.x</span> # -*- coding: utf-8 -*- <span style="color: #999999;"># For using UTF-8; py2 works with ASCII by default</span>
<span style="color: #999999;">3.x</span> <span style="color: #999999;"># Python 3 works with UTF-8 by default</span></pre>
 

<hr />

<strong>More information:</strong>
<ul>
	<li><a href="http://stackoverflow.com/questions/5031625/python-3-syntax-changes" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/5031625/python-3-syntax-changes</a></li>
	<li><a href="https://docs.python.org/3/howto/pyporting.html" target="_blank" rel="noopener noreferrer">Migrate code from Python 2 to 3</a></li>
	<li><a href="http://stackoverflow.com/questions/15102943/how-to-update-python" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/15102943/how-to-update-python</a></li>
</ul>
