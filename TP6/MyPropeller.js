/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyPropeller(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

function MyPropeller(scene, minS, maxS, minT, maxT) {
	CGFobject.call(this,scene);
	this.minS = minS || 0;
	this.minT = minT || 0;
	this.maxS = maxS || 1;
	this.maxT = maxT || 1;

	this.initBuffers();
};

MyPropeller.prototype = Object.create(CGFobject.prototype);
MyPropeller.prototype.constructor=MyPropeller;

MyPropeller.prototype.initBuffers = function () {
	this.vertices = [
             -0.25, 0, 0,		//0
			 0.1, 0, 0,		//1
			 0, 1, 0,			//2
			 0, -0.4,0,			//3
			 
			  -0.25, 0, 0,		//4
			 0.1, 0, 0,			//5
			 0, 1, 0,			//6
			 0, -0.4,0,			//7
			];

	this.indices = [
			0, 3, 1,
			0, 1, 2,
			5, 7 , 4,
			5, 4 , 6
        ];

    this.normals = [
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1


    ]

    this.texCoords = [];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
