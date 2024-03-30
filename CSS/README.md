# CSS

## Introduction
CSS brings style to your web pages by interacting with HTML elements.

## Selector
CSS selectors are used to "find" (or select) the HTML elements you want to style.

More information [here](https://www.w3schools.com/css/css_selectors.asp)

### The CSS element Selector

The element selector selects HTML elements based on the element name.

**Example:**
Here, all <p> elements on the page will be center-aligned, with a red text color: 
```css
p {
  text-align: center;
  color: red;
}
```
### The CSS id Selector

**Example:**
The CSS rule below will be applied to the HTML element with id="para1": 
```css
#para1 {
  text-align: center;
  color: red;
}
```

### The CSS class Selector

**Example:**
In this example all HTML elements with class="center" will be red and center-aligned: 
```css
.center {
  text-align: center;
  color: red;
}
```

### The CSS Grouping Selector

**Example:**
In this example we have grouped the selectors from the code above:


```css
h1, h2, p {
  text-align: center;
  color: red;
}
```