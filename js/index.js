var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));
var c = parseInt(prompt("Digite o valor de C"));
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")

var delta = (b*b-(4*a*c))

if (delta < 0) {
	document.body.append("A equação não é possível")
}else {
	xx1 = (((-1*b)) + Math.sqrt(delta))
	x1 = (xx1/(2*a))
	//document.body.append("O valor de X' é " + x1)
	p1.append("O valor de X' é " + x1)
	document.body.appendChild(p1);
	xx2 = (((-1*b)) - Math.sqrt(delta))
	x2 = (xx2/(2*a))
	//document.body.append("O valor de X'' é " + x2)
	p2.append("O valor de X'' é " + x2)
	document.body.appendChild(p2);
	p3.append("O valor de delta é " + delta)
	document.body.appendChild(p3);
	//document.body.append("O valor de delta é " + delta)
}

