/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyBoxDestiny(scene) {
	CGFobject.call(this,scene);
	
	this.x=3;
	this.y=0.7;
	this.z=3;

	this.box = new MyUnitCubeQuad(this.scene);

	this.initBuffers();
};


MyBoxDestiny.prototype = Object.create(CGFobject.prototype);
MyBoxDestiny.prototype.constructor=MyBoxDestiny;

MyBoxDestiny.prototype.draw = function() {
	
	this.scene.pushMatrix()
		this.scene.translate(this.x,this.y,this.z);
		this.scene.scale(1,0,1);
		this.box.display();
	this.scene.popMatrix();
}
