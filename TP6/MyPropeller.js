/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyPropeller(scene,direction) {
	CGFobject.call(this,scene);

		
	this.direction = direction;

	this.propellerSpeed = {
  		SLOW: 0,
  		NORMAL: 1,
  		FAST: 2,
  	}

  	this.speed = this.propellerSpeed.NORMAL;
  	this.angle = 0;


	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.angle = 0; //degrees

	this.prop1 = new MyPropellerBlade(this.scene);
	this.prop2 = new MyPropellerBlade(this.scene);
	this.center = new MyHemisphere(this.scene,12,1);

	this.initBuffers();
};


MyPropeller.prototype = Object.create(CGFobject.prototype);
MyPropeller.prototype.constructor=MyPropeller;


MyPropeller.prototype.draw = function() {	


	this.scene.pushMatrix();
		this.scene.translate(0,0.05,0.4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.prop1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.05,-0.35);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.prop2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(0.2,0.2,0.15);
		this.center.display();
	this.scene.popMatrix();
};

MyPropeller.prototype.setSpeed = function(speed){
	this.speed = speed;
};

MyPropeller.prototype.update = function(){
	switch(this.speed){
		case this.propellerSpeed.SLOW:
			this.angle += 0.2 * 2*Math.PI*this.scene.updateRate*0.001 * this.direction;
			break;

		case this.propellerSpeed.NORMAL:
			this.angle += 2*Math.PI*this.scene.updateRate*0.001 * this.direction;
			break;

		case this.propellerSpeed.FAST:
			this.angle += 10 * 2*Math.PI*this.scene.updateRate*0.001 * this.direction;
			break;
	}
};
