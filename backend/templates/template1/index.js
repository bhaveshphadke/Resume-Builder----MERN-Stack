const puppeteer = require('puppeteer');
const fs = require('fs');
const cloudinary = require('cloudinary')
exports.GenerateResume = async (user, url, htmldata) => {

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content from HTML file
  const data = fs.writeFileSync(`./static/${user}.html`, htmldata)
  const html = fs.readFileSync(`./static/${user}.html`, 'utf-8');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: `./static/${user}.pdf`,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });
  console.log(1);
  const myCloud = await cloudinary.v2.uploader.upload(`./static/${user}.pdf`, {
    folder: "temp",
    format: "pdf",
    transformation: {
      width: 400,
      Height: 600,
      crop: "limit"
    }
  }, (res, err) => {
    console.log(res);
  });

  fs.unlinkSync(`./static/${user}.html`)
  fs.unlinkSync(`./static/${user}.pdf`)

  // Close the browser instance
  await browser.close();
  return myCloud
}