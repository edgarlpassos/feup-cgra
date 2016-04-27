/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyDrone(scene) {
	CGFobject.call(this,scene);

	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.angle = 0; //degrees

	this.center=new MyHemisphere(this.scene,12,1);
	
	this.initBuffers();
};


MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;


MyDrone.prototype.draw = function() {

	//this.center.display();
	
	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.angle*Math.PI/180,0,1,0);
		this.center.draw();
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