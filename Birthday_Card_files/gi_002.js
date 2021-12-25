

function load_image($image, callback) {

    var src = $image.attr('src');
    
    if (src.indexOf('http') === -1) { //local image. no need proxy
        callback($image[0]);
        return $image[0];
    }

    var img = document.createElement('img');
    img.onload = function () {
        callback(img);
    };
    //[wd-882] - escaping & since breaks proxy
    img.src = "/proxy?url=" + encodeURIComponent(src);
    //img.src = "/proxy?url=" + src.replace("&","%26");

    return img;
}

function render_image($image, targetWidth, targetHeight, succFunc) {

    var canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    var ctx = canvas.getContext("2d");

    //background color=white
    ctx.fillStyle = '#FFFFFF'; // set canvas background color
    ctx.fillRect(0, 0, targetWidth, targetHeight);  // now fill the canvas 

    load_image($image, function (img) {
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        succFunc(canvas);
    });
}


//returns a rotated img, cloned with canvas
function get_rotated_image_helper(img, degree, succFunc) {

    if (degree === 0) {
        succFunc(img.toDataURL("image/jpeg"));
    }
    else {

        var canvas = document.createElement('canvas');
        var cContext = canvas.getContext('2d');

        var cw = img.width, ch = img.height, cx = 0, cy = 0;

        //   Calculate new canvas size and x/y coorditates for image
        switch (degree) {
            case 90:
                cw = img.height;
                ch = img.width;
                cy = img.height * (-1);
                break;
            case 180:
                cx = img.width * (-1);
                cy = img.height * (-1);
                break;
            case 270:
                cw = img.height;
                ch = img.width;
                cx = img.width * (-1);
                break;
        }

        //  Rotate image
        canvas.setAttribute('width', cw);
        canvas.setAttribute('height', ch);
        cContext.rotate(degree * Math.PI / 180);
        cContext.drawImage(img, cx, cy);

        console.log('---rotated image drawn');

        var newImgData = canvas.toDataURL("image/jpeg");

        console.log('---rotated base64 image created');

        succFunc(newImgData);
    }
}


