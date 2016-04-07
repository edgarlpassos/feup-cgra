/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.materialC = new CGFappearance(this.scene);
	//this.materialC.setAmbient(0.1,0.1,0.1,1);
	this.materialC.setDiffuse(0.627,0.322,0.176,1);
	//this.materialC.setSpecular(0.1,0.03,0.03,1);	
	this.materialC.setShininess(30);

	this.materialD = new CGFappearance(this.scene);
//	this.materialD.setAmbient(0.1,1,1,1);
	this.materialD.setDiffuse(.678,.698,.741,1);
//	this.materialD.setSpecular(1,1,1,1);	
	this.materialD.setShininess(1);

	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function() {
	this.scene.pushMatrix();
	this.scene.scale(5, 0.3, 3);
	this.scene.translate(0, (3.5-0.15)/0.3, 0);
	this.materialC.apply();
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.translate((2.5-0.5*0.3)/0.3, 1.75/3.5, (1.5-0.5*0.3)/0.3);
	this.materialD.apply();
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.translate(-(2.5-0.5*0.3)/0.3, 1.75/3.5, (1.5-0.5*0.3)/0.3);
	this.materialD.apply();
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.translate((2.5-0.5*0.3)/0.3, 1.75/3.5, -(1.5-0.5*0.3)/0.3);
	this.materialD.apply();
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.translate(-(2.5-0.5*0.3)/0.3, 1.75/3.5, -(1.5-0.5*0.3)/0.3);
	this.materialD.apply();
	this.cube.display();
	this.scene.popMatrix();
}
