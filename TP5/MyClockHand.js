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
	this.scene.rotate(-1*angle * Math.PI/180.0,0,0,1);
}

MyClockHand.prototype.display = function() {

	this.scene.scale(0.05,0.7,0.05);
	this.myCube.display();
}
