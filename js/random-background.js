(function(){
	"use strict";
	var l = [
		"lala_maid",
		"lala_idol",
		"lala_goku",
	];
	var b = l[Math.floor(Math.random() * l.length)];
	document.getElementsByTagName("body").item(0).classList.add(b);
}());

