/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyTable(scene) {
	CGFobject.call(this,scene);


	this.materialWood = new CGFappearance(this.scene);
	this.materialWood.setAmbient(0.3,0.3,0.3,1);
	this.materialWood.setDiffuse(0.6,0.3,0,1);
	this.materialWood.setSpecular(0.1,0.1,0.1,1);	
	this.materialWood.setShininess(50);

	this.materialMetal = new CGFappearance(this.scene);
	this.materialMetal.setAmbient(0.3,0.3,0.3,1);
	this.materialMetal.setDiffuse(0.1,0.1,0.1,1);
	this.materialMetal.setSpecular(0.95,0.95,0.95,1);	
	this.materialMetal.setShininess(550);

	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers(); 

}; 

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display=function(){

	this.scene.pushMatrix();
		this.scene.translate(0,1.9,0);
		this.scene.scale(5,0.3,3);
		this.materialWood.apply();
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.materialMetal.apply();
		this.scene.translate(-2.5 + 0.15,0,1.5 - 0.15);
		this.scene.scale(0.3,3.5,0.3);
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5 - 0.15,0,1.5 - 0.15);
		this.scene.scale(0.3,3.5,0.3);
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5 - 0.15,0,-1.5 + 0.15);
		this.scene.scale(0.3,3.5,0.3);
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2.5 + 0.15,0,-1.5 + 0.15);
		this.scene.scale(0.3,3.5,0.3);
		this.cube.display();
	this.scene.popMatrix();




	
	
};