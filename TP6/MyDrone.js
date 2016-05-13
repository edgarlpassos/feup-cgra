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
	
	this.arm1 = new MyCylinder(this.scene,12,7);
	this.arm2 = new MyCylinder(this.scene,12,7);
	this.arm3 = new MyCylinder(this.scene,12,7);
	this.arm4 = new MyCylinder(this.scene,12,7);
	this.hand1 = new MyCylinderWithTop(this.scene,12,12);
	this.hand2 = new MyCylinderWithTop(this.scene,12,12);
	this.hand3 = new MyCylinderWithTop(this.scene,12,12);
	this.hand4 = new MyCylinderWithTop(this.scene,12,12);

	this.initBuffers();
};


MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;


MyDrone.prototype.draw = function() {

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,1);
		this.center.draw();
	this.scene.popMatrix();
  	
	//first arm
	this.scene.pushMatrix();
		this.scene.scale(0.25,0.2,0.4);
		this.arm1.display();
	this.scene.popMatrix();

	//end of the first arm
	this.scene.pushMatrix();
		this.scene.translate(0,0.4,2.8);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.27,0.05);
		this.hand1.draw();
	this.scene.popMatrix();

	//second arm
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.25,0.2,0.4);
		this.arm2.display();
	this.scene.popMatrix();

	//end of the second arm
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0.4,2.8);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.27,0.05);
		this.hand2.draw();
	this.scene.popMatrix();

	//third arm
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,1,0,0);
		this.scene.scale(0.25,0.2,0.4);
		this.arm3.display();
	this.scene.popMatrix();

	//end of the second arm
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(0,0.4,2.8);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.27,0.05);
		this.hand3.draw();
	this.scene.popMatrix();

	//fourth arm
	this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(0.25,0.2,0.4);
		this.arm4.display();
	this.scene.popMatrix();

	//end of the fourth arm
	this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(0,0.4,2.8);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.27,0.05);
		this.hand4.draw();
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
