const express = require('express')
const path = require('path')
const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ size: 'A4' });

const constants = require('./constants.js')
doc.pipe(fs.createWriteStream(path.join(__dirname,'output.pdf')));


doc
    .fontSize(25)
    .fontSize(20)
    .text('Bhavesh Phadke', 40, 40);
doc
    .fontSize(25)
    .fontSize(10)
    .text('(+91 9152569289)   DOB:(16-sept-2002)', 200, 45);

doc
    .fontSize(25)
    .fontSize(10)
    .text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem fuga recusandae sequi nobis, a quam dolor. Ea quis iure repudiandae corporis obcaecati error facili', 40, 60,);


// First Header Line
doc.lineWidth(1)
    .moveTo(40, 95)
    .lineTo(555.28, 95)
    .stroke()


// Partition Line
doc.lineWidth(1)
    .moveTo(300, 95)
    .lineTo(300, 800)
    .stroke()


// Left Section
//First Left Box
doc.fontSize(15).text('Education', 45, 105)
doc
    .fontSize(25)
    .fontSize(10)
    .text(constants.firstLeftBox.slice(0, 450), 45, 125, {
        columns: 3,
        columnGap: 15,
        height: 150,
        width: 700,
        align: 'justify',
        continued: false
    });


// Second Left Horizontal Line
doc.lineWidth(1)
    .moveTo(40, 250)
    .lineTo(300, 250)
    .stroke()
//Second Left Box
doc.fontSize(15).text('Skills', 45, 260)
doc
    .fontSize(10)
    .text(constants.secondLeftBox.slice(0, 700), 45, 280, {
        columns: 3,
        columnGap: 15,
        height: 250,
        width: 700,
        align: 'justify'
    });


// Third Left Horizontal Line
doc.lineWidth(1)
    .moveTo(40, 500)
    .lineTo(300, 500)
    .stroke()


//Third Left box
doc.fontSize(15).text('Others', 45, 510)
doc
    .fontSize(25)
    .fontSize(10)
    .text(constants.thirdLeftBox.slice(0, 500), 45, 530, {
        columns: 3,
        columnGap: 15,
        height: 170,
        width: 700,
        align: 'justify'
    });

// Fourth Left Horizontal Line
doc.lineWidth(1)
    .moveTo(40, 670)
    .lineTo(300, 670)
    .stroke()

//Third Left box
doc.fontSize(15).text('Spoken Languages', 45, 680)
doc
    .fontSize(25)
    .fontSize(10)
    .text(constants.fourthLeftBox.slice(0, 100), 45, 700, {
        columns: 3,
        columnGap: 15,
        height: 100,
        width: 700,
        align: 'justify'
    });



// Right Section 
//First Right Box
doc.fontSize(15).text('Experience or Projects', 310, 105)
for (let index = 0; index < 5; index++) {
    doc
        .fontSize(25)
        .fontSize(10)
        .text(constants.firstRightBox.slice(0, 500), 310, (125 + (100 * index)), {
            columns: 3,
            columnGap: 15,
            height: 100,
            width: 700,
            align: 'justify'
        });


}


//Last Horizontal Line
doc.lineWidth(1)
    .moveTo(40, 800)
    .lineTo(555.28, 800)
    .stroke()

// Get a reference to the Outline root
const { outline } = doc;

// Add a top-level bookmark
const top = outline.addItem('Top Level');

// Add a sub-section
top.addItem('Sub-section');


doc.end();











const app = express()
const PORT = 8000
app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(PORT, (err) => {
    console.log(`app is running on http://localhost:${PORT}`);
})