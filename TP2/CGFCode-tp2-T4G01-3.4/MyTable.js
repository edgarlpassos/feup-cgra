/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyTable(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers(); 

}; 

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display=function(){
	

	this.scene.pushMatrix();
	this.scene.translate(0,1.9,0);
	this.scene.scale(5,0.3,3);
	this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
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