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
	//clock hands
	this.secondsHand = new MyClockHand(this.scene);
	this.minutesHand = new MyClockHand(this.scene);
	this.hoursHand = new MyClockHand(this.scene);


    this.clockFaceTex = new CGFappearance(this.scene);
    this.clockFaceTex.setDiffuse(0.9,0.9,0.9,1);
    this.clockFaceTex.setSpecular(0.9,0.9,0.9,1);
    this.clockFaceTex.setShininess(100);
    this.clockFaceTex.loadTexture("../resources/images/clock.png");

    //secondsHand appearance - red hand
	this.secondsAppearance = new CGFappearance(this.scene);
	this.secondsAppearance.setDiffuse(0.4,0,0,1);
	this.secondsAppearance.setSpecular(0.7,0.7,0.7,1);
	this.secondsAppearance.setShininess(200);

	//minutesHand appearance - yellow hand
	this.minutesAppearance = new CGFappearance(this.scene);
	this.minutesAppearance.setDiffuse(0.5,0.5,0,1);
	this.minutesAppearance.setSpecular(0.7,0.7,0.7,1);	
	this.minutesAppearance.setShininess(200);

	//hoursHand appearance - black hand
	this.hoursAppearance = new CGFappearance(this.scene);
	this.hoursAppearance.setDiffuse(0,0,0,1);
	this.hoursAppearance.setSpecular(0.7,0.7,0.7,1);
	this.hoursAppearance.setShininess(200);	

 	this.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {

 	this.cylinder.display();

 	this.scene.pushMatrix();
 		this.scene.translate(0,0,this.stacks);
 		this.clockFaceTex.apply();
 		this.clockFace.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.secondsHand.setAngle(-135);
		this.scene.translate(0,0,this.stacks+0.05);
		this.scene.scale(1,0.9,1);
 		this.secondsAppearance.apply();
 		this.secondsHand.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.minutesHand.setAngle(0);
		this.scene.translate(0,0,this.stacks+0.05);
		this.scene.scale(1,0.75,1);
 		this.minutesAppearance.apply();
 		this.minutesHand.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.hoursHand.setAngle(90);
		this.scene.translate(0,0,this.stacks+0.05);
		this.scene.scale(1,0.5,1);
 		this.hoursAppearance.apply();
 		this.hoursHand.display();
 	this.scene.popMatrix();

 };