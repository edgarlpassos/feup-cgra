/**
 * MyClock
 * @constructor
 */
 function MyClock(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	this.scene = scene;
	this.cylinder = new MyCylinder(this.scene,slices,stacks);
	this.clockFace = new MyCircle(this.scene,slices);
	//clock hand
	this.secondsHand = new MyClockHand(this.scene);


    this.clockFaceTex = new CGFappearance(this.scene);
    this.clockFaceTex.setDiffuse(0.9,0.9,0.9,1);
    this.clockFaceTex.setSpecular(0.9,0.9,0.9,1);
    this.clockFaceTex.setShininess(100);
    this.clockFaceTex.loadTexture("../resources/images/clock.png");

    //secondsHand appearance - red hand
	this.secondsAppearance = new CGFappearance(this.scene);
	this.secondsAppearance.setDiffuse(0.4,0,0,1);
	this.secondsAppearance.setSpecular(0.1,0.1,0.1,1);


 	this.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {2

 	//this.cylinder.display();

 	this.scene.pushMatrix();
 		this.scene.translate(0,0,this.stacks);
 		this.clockFaceTex.apply();
 		this.clockFace.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.scene.translate(0,0.5,this.stacks+0.05);
 		this.secondsAppearance.apply();
 		this.secondsHand.display();
 	this.scene.popMatrix();

 };