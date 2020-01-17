const data = require("seaFoodCharleston.json")

const defaultHtml = ({body, title}) => {
    `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>${title}</title>
    </head>
    <body>
        ${body}
    </body>
    </html>
`
}

const main = () => {
    return `
    <main>
    ${vendorlist}
    </main>
    `
}

const venderlist = () => {
    return `
    <ul>${data.vendors.map(vendorItem)}</ul>
    `
}

const vendorItem = ({name, address, web, phone, email, products, schedule, links, images, story}) => {
    return `
    <li>
    <div>${name}</div>
    </li>
    <li>
    <div>${address}</div>
    </li>
    <li>
    <div>${web}</div>
    </li>
    <li>
    <div>${phone}</div>
    </li>
    <li>
    <div>${email}</div>
    </li>
    <li>
    <div>${products.map(productsItem)}</div>
    </li>
    <li>
    <div>${schedule}</div>
    </li>
    <li>
    <div>${links}</div>
    </li>
    <li>
    <div>${images.map(imagesItem)}</div>
    </li>
    <li>
    <div>${story}</div>
    </li>
    `
}

const bodyHTML = [
    header(),
    main(),
    footer()
].join("")

const page = defaultHtml({body: bodyHTML, title: data.site.title})

fs.writefile("index.html", "utf-8",page, (err, data) => {
if (err) throw err;
console.log('Saved!');
});