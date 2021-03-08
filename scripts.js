// const QRCode = require('qrcode');

var canvas = document.getElementById("generatedImage");
var ctx = canvas.getContext("2d");
var img = new Image();
var header = new Image();

var debugCode = "NZCOVIDTRACER:eyJnbG4iOiI5NDI5MzAwNjYwMjMyIiwib3BuIjoiUXVlZW5zIFBhcmvCoCIsImFkciI6IjE1MCBHYWxhIFN0cmVldMKgXG5JbnZlcmNhcmdpbGzCoCIsInZlciI6ImMxOToxIiwidHlwIjoiZW50cnkifQ==";

img.onload = function() {
	ctx.imageSmoothingEnabled = false;
	ctx.drawImage(img, 0, 0);
	// ctx.globalAlpha = 0.4;
	drawCode();
}

img.src = 'qrcode.png';
header.src = 'header.png';

function drawCode () {

	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(img, 0, 0);
	
	var qrObject = {};
	qrObject.gln = document.getElementById("gln").value;
	qrObject.opn = document.getElementById("opn").value;
	qrObject.adr = document.getElementById("adr").value;
	qrObject.ver = document.getElementById("ver").value;
	qrObject.typ = document.getElementById("typ").value;
	var qrCode = "NZCOVIDTRACER:" + window.btoa(JSON.stringify(qrObject));

	var newImageToDraw = new Image();
	newImageToDraw.onload = function() {
		// ctx.drawImage(newImageToDraw, 0, 10, 308, 308, 233, 275, 982, 982);
		ctx.drawImage(newImageToDraw, 233, 235, 982, 982);
		ctx.drawImage(header, 0, 0);
	}

	QRCode.toDataURL(qrCode, { errorCorrectionLevel: 'H' }, function (err, url) {
		newImageToDraw.src = url;
	});
}