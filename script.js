


function updatePreview() {
  let previewElement = document.getElementById("preview");   
  let editorValue = document.getElementById("editor").value;
  let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
   let defaultText = `\
# this is h1 
## this is h2
[freecodecamp](https://www.freecodecamp.com)


\`\`\`
Multi line code:

function exampleOf() {  
return multiLineCodeBlock;  
}
\`\`\`

  
<html>
<head>
<p>This is code block</p>
</head>
 </html>
  
\`List items\`
- Some are bulleted.
     - With different indentation levels.
        - That look like this.

\`And there are numbererd lists too.\`
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or
* asterisks
  
**bold**
  
> Block Quotes

![image](https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;h=600&amp;dpr=1)


`;
   let previewElement = document.getElementById("preview");   
   let editorField = document.getElementById("editor")
   editorField.value = defaultText;
   previewElement.innerHTML = marked(defaultText); 
}