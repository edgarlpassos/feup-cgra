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


    this.clockFaceTex = new CGFappearance(this.scene);
    this.clockFaceTex.setDiffuse(0.9,0.9,0.9,1);
    this.clockFaceTex.setSpecular(0.9,0.9,0.9,1);
    this.clockFaceTex.setShininess(100);
    this.clockFaceTex.loadTexture("../resources/images/clock.png");


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
 };