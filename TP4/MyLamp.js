/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	this.vertices = [];
 	this.normals = [];
 	this.indices = [];
	
	var ang=(2*Math.PI)/this.slices;

	for(var i=0;i<this.slices;i++){
		this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), 0);
		this.vertices.push(Math.cos(ang*(i+1)), Math.sin(ang*(i+1)), 0);
		this.vertices.push(0,0,1);

		this.indices.push(this.vertices.length - 3, this.vertices.length -2, this.vertices.length - 1);

		this.normals.push(Math.cos(ang*i), Math.sin(ang*i), 0);
		this.normals.push(Math.cos(ang*(i+1)), Math.sin(ang*(i+1)), 0);
		this.normals.push(0,0,1);
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };