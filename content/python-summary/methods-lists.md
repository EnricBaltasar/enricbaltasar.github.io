---
title: "Python summary: methods for lists"
date: 2015-04-28T14:00:28+00:00
draft: false
topics: ["Python"]
slug: "methods-lists"
aliases: ["/python-summary-methods-lists/"]
lang: en
---

<!--more-->We will view the functions which can be used for lists:

<ul>
    <li>list.<strong>append</strong>(item)</li>
    <li>list.<strong>extend</strong>(item)</li>
    <li>list.<strong>insert</strong>(index, item)</li>
    <li>list.<strong>remove</strong>(item)</li>
    <li>list.<strong>pop</strong>(index)</li>
    <li>list.<strong>clear</strong>()</li>
    <li>list.<strong>index</strong>(item)</li>
    <li>list.<strong>count</strong>(item)</li>
    <li>list.<strong>sort</strong>()</li>
    <li>list.<strong>reverse</strong>()</li>
    <li><del>list.<strong>copy</strong>()</del></li>
</ul>

 

Let's start with:

<pre>>>> animals = ['cat', 'dog', 'bee']</pre>

And for each method we will imagine if we had done this:

<pre>>>> animals = ['cat', 'dog', 'bee'] <span style="color: #999999;"># Creating the dictionary again</span></pre>

 

 

<strong><span style="color: #ff6600;">(#)</span></strong> To <strong>add one item</strong> to the end of list:

<pre><strong>list.append(item)</strong></pre>

<pre>>>> <span style="color: #008000;">animals.append('eagle')</span>
>>> ['cat', 'dog', 'bee', 'eagle']</pre>

<pre>>>> couple = ['cow', 'bull']
>>> animals.append(couple)
>>> animals
['cat', 'dog', 'bee', 'eagle', ['cow', 'bull']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>concatenate an item</strong> to the end of list:

<pre><strong>list.extend(item)</strong></pre>

<pre>>>> <span style="color: #008000;">animals.extend('eagle')</span>
>>> ['cat', 'dog', 'bee', 'eagle']</pre>

<pre>>>> couple = ['cow', 'bull']
>>> animals.extend(couple)
>>> animals
['cat', 'dog', 'bee', 'eagle', 'cow', 'bull']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>insert one item at a given position</strong>, moving to the right which had:<strong>
</strong>

<pre><strong>list.insert(index, item)</strong></pre>

<pre>>>> <span style="color: #008000;">animals.insert(2, 'eagle')</span>
>>> animals
['cat', 'dog', 'eagle', 'bee']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>delete an item</strong>, the first found with whose element:

<pre><strong>list.remove(item)</strong></pre>

<pre>>>> animals.append('dog')
>>> animals
['cat', 'dog', 'bee', 'dog']
>>> <span style="color: #008000;">animals.remove('dog')</span>
>>> animals
['cat', 'bee', 'dog']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>remove and catch an item</strong>:

<pre><strong>list.pop(index)</strong></pre>

<pre>>>> animals
['cat', 'dog', 'bee']
>>> <span style="color: #008000;">animals.pop(1)</span>
'dog'
>>> animals
['cat', 'bee']</pre>

If no index is specified, the method catches the last item in the list:

<pre>>>> animals
['cat', 'dog', 'bee']
>>> <span style="color: #008000;">animals.pop()</span>
'bee'
>>> animals
['cat', 'dog']</pre>

 

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>remove all items</strong>:

<pre><strong>list.clear()</strong></pre>

<pre>>>> <span style="color: #008000;">animals.clear()</span>
'dog'
>>> animals
[]</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>return the first index of an item</strong>:

<pre><strong>list.index(item)</strong></pre>

<pre>>>> animals.append('dog')
>>> animals['cat', 'dog', 'bee', 'dog']
>>> <span style="color: #008000;">animals.index('dog')</span>
1</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>return the times which an item appears</strong>:

<pre><strong>list.count('dog')</strong></pre>

<pre>>>> animals.append('dog')
>>> animals['cat', 'dog', 'bee', 'dog']
>>> <span style="color: #008000;">animals.index('dog')</span>
2</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>sort the items</strong> (e.g., alphabetically):

<pre><strong>list.sort()</strong></pre>

<pre>>>> animals
['cat', 'dog', 'bee']
>>> <span style="color: #008000;">animals.sort()</span>
['bee', 'cat', 'dog']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>do the opossite than sort()</strong>:

<pre><strong>list.reverse()</strong></pre>

<pre>>>> animals
['cat', 'dog', 'bee']
>>> <span style="color: #008000;">animals.reverse()</span>
>>> animals
['bee', 'dog', 'cat']</pre>

 

<span style="color: #ff6600;"><strong>(#)</strong></span> To <strong>copy a list</strong> as independent:

<pre><strong>list.copy()</strong></pre>

<pre>>>> myanimals = animals
>>> myanimals
['cat', 'dog', 'bee']
>>> animals.append('cow')
>>> myanimals
['cat', 'dog', 'bee', 'cow']
>>> myanimals is animals
True
>>> <span style="color: #ff0000;">animals.copy()</span>
</pre>

The copy() method does not run to me, however it is possible to use the <strong>list() function</strong> for example (read below, on <em>more information</em>):

<pre>>>> animals = ['cat', 'dog', 'bee']
>>> <span style="color: #008000;">myanimals = list(animals)</span> <span style="color: #999999;"># new_list = list(old_list)</span>
>>> animals.append('cow')
>>> myanimals
['cat', 'dog', 'bee']
>>> myanimals is animals
False</pre>

 

<hr />

<strong>More information:</strong>

<ul>
    <li><a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/tutorial/datastructures.html</a></li>
    <li><a href="http://stackoverflow.com/questions/2612802/how-to-clone-or-copy-a-list-in-python" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/2612802/how-to-clone-or-copy-a-list-in-python</a></li>
    <li><a href="https://docs.python.org/3.3/library/functions.html#func-list" target="_blank" rel="noopener noreferrer">https://docs.python.org/3.3/library/functions.html#func-list</a></li>
</ul>
