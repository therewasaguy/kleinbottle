
var u = -Math.PI;
var t = -Math.PI;

function aPoint(u, t) {
	var x = Math.cos(u) * sinh(t) / (cosh(t) - Math.cos(u));
	var y = Math.cos(u) * Math.sin(u) / (cosh(t) - Math.cos(u));
	var z = Math.sin(u);
	outlet(0, "bang!");
	outlet(0, x, y, z);
}

function bang() {
	while (u <= Math.PI) {
		u = u + .01;
		t = t + .01;
		aPoint(u, t);
	}


}

function sinh(arg) {
	return (Math.exp(arg) - Math.exp(-arg)) / 2;
}

function cosh(arg) {
  return (Math.exp(arg) + Math.exp(-arg)) / 2;
}