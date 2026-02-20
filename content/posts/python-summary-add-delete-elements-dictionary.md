---
title: "Python summary: to add and delete elements in a dictionary"
date: 2015-03-03T14:00:37+00:00
draft: false
topics: ["Python"]
slug: "python-summary-add-delete-elements-dictionary"
lang: en
---

<hr />

For learning to do changes in, let's begin by creating two dictionaries:
<pre>>>> readbooks = {} # This is empty</pre>
<pre>>>> sandwich = {'Slices bread': 4,
		'Lettuce leaves': 1,
		'Slices tomato': 2,
		'Tablespoons mayonnaise': 2,
		'Slices prosciutto': 2,
		'Grilled chicken pieces': 'some ones'}</pre>
 

If we want to <strong>add a pair</strong> key-value, we must use the next syntaxis:
<pre><span style="color: #008000;"><strong>dictionary[key] = value</strong></span></pre>
<pre>>>> readbooks
{}
>>> <span style="color: #008000;">readbooks['The Little Prince'] = True</span>
>>> readbooks
{'The Little Prince': True}</pre>
And if we create a new key with existing name, the new pair replaces the existing (which can be used for quickly changing the value of a key):
<pre>>>> <span style="color: #008000;">readbooks['The Little Prince'] = False</span>
>>> readbooks
{'The Little Prince': False}</pre>
 

If we want to <strong>delete a pair</strong>:
<pre><span style="color: #008000;"><strong>del dictionary[key]</strong></span></pre>
<pre>>>> sandwich
{'Slices bread': 4, 'Tablespoons mayonnaise': 2, 'Lettuce leaves': 1,
'Grilled chicken pieces': 'some ones', 'Slices tomate': 2,
'Slices prosciutto': 2}
>>> <span style="color: #008000;">del sandwich['Grilled chicken pieces']</span>
>>> sandwich
{'Slices bread': 4, 'Tablespoons mayonnaise': 2, 'Lettuce leaves': 1,
'Slices tomate': 2, 'Slices prosciutto': 2}</pre>
 

For <strong>deleting a whole dictionary</strong>:
<pre><span style="color: #008000;"><strong>del dictionary</strong></span></pre>
<pre>>>><span style="color: #008000;"> del sandwich</span>
>>> sandwich
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'sandwich' is not defined
</pre>
