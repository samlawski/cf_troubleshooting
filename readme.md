# General #
This is a simple website built to provide quick help for beginners who learn programming and run into common problems.

# How to contribute #
You are welcome to contribute to this project by adding questions or fixing mistakes in existing questions and/or answers.
Some notes about contributing:

 1. All questions and their answers are saved in a single JSON file (faq.json). This file contains an array of objects. Each object has a "question", "answer" and "module". The module number is should align with the course material (and **not** be saved as a string). If it is a general question it should have the module number 0.
 2. The questions in the JSON file are ordered according to their module number.
 3. You may use HTML inside the "answer" string (but **not** inside the "question"). Remember to use a backslash \ before all quotes " (except single quotes ' ).
 4. To display actual HTML code you may use &#60 to display < and &#62 to display >.
	 For example: `&#60div&#62` turns into `<div>`
 5. In order to indent elements in your answer you may use the helper classes (indent1, indent2, indent3, indent4).
	 For example:
	 `<span class=\"indent1\">&#60div&#62</span>`
 6. There are also classes for colors to help you visualize something: .red, .blue, .green, .orange, .pink
	 For example:
	 `<span class=\"indent2 red\">&#60div&#62</span>`
