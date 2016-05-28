/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyHook(scene) {
	CGFobject.call(this,scene);

	this.cableLength=0;
	this.hookLength=1.7;
	
	this.stacks=1;
	this.Hook= new MyCylinder(scene, 3, this.stacks);
	this.hookEnd = new MyDroneLeg(this.scene,0.3);

	this.initBuffers();
};


MyHook.prototype = Object.create(CGFobject.prototype);
MyHook.prototype.constructor=MyHook;

MyHook.prototype.draw = function() {
	
	this.scene.pushMatrix();
	this.scene.rotate(Math.PI,0,1,0);
	this.scene.rotate(Math.PI/2,1,0,0);
	
	this.scene.pushMatrix();
		this.scene.scale(0.1,0.1,this.cableLength);
		this.Hook.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.26,this.cableLength-0.2);
		this.scene.scale(this.hookLength,0.3,0.5);
		this.hookEnd.draw();
	this.scene.popMatrix();
	this.scene.popMatrix();

}



MyHook.prototype.releaseHook = function(){
	console.log("Release");
	this.cableLength+=0.2;
	//console.log(this.height);


}

MyHook.prototype.pullHook = function(){
	console.log("Pull");
	this.cableLength-=0.2;
	//console.log(this.height);
}

MyHook.prototype.getLength = function(){
	return this.cableLength + this.hookLength;
}
