/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyPropellerBlade(scene) {
	CGFobject.call(this,scene);

	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.angle = 0; //degrees

	this.prop1 = new MyPropeller(this.scene);
	this.prop2 = new MyPropeller(this.scene);
	this.center = new MyHemisphere(this.scene,12,1);

	this.initBuffers();
};


MyPropellerBlade.prototype = Object.create(CGFobject.prototype);
MyPropellerBlade.prototype.constructor=MyPropellerBlade;


MyPropellerBlade.prototype.draw = function() {	


	this.scene.pushMatrix();
		this.scene.translate(0,0.05,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.prop1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.05,-0.35);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.prop2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.2,0.15);
		this.center.display();
	this.scene.popMatrix();
};
