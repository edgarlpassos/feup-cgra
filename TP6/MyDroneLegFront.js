/**
 * MyDroneLegFront
 * @constructor
 */
 function MyDroneLegFront(scene, angle1, angle2) {
 	CGFobject.call(this,scene);
	
	this.const_ang1 = angle1 * Math.PI/180;
	this.const_ang2 = angle2 * Math.PI/180;
	
	this.base = new MyCircle(this.scene,12);
 	this.initBuffers();
 };

 MyDroneLegFront.prototype = Object.create(CGFobject.prototype);
 MyDroneLegFront.prototype.constructor = MyDroneLegFront;

 MyDroneLegFront.prototype.initBuffers = function() {
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
						Math.cos(j*ang),
						Math.cos(this.const_ang1)*Math.sin(j*ang)
						);

		n_verts++;	

		this.vertices.push(Math.sin(this.const_ang2), 
						Math.cos(j*ang),
						Math.cos(this.const_ang2)*Math.sin(j*ang)
						);

		n_verts++;		

		this.vertices.push(Math.sin(this.const_ang1), 
						Math.cos((j+1)*ang),
						Math.cos(this.const_ang1)*Math.sin((j+1)*ang)
						);

		n_verts++;			

		this.vertices.push(Math.sin(this.const_ang2), 
							Math.cos((j+1)*ang),
							Math.cos(this.const_ang2)*Math.sin((j+1)*ang)
							);

		n_verts++;


		this.indices.push(n_verts - 1, n_verts - 3, n_verts - 4);
		this.indices.push(n_verts - 2, n_verts - 1, n_verts - 4);


		this.normals.push(Math.sin(this.const_ang1), 
						Math.cos(j*ang),
						Math.cos(this.const_ang1)*Math.sin(j*ang)
						);

		this.normals.push(Math.sin(this.const_ang2), 
						Math.cos(j*ang),
						Math.cos(this.const_ang2)*Math.sin(j*ang)
						);
	

		this.normals.push(Math.sin(this.const_ang1), 
						Math.cos((j+1)*ang),
						Math.cos(this.const_ang1)*Math.sin((j+1)*ang)
						);
			

		this.normals.push(Math.sin(this.const_ang2), 
							Math.cos((j+1)*ang),
							Math.cos(this.const_ang2)*Math.sin((j+1)*ang)
							);
			
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


 MyDroneLegFront.prototype.draw = function() {
	
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI,1,0,0);
		this.base.display();
	this.scene.popMatrix();
	this.display();
 };
