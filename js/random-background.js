(function(){
	"use strict";
	var l = [
		"lala_maid.jpg",
		"lala_idol.jpg",
		"lala_goku.jpg"
	];
	var b = l[Math.floor(Math.random() * l.length)];
	document.body.style.backgroundImage = 'url(/img/' + b + ')';
}());

