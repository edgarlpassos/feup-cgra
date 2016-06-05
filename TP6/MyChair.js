/**
 * MyChair
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyChair(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers(); 

}; 

MyChair.prototype = Object.create(CGFobject.prototype);
MyChair.prototype.constructor=MyChair;

MyChair.prototype.display=function(){
	
	this.scene.translate(0,2,0);
	
	this.scene.translate(0,0.7,1.3);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.scale(1.4,1.7,1.3);

	this.scene.pushMatrix();
	this.scene.translate(0,0,0);
	this.scene.scale(1.5,0.1,1.5);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.7,0.8,0);
	this.scene.rotate(Math.PI/2,0,0,1);
	this.scene.scale(1.5,0.1,1.5);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.70,-0.75,0.70);
	this.scene.scale(0.1,1.5,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.70+1.4,-0.75,0.70);
	this.scene.scale(0.1,1.5,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.70+1.4,-0.75,0.70-1.4);
	this.scene.scale(0.1,1.5,0.1);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-0.70,-0.75,0.70-1.4);
	this.scene.scale(0.1,1.5,0.1);
	this.cube.display();
	this.scene.popMatrix();
	
};
