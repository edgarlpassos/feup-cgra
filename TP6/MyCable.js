/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyCable(scene) {
	CGFobject.call(this,scene);

	this.stacks=1;
	this.cable= new MyCylinder(scene, 3, this.stacks);
	this.hook = new MyDroneLeg(this.scene,0.3);

	this.initBuffers();
};


MyCable.prototype = Object.create(CGFobject.prototype);
MyCable.prototype.constructor=MyCable;

MyCable.prototype.draw = function() {
	
	this.scene.pushMatrix();
	this.scene.rotate(Math.PI,0,1,0);
	this.scene.rotate(Math.PI/2,1,0,0);
	
	this.scene.pushMatrix();
		this.scene.scale(0.1,0.1,this.stacks/5);
		this.cable.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.26,this.stacks/5-0.2);
		this.scene.scale(1.7,0.3,0.5);
		this.hook.draw();
	this.scene.popMatrix();
	this.scene.popMatrix();

}



MyCable.prototype.releaseCable = function(){
	this.stacks+=0.5;
}

MyCable.prototype.pullCable = function(){

	this.stacks-= 0.5;
	
	
}
