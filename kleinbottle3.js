// x = cos(u) (a + sin(v) cos(u/2) - sin(2v) sin(u/2)/2)
//   y = sin(u) (a + sin(v) cos(u/2) - sin(2v) sin(u/2)/2)
//   z = sin(u/2) sin(v) + cos(u/2) sin(2v)/2
//where
//   -pi <= u <= pi
//and
//   -pi <= v <= pi


var n = Math.random()*10;

var umin = -Math.PI;
var umax = Math.PI
var vmin = -Math.PI
var vmax = Math.PI;
var a = 1;

function nn(_n) {
	n = _n;
}

function bang() {
	makeShape();
}

function makeShape() {
	var x, y, z, u, v;
	
	for (var i=0;i<n;i++) {
	    for (var j=0;j<n;j++) {
	         u = umin + i * (umax - umin) / n;
	         v = vmin + j * (vmax - vmin) / n;	
			 eval(u,v);
			
	         u = umin + (i+1) * (umax - umin) / n;
	         v = vmin + j * (vmax - vmin) / n;
			 eval(u,v);
	         u = umin + (i+1) * (umax - umin) / n;
	         v = vmin + (j+1) * (vmax - vmin) / n;
			 eval(u,v);
	         u = umin + (i) * (umax - umin) / n;
	         v = vmin + (j+1) * (vmax - vmin) / n;
			 eval(u,v);
		}
	}		

}

function eval(u, v) {
   	var px = Math.cos(u)*(a + Math.sin(v)*Math.cos(u/2) - Math.sin(2*v)*Math.sin(u/2)/2);
   	var py = Math.sin(u)*(a + Math.sin(v)*Math.cos(u/2) - Math.sin(2*v)*Math.sin(u/2)/2);
	var pz = Math.sin(u/2)*Math.sin(v) + Math.cos(u/2)*Math.sin(2*v)/2;
	outlet(0, px, py, pz, u, v, n);
}