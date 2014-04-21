var x, y, z;
var u = -Math.PI;
var t = -Math.PI;
var n = -1;
var m = .2;
var r = 1.;

function aPoint() {
	x = (Math.cos(u) * sinh(t)) / (cosh(t) - Math.cos(u));
	y = Math.cos(u) * Math.sin(u) / (cosh(t) - Math.cos(u));
	z = Math.sin(u);
	outlet(0, r*x, r*y, r*z);
}


function incN(_n) {
	n = _n;
	inc();
}

function incM(_m) {
	m = _m;
	aPoint();
}

function inc() {
	u = n*Math.PI; //n ranges from -1 to 1
	t = m*Math.PI; // * 1/n;
//	aPoint();
}

function sinh(arg) {
	return (Math.exp(arg) - Math.exp(-arg)) / 2;
}

function cosh(arg) {
  return (Math.exp(arg) + Math.exp(-arg)) / 2;
}