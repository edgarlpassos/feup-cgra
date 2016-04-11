/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
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
 	this.texCoords = [];
	
	var ang=(2*Math.PI)/this.slices;

//This cycle creates one stack of the object each iteration
//The inner cycle creates one side of the unitary object every iteration
//Every vertice (and index) gets pushed at least twice, with the ones that are shared
//by stacks getting pushed 4 times

	var patchLengthx = 1 / this.slices;
 	var patchLengthy = 1 / this.stacks;
 	var xCoord =0;
 	var yCoord =0;

	
	for(j=0;j<this.stacks;j++){
 		for(i=0;i<this.slices;i++){
 			this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), j);
			this.vertices.push(Math.cos(ang*(i+1)), Math.sin(ang*(i+1)), j);
			this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), j+1);
			this.vertices.push(Math.cos(ang*(i+1)), Math.sin(ang*(i+1)), j+1);

			this.indices.push((j*4*this.slices)+i*4,(j*4*this.slices)+i*4+1,(j*4*this.slices)+i*4+2);
			this.indices.push((j*4*this.slices)+i*4+1, (j*4*this.slices)+i*4+3,(j*4*this.slices)+i*4+2);
			
			this.texCoords.push(0, 1);
			this.texCoords.push(1, 1);
			this.texCoords.push(1, 0);
			this.texCoords.push(0, 0);
			
		}

		xCoord =0;
		yCoord += patchLengthy;

	}

	for(j=0;j<this.stacks;j++){
		for(i=0;i<this.slices;i++){
			
			this.normals.push(Math.cos(ang*(i)) ,
								Math.sin(ang*(i)), 0);
			this.normals.push(Math.cos(ang*(i+1)) ,
								Math.sin(ang*(i+1)), 0);
			this.normals.push(Math.cos(ang*(i)) ,
								Math.sin(ang*(i)), 0);
			this.normals.push(Math.cos(ang*(i+1)) ,
								Math.sin(ang*(i+1)), 0);

		}
	}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