function download_card_as_pdf(countryCode, cardSize) {// 

    const letterCountries = ['US', 'USM', 'CA','MX','DO','PH','CL'];
    var current_page_type = letterCountries.indexOf(countryCode) > -1 ? 'letter' : 'a4'; //letter / a4
   

    console.log('=== CARD PDF EXPORT - started === ' + current_page_type);

    var front = $('.preloader .front');
    var back = $('.preloader .back');
    var left = $('.preloader .left');
    var right = $('.preloader .right');

    var isLandscapeLayout = cardSize === "landscape";

    //Page Settings:
    //A4  is 210xx297
    //LTR is 216x279
    //A4 settings:
    var page_width = 210;
    var page_height = 297;
    if (current_page_type === "letter") {
        page_width = 216;
        page_height = 279;
    }

    var pdf_image_width;
    var apply_landscape_pdf_fixes = false; //LANDSPACE PDF PAGE - NOT LADNSCAPE LAYOUT!

    if (!isLandscapeLayout) {
      
            //FULL PAGE PRINT
            pdfDoc = new jsPDF('landscape', 'mm', current_page_type);

            apply_landscape_pdf_fixes = true; //2nd page should be "rotated"

            //landscape A4 - swapping width & height:
            var t = page_width;
            page_width = page_height;
            page_height = t;

        if (cardSize==='square')//($('body').hasClass('layout_square'))
                pdf_image_width = 127; //~5inch - comes out smaller with "fit to page"
            else
                pdf_image_width = 121; //according to card ratio 1.46385542168674, this will result in 7inch high card (178mm)
      
    }
    else {
        //LANDSCAPE LAYOUT mode:      
            //FULL PAGE PRINT
            pdfDoc = new jsPDF('portrait', 'mm', current_page_type);
            pdf_image_width = 180;
       
      
    }



    var heightRatio = front[0].height / front[0].width; //($('.editorFrame').height() / $('.editorFrame').width());
    var pdf_image_height = pdf_image_width * heightRatio;

    //layout: page1: [IMGBACK] [IMGFRONT]    
    //        page2: [INNER1] [INNER2]


    //LOCATING EACH IMAGE:
    //page1 x,y:
    var backX, backY, frontX, frontY;
    //page2 x,y:
    var inner1X, inner1Y, inner2X, inner2Y;

    if (!isLandscapeLayout) {
        //page 1: side by side
        backX = (page_width - (2 * pdf_image_width)) / 2;
        frontX = backX + pdf_image_width;
        frontY = (page_height - pdf_image_height) / 2;
     
        backY = frontY;
        //page 2: same as page 1
        inner1X = backX;
        inner2X = frontX;
        inner1Y = frontY;
        inner2Y = backY;
    }
    else {
        //landscape: one on top of other
        backX = (page_width - pdf_image_width) / 2;
       

        backY = (page_height - (2 * pdf_image_height)) / 2;
        frontX = backX;
        frontY = backY + pdf_image_height;

        //page 2: same as page 1, but switched
        inner2X = backX;
        inner1X = frontX;
        inner2Y = frontY;
        inner1Y = backY;
    }


    var currentImg = null; // to save memory, each time working with single img

    //canvas size used to render each of the 4 images to be inserted to the PDF
    var canvasW = 1500;
    var canvasH = parseInt(canvasW * heightRatio);
    console.log('canvas size used for rendering: ' + canvasW + 'x' + canvasH);

    //back
    render_image(back, canvasW, canvasH, function (currentImg) {

        var rotationBackDegrees = 0;
        if (isLandscapeLayout)
            rotationBackDegrees = 180;
        //DZ 18may15: all rotations cancelled due to yair's request
        //cancelled: rotationBackDegrees = 0;

        get_rotated_image_helper(currentImg, rotationBackDegrees, function (currentImg) {

            //debug.log('rendered page 1');
            pdfDoc.addImage(currentImg, 'JPEG', backX, backY, pdf_image_width, pdf_image_height);
            //front:
            render_image(front, canvasW, canvasH, function (currentImg) {
                //debug.log('rendered page 2');
                pdfDoc.addImage(currentImg, 'JPEG', frontX, frontY, pdf_image_width, pdf_image_height);

                //adding rect around front page:
                pdfDoc.setDrawColor(170, 170, 170);

                //DZ 2mar17: CIE-184 Make border line for cards + invites prints + PDF thinner
                //pdfDoc.setLineWidth('0.25');
                pdfDoc.setLineWidth('0.05');
                pdfDoc.rect(frontX, frontY,
                    pdf_image_width, pdf_image_height);


                //NEWPAGE:
                pdfDoc.addPage();


                var rotationDegrees = 0;
                if (isLandscapeLayout) {
                    //LANDSCAPE CARD LAYOUT. similiar but different
                    
                        rotationDegrees = 180;
                        //switch inner 1,2 y's:
                        const t = inner1Y;
                        inner1Y = inner2Y;
                        inner2Y = t;
                    
                }
                //other layouts
                else if (apply_landscape_pdf_fixes) {
                    //LANDSCAPE PDF PAGE (done before landscape layouts, means that PDF page is landscape oriented)
                    //each card should be rotated 270degs:
                    rotationDegrees = 180;
                    //swap inner 1,2 x's:
                    const t = inner1X;
                    inner1X = inner2X;
                    inner2X = t;
                }

                //DZ 18may15: all rotations cancelled due to yair's request
                //cacelled: rotationDegrees = 0;

                //INSIDE 1:
                render_image(left, canvasW, canvasH, function (currentImg) {
                    //debug.log('rendered page 3');
                    get_rotated_image_helper(currentImg, rotationDegrees, function (currentImg) {

                        pdfDoc.addImage(currentImg, 'JPEG', inner1X, inner1Y, pdf_image_width, pdf_image_height);
                        //INSIDE2:
                        render_image(right, canvasW, canvasH, function (currentImg) {

                            get_rotated_image_helper(currentImg, rotationDegrees, function (currentImg) {
                                //debug.log('done with mid pages');
                                pdfDoc.addImage(currentImg, 'JPEG', inner2X, inner2Y, pdf_image_width, pdf_image_height);

                                console.log('=== PDF EXPORT - DONE ===');
                               
                                    console.log('PDF direct download');
                                    //DIRECT DOWNLOAD
                                    pdfDoc.save('GreetingsIsland card.pdf');
                                    pdfDoc = null;

                              
                            });
                        });
                    });
                });
            });
        });
    });
}



 