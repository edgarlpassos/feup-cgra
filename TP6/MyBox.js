/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyBox(scene) {
	CGFobject.call(this,scene);
	
	this.x=11;
	this.y=0.7;
	this.z=3;

	this.box = new MyUnitCubeQuad(this.scene);

	this.initBuffers();
};


MyBox.prototype = Object.create(CGFobject.prototype);
MyBox.prototype.constructor=MyBox;

MyBox.prototype.draw = function() {
	
	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.box.display();
	this.scene.popMatrix();
}
