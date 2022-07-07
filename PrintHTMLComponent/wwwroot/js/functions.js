
function print(title) {
    let iframe = document.createElement("iframe");
    let content = document.getElementById("printable-content").innerHTML;

    iframe.style.display = "none";
    document.body.appendChild(iframe);

    let doc = iframe.contentWindow.document;

    doc.open();
    doc.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>${title}</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                </head>
                <body>
                    ${content}
                </body>
                </html>`);
    doc.close();

    setTimeout(function () {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 200)
}