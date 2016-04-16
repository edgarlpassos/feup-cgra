/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyClockHand(scene, size) {
	CGFobject.call(this,scene);

	this.currAng = 0;
	this.size = size

	this.myCube = new MyUnitCubeQuad(scene);
	this.initBuffers();
};

MyClockHand.prototype = Object.create(CGFobject.prototype);
MyClockHand.prototype.constructor=MyClockHand;

MyClockHand.prototype.setAngle = function(angle){
	
	this.currAng = angle;
}

MyClockHand.prototype.display = function() {

	this.scene.rotate(-this.currAng * Math.PI/180.0,0,0,1);
	this.scene.scale(0.03,this.size,0.03);
	this.scene.translate(0,-0.5,0);
	this.myCube.display();
}
