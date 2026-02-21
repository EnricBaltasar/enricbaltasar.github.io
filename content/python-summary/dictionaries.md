---
title: "Python summary: dictionaries"
date: 2015-05-11T14:00:52+00:00
draft: false
topics: ["Python"]
slug: "dictionaries"
aliases: ["/python-summary-dictionaries/"]
lang: en
---

<!--more-->If we open a paper dictionary, we see a set of terms and its definitions, which are pairs (term+definition). In Python, dictionary has the same, but under other terminology:

<pre><del>term </del>                   key
  <del>definition </del>             value</pre>

 

The structure of the dictionaries is:

<pre><span style="color: #008000;"><strong>{</strong></span>key<span style="color: #008000;"><strong>:</strong></span> value<span style="color: #008000;"><strong>}</strong></span></pre>

The ampersands (<span style="color: #008000;">{</span> and <span style="color: #008000;">}</span>) delimits the dictionary. Within, the key and value are divided by a colon (<span style="color: #008000;">:</span>).

And if our dictionary contains more keys and values, they are divided by comma (<span style="color: #008000;">,</span>):

<pre><span style="color: #008000;">{</span>key<span style="color: #008000;">:</span> value<span style="color: #008000;"><strong>,</strong></span> key<span style="color: #008000;">:</span> value<span style="color: #008000;">}</span></pre>

 

The items can contain different built-in data types:

<pre>{<span style="color: #008000;">'name'</span>: 'Enric Baltasar', 'age': <span style="color: #008000;">20</span>}</pre>

However, about <a href="/python-summary/mutable-immutable-types/">mutable and immutable types</a>, combinations such as <em>tuple-list</em> (in form <em>key-value</em>) do not possible:

<table>
<tbody>
<tr>
<td style="background-color: #e3e3e3; text-align: center;"><strong>Key</strong></td>
<td style="background-color: #e3e3e3; text-align: center;"><strong>Value</strong></td>
</tr>
<tr>
<td style="text-align: center;">Immutable</td>
<td style="text-align: center;">Mutable/Immutable</td>
</tr>
<tr>
<td style="text-align: center;">Tuple
<em><span style="color: #999999;">(immutable)</span></em></td>
<td style="text-align: center;">Immutable</td>
</tr>
</tbody>
</table>

 

Moreover, Python dictionaries are not paper dictionaries: in Python, <strong>the pairs have not order</strong> (but sort ways exist).

<pre>>>> {'name": 'Enric Baltasar', 'age': 20}
<span style="color: #008000;">{'age': 20, 'name': 'Enric Baltasar'}</span></pre>

 

At last, we let's save the dictionary on the variable <em>our_dictionary</em> for working with it (1), check its contain (2) and view is it a dict type (3):

<pre>>>> our_dictionary = {'name': 'Enric Baltasar', 'age': 20}</pre>

<pre>>>> our_dictionary
{'age': 20, 'name': 'Enric Baltasar'}</pre>

<pre>>>> type(dictionary)
<class 'dict'></pre>

 

<hr />

<ul>
    <li><strong>Formal definition:</strong> dictionaries are mutable data structures.</li>
    <li><strong>More information: </strong><a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank" rel="noopener noreferrer">data structures</a></li>
</ul>
