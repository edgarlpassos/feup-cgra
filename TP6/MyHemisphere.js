/**
 * MyHemisphere
 * @constructor
 */
 function MyHemisphere(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	
	this.base = new MyCircle(this.scene,12);
 	this.initBuffers();
 };

 MyHemisphere.prototype = Object.create(CGFobject.prototype);
 MyHemisphere.prototype.constructor = MyHemisphere;

 MyHemisphere.prototype.initBuffers = function() {
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
 	//this.texCoords = [];
	
	var ang1=(2*Math.PI)/this.slices;
	var ang2=(Math.PI)/this.slices;
	var ang3=(Math.PI/2)/this.slices;
	var n_verts = 0;


	for(var i=0;i<this.slices;i++){
		for(var j = 0; j < this.slices/2; j++){

			//vertices
			this.vertices.push(Math.cos(ang1*i)*Math.sin(ang2*j), Math.sin(ang1*i)*Math.sin(ang2*j)
			, Math.cos(ang2*j));
			n_verts++;

			this.vertices.push(Math.cos(ang1*(i+1))*Math.sin(ang2*j), Math.sin(ang1*(i+1))*Math.sin(ang2*j)
			, Math.cos(ang2*j));
			n_verts++;

			this.vertices.push(Math.cos(ang1*i)*Math.sin(ang2*(j+1)), Math.sin(ang1*i)*Math.sin(ang2*(j+1))
			, Math.cos(ang2*(j+1)));
			n_verts++;
		
			this.vertices.push(Math.cos(ang1*(i+1))*Math.sin(ang2*(j+1)), Math.sin(ang1*(i+1))*Math.sin(ang2*(j+1))
			, Math.cos(ang2*(j+1)));	
			n_verts++;

			
			//indices
			this.indices.push(n_verts - 2, n_verts - 3, n_verts-4);
			this.indices.push(n_verts - 2, n_verts - 1, n_verts-3);

			
			//normals
			this.normals.push(Math.cos(ang1*i)*Math.sin(ang2*j), Math.sin(ang1*i)*Math.sin(ang2*j)
			, Math.cos(ang2*j));
			
			this.normals.push(Math.cos(ang1*(i+1))*Math.sin(ang2*j), Math.sin(ang1*(i+1))*Math.sin(ang2*j)
			, Math.cos(ang2*j));
			

			this.normals.push(Math.cos(ang1*i)*Math.sin(ang2*(j+1)), Math.sin(ang1*i)*Math.sin(ang2*(j+1))
			, Math.cos(ang2*(j+1)));
			
		
			this.normals.push(Math.cos(ang1*(i+1))*Math.sin(ang2*(j+1)), Math.sin(ang1*(i+1))*Math.sin(ang2*(j+1))
			, Math.cos(ang2*(j+1)));




			

		}

	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


 MyHemisphere.prototype.draw = function() {
	
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,1,0,0);
		this.base.display();
	this.scene.popMatrix();
	this.display();
 };
