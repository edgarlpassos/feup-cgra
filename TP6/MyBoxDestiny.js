/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyBoxDestiny(scene) {
	CGFobject.call(this,scene);
	
	this.x=5;
	this.y=3.5;
	this.z=8;

	this.box = new MyUnitCubeQuad(this.scene);

	this.initBuffers();
};


MyBoxDestiny.prototype = Object.create(CGFobject.prototype);
MyBoxDestiny.prototype.constructor=MyBoxDestiny;

MyBoxDestiny.prototype.draw = function() {
	
	this.scene.pushMatrix()
		this.scene.translate(this.x,this.y,this.z);
		this.scene.scale(1,0.01,1);
		this.box.display();
	this.scene.popMatrix();
}
