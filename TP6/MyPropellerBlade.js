/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyPropellerBlade(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyPropellerBlade.prototype = Object.create(CGFobject.prototype);
MyPropellerBlade.prototype.constructor=MyPropellerBlade;

MyPropellerBlade.prototype.initBuffers = function () {
	this.vertices = [
            -0.25, 0,	0,		//0
			 0.1,  0,  	0,		//1
			 0,    1,   0,			//2
			 0,   -0.4, 0,			//3
			 
			-0.25, 0,   0,			//4
			 0.1,  0,   0,			//5
			 0,    1,   0,			//6
			 0,   -0.4, 0,			//7
			];

	this.indices = [
			0, 3, 1,
			0, 1, 2,
			5, 7, 4,
			5, 4, 6
        ];

    this.normals = [
          0, 0,  1,
          0, 0,  1,
          0, 0,  1,
          0, 0,  1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1


    ]

    this.texCoords = [];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

