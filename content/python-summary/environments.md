---
title: "Python summary: environments"
date: 2015-05-06T14:00:16+00:00
draft: false
topics: ["Python"]
slug: "environments"
aliases: ["/python-summary-environments/"]
lang: en
---

We can use several environments for coding:

 
<h2 id="1-console"><span style="color: #ff6600;">(1)</span> Console</h2>
A console, also called e.g. command line or Python shell, where we write code directly in.

{{< img src="python-273-console-linux.png" alt="python-273-console-linux" >}}

It is used for trying small code pieces, and becomes faster some things:
<pre>>>> var = "hello"
>>> var <span style="color: #999999;"># Instead of <em>print(var)</em></span></pre>
In other cases, are nedeed run a .py file:
<pre><span style="color: #999999;">#filename.py</span>
from sys import argv

script = argv[0]
filename = argv[1]

print("Here is %r." % filename)</pre>
<pre>>>> python3 filename.py prettycats
Here is 'prettycats'.
</pre>
For running the program, we must be in whose folder and later enter the console. But if we are within, we must add the location:
<pre>>>> python3 <strong>Desktop/</strong>filename.py prettycats</pre>
<strong>Note 1:</strong> we run Python though python, python2 or python3. And we maybe must install an addon for doing that. Just try and look for.

<strong>Note 2:</strong> an important word is <strong>prompt</strong>, which is the triple greather-than symbol (>>>).

<strong>Note 3:</strong> similar consoles tho he Python console exist, such as <a href="/python-summary/bpython-mejor-consola-python/">bpython</a> and <a href="http://ipython.org/" target="_blank" rel="noopener noreferrer">IPython</a>.

<strong>Note 4:</strong> try the next utilities in a console:
<ul>
	<li><span style="color: #008000;">CTRL + L</span> (clear)</li>
	<li><span style="color: #008000;">Arrow up</span> (first run something)</li>
	<li><span style="color: #008000;">CTRL + C</span> (stop)</li>
	<li>Exit:
<ul>
	<li><span style="color: #008000;">CTRL + D</span></li>
	<li><span style="color: #008000;">quit()</span></li>
	<li><span style="color: #008000;">exit()</span></li>
</ul>
</li>
</ul>
<strong>Note 5:</strong> another, non-Python <em>commands</em>, are:
<ul>
	<li><span style="color: #008000;">ls</span> (view the content on a folder)</li>
	<li><span style="color: #008000;">cd FolderName</span> (enter folder)</li>
	<li><span style="color: #008000;">cd ..</span> (go back)</li>
	<li><span style="color: #008000;">cd --</span> (return to home)</li>
	<li><span style="color: #008000;">mkdir FolderName</span> (create a folder)</li>
	<li><span style="color: #008000;">touch FileName.something</span> (create a file)</li>
	<li><span style="color: #008000;">clear</span></li>
</ul>
If you cannot use one in your OS, for example <em>clear</em> on Windows, keep looking for, either specific functionalities or a list of commands for your OS.

 
<h2 id="2-text-editor"><span style="color: #ff6600;">(2)</span> Text editor</h2>
Basic something. I recommend <a href="http://www.sublimetext.com/3" target="_blank" rel="noopener noreferrer">Sublime Text 3</a>, which supports amount of languages, has autocomplete and more utilities too.

{{< img src="text-editor-sublime-python.png" alt="text-editor-sublime-python" >}}

 

 
<h2 id="3-ide"><span style="color: #ff6600;">(3)</span> IDE</h2>
IDE (Integrated Development Enviromment) is a text editor but with much more functions for programmers. Free and know IDE's are the official <strong>IDLE</strong> (you maybe must install, maybe not; try and look for) or <strong><a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">PyCharm</a></strong>, for example.

{{< img src="pycharm-example.png" alt="pycharm-example" >}}

 

<hr />

<strong>More information:</strong>
<ul>
	<li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads/</a></li>
	<li><a href="https://wiki.python.org/moin/IntegratedDevelopmentEnvironments" target="_blank" rel="noopener noreferrer">https://wiki.python.org/moin/IntegratedDevelopmentEnvironments</a></li>
</ul>
