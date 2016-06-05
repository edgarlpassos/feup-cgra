/**
 * MyDroneLeg
 * @constructor
 */
 function MyDroneLeg(scene, thickness) {
 	CGFobject.call(this,scene);
	
	var int_rad = 1 - thickness;
	this.front = new MyDroneLegFront(this.scene,-2,2);
	this.side1 = new MyDroneLegSide1(this.scene,-2,int_rad);
	this.side2 = new MyDroneLegSide2(this.scene,2,int_rad);
	this.back = new MyDroneLegBack(this.scene,-2,2,int_rad);

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

