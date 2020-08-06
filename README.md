# OpenWebProject Get HTML as image
Download HTML as image

## Installation
`npm install owp.get-html-as-image --save`

## Usage

```js
import { downloadImage } from "owp.get-html-as-image";

downloadImage(container: dom|image, filename: string)
```

* container: Dom element or string of element ID. 
* filename: File name to store the file as.
    - Optional
    - Defaults to `"html.png"`
    - Is specified without an extension/ending `.png` will be used

### Examples
```js
//Download image from container with ID "myDiv" and save as "image.png"
downloadImage("myDiv", "image.png")

//Download image from container with ID "myDiv" and save as "image.png"
downloadImage(document.getElementById("myDiv"), "image.png")

//Download image with default name => html.png
downloadImage("myDiv")

//Download image with default file extension => image.png
downloadImage("myDiv", "image")

//Download image with different file names and extensions
downloadImage("myDiv", "image.jpg")
downloadImage("myDiv", "img.jpeg")
downloadImage("myDiv", "html.bmp")
```
