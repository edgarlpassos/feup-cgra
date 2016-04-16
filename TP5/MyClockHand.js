/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyClockHand(scene) {
	CGFobject.call(this,scene);

	this.myCube = new MyUnitCubeQuad(scene);
	this.initBuffers();
};

MyClockHand.prototype = Object.create(CGFobject.prototype);
MyClockHand.prototype.constructor=MyClockHand;

MyClockHand.prototype.setAngle = function(angle){
	this.scene.rotate(angle * Math.PI/180.0,0,0,1);
}

MyClockHand.prototype.display = function() {

	this.scene.translate(0,-0.5,0);
	this.scene.scale(0.03,1,0.03);
	this.myCube.display();
}
