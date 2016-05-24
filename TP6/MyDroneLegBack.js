/**
 * MyDroneLegBack
 * @constructor
 */
 function MyDroneLegBack(scene, angle1, angle2, int_rad) {
 	CGFobject.call(this,scene);
	
	this.const_ang1 = angle1 * Math.PI/180;
	this.const_ang2 = angle2 * Math.PI/180;
	this.int_rad = int_rad;

 	this.initBuffers();
 };

 MyDroneLegBack.prototype = Object.create(CGFobject.prototype);
 MyDroneLegBack.prototype.constructor = MyDroneLegBack;

 MyDroneLegBack.prototype.initBuffers = function() {
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
	var ang = Math.PI / 12;
	var n_verts = 0;


	for(var j = 0; j < 12; j++){

		this.vertices.push(Math.sin(this.const_ang1), 
						Math.cos(j*ang) * this.int_rad,
						Math.cos(this.const_ang1)*Math.sin(j*ang) * this.int_rad
						);

		n_verts++;	

		this.vertices.push(Math.sin(this.const_ang2), 
						Math.cos(j*ang) * this.int_rad,
						Math.cos(this.const_ang2)*Math.sin(j*ang) * this.int_rad
						);

		n_verts++;		

		this.vertices.push(Math.sin(this.const_ang1), 
						Math.cos((j+1)*ang) * this.int_rad,
						Math.cos(this.const_ang1)*Math.sin((j+1)*ang) * this.int_rad
						);

		n_verts++;			

		this.vertices.push(Math.sin(this.const_ang2), 
							Math.cos((j+1)*ang) * this.int_rad,
							Math.cos(this.const_ang2)*Math.sin((j+1)*ang) * this.int_rad
							);

		n_verts++;


		this.indices.push(n_verts - 4, n_verts - 3, n_verts - 1);
		this.indices.push(n_verts - 4, n_verts - 1, n_verts - 2);


		this.normals.push(-Math.sin(this.const_ang1), 
						-Math.cos(j*ang),
						-Math.cos(this.const_ang1)*Math.sin(j*ang)
						);

		this.normals.push(-Math.sin(this.const_ang2), 
						-Math.cos(j*ang),
						-Math.cos(this.const_ang2)*Math.sin(j*ang)
						);
	

		this.normals.push(-Math.sin(this.const_ang1), 
						-Math.cos((j+1)*ang),
						-Math.cos(this.const_ang1)*Math.sin((j+1)*ang)
						);
			

		this.normals.push(-Math.sin(this.const_ang2), 
						-Math.cos((j+1)*ang),
						-Math.cos(this.const_ang2)*Math.sin((j+1)*ang)
							);
			
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


 MyDroneLegBack.prototype.draw = function() {
	this.display();
 };
