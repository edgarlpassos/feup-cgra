/**
 * MyDroneLeg
 * @constructor
 */
 function MyDroneLeg(scene) {
 	CGFobject.call(this,scene);
	
	this.front = new MyDroneLegFront(this.scene,-2,2);
	this.side1 = new MyDroneLegSide1(this.scene,-2);
	this.side2 = new MyDroneLegSide2(this.scene,2);
	this.back = new MyDroneLegBack(this.scene,-2,2,0.96);

 	this.initBuffers();
 };

 MyDroneLeg.prototype = Object.create(CGFobject.prototype);
 MyDroneLeg.prototype.constructor = MyDroneLeg;

 MyDroneLeg.prototype.draw = function() {
 	this.scene.pushMatrix();
 		this.front.display();
 		this.side1.display();
 		this.side2.display();
 		this.back.display();
 	this.scene.popMatrix();
 };

