import html2canvas from "html2canvas";
import download from "downloadjs";

export default function (container, filename) {
    if (!container) {
        throw Error("owp.download-html-as-image: Missing required parameter: container")
    }
    if (typeof container === "string") {
        const id = container;
        container = document.getElementById(container);
        if (!container) {
            throw Error("owp.download-html-as-image: Cant find element with id '" + id + "'");
        }
    }
    if (!filename) {
        filename = "html.png";
    }
    else if (!filename.includes(".")) {
        filename += ".png";
    }
    const mimeType = getMimeType(filename);
    console.log(mimeType)
    html2canvas(container).then(canvas => {
        const img = canvas.toDataURL(mimeType);
        download(img, filename, mimeType);
    });
}

function getMimeType(filename) {
    //Try to get type from file name
    const ext = filename.substr(filename.lastIndexOf(".") + 1);
    if (!ext) {
        //Default to png
        return "image/png";
    }
    //jpg is allowed file ending for mime jpeg.
    if (ext === "jpg") {
        return "image/jpeg";
    }
    return "image/" + ext;
}