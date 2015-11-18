## HTML

### Pseudo Code Example

```
<tag1>
  <tag2>

    <tag21>This is more text</tag21>

    <tag22>
      <tag221></tag221>
    </tag22>

  </tag2>

  <tag3> Some Text </tag3>

  <tag4>
    Some Content
  </tag4>
</tag1>
```

### Real Code Example

```
<body><!-- This is the parent of the "first div" and "second div" -->
  <div class="first div"><!-- This the sibling of "second div" and the child of body -->
    <p>This is the Child of "first div" and the sibling of img.</p>
    <img src="#" />
  </div>

  <div class="second div"> This is the sibling of "first div" and the child of body. </div>
</body>
```

## JavaScript

```
element-1 {
    code-1 { this line is inside parentheses. so it's indented by 1 tab };
    code-2 { The parentheses of the line above (code-1) are CLOSED in the same line. So this one is NOT inside code-1 };
    code-3 { This one is still on the same level as code-1 and code-2 because it's inside the parentheses of element-1 };
}

code-4 { This is now back to the first indentation level as element-1 because it is OUTSIDE the parentheses of element-1 };

element-2 {
    element-3 {
        code-5{ This is now indented a SECOND time. Because element-3 opened another set of parentheses };
        code-6{ still the same level as code-5 };
    }
    code-7 { is after the closing parentheses of element-3. That's why it is on the same level as element-3 };
}
```
