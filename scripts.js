// const QRCode = require('qrcode');

var canvas = document.getElementById("generatedImage");
var ctx = canvas.getContext("2d");
var img = new Image();
var imgDebug = new Image();

var debugCode = "NZCOVIDTRACER:eyJnbG4iOiI5NDI5MzAwNjYwMjMyIiwib3BuIjoiUXVlZW5zIFBhcmvCoCIsImFkciI6IjE1MCBHYWxhIFN0cmVldMKgXG5JbnZlcmNhcmdpbGzCoCIsInZlciI6ImMxOToxIiwidHlwIjoiZW50cnkifQ==";

var qrObject = {};
qrObject.gln = "9429300660232";
qrObject.opn = "Queens Park ";
qrObject.adr = "150 Gala Street \nInvercargill ";
qrObject.ver = "c19:1";
qrObject.typ = "entry";
var qrCode = "NZCOVIDTRACER:" + window.btoa(JSON.stringify(qrObject));
console.log(qrCode);
console.log(JSON.stringify(qrObject));
console.log(debugCode === qrCode);



img.onload = function() {
	ctx.drawImage(img, 0, 0);
	// ctx.globalAlpha = 0.4;
	QRCode.toDataURL(qrCode, { errorCorrectionLevel: 'H' }, function (err, url) {
		console.log(url);
		var qrCodeImg = new Image();
		qrCodeImg.src = url;
		ctx.imageSmoothingEnabled = false;
		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.drawImage(qrCodeImg, 0, 10, 308, 308, 233, 275, 982, 982);
	});
}
img.src = 'qrcode.png';
imgDebug.src = 'Lemon-Demon-Spirit-Phone.png';

document.getElementById("toptext").addEventListener("change",function () {
	reDraw();

})

document.getElementById("bottomtext").addEventListener("change",function () {
	reDraw();
})

function wrapText(context, text, x, y, maxWidth, lineHeight, spacing) {
	var words = text.split(' ');
	var line = '';

	for(var n = 0; n < words.length; n++) {
		  var testLine = line + words[n] + ' ';
		  var metrics = context.measureText(testLine);
		  var testWidth = metrics.width;
		  if (testWidth > maxWidth && n > 0) {
		  	context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		this.fillTextWithSpacing(context, line, x, y, spacing);
		//context.fillText(line, x, y);
}