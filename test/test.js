import downloadImage from "../";

console.log("test.js")

const root = document.getElementById("root");
const id = "content";

function addTest(container, filename, type) {
    const div = document.createElement("div");
    div.style["padding-bottom"] = "5px";
    const args = [];
    if (container) {
        args[0] = '"' + container + '"';
    }
    else {
        args[0] = 'document.getElementById("' + id + '")';
        container = document.getElementById(id);
    }
    if (filename) {
        args[1] = '"' + filename + '"';
    }
    else if (filename === null) {
        args[1] = "null";
    }
    if (type) {
        args[2] = '"' + type + '"';
    }
    else if (type === null) {
        args[2] = "null";
    }
    div.innerText = `downloadImage(${args.join(", ")})`;
    div.addEventListener("click", function () {
        downloadImage(container, filename, type);
    });
    root.appendChild(div);
}

addTest();
addTest(id);
addTest(id, "myfile");
addTest(id, "myfile.png");
addTest(id, "myfile.jpg");
addTest(id, "myfile.bmp");
addTest(id, "myfile.gif");
addTest(id, "myfile.ico");
addTest(id, "myfile.webp");