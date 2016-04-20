/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyDrone(scene) {
	CGFobject.call(this,scene);

	this.x = 7.5;
	this.y = 4;
	this.z = 7.5;

	this.angle = -145; //degrees
	
	this.initBuffers();
};


MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.initBuffers = function () {
	this.vertices = [
	0.5, 0.3, 0,
	-0.5, 0.3, 0,
	0,0.3,2];


	this.indices = [0,1,2];

	
     //this.normals = [];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

MyDrone.prototype.draw = function() {

	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.angle*Math.PI/180,0,1,0);
		this.display();
   	this.scene.popMatrix();
        
};

MyDrone.prototype.moveLeft = function(){
	this.angle=this.angle+4;
}

MyDrone.prototype.moveRight = function(){
	this.angle=this.angle-4;
}

MyDrone.prototype.moveFront = function(){
this.z+=Math.cos(this.angle*Math.PI/180);
this.x+=Math.sin(this.angle*Math.PI/180);

}

MyDrone.prototype.goBack = function(){
this.z-=Math.cos(this.angle*Math.PI/180);
this.x-=Math.sin(this.angle*Math.PI/180);
}

MyDrone.prototype.goUp = function(){
this.y+=1;
}

MyDrone.prototype.goDown = function(){
this.y-=1;
}

MyDrone.prototype.update = function(){
        
}