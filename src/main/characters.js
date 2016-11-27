/* eslint-disable */

export const Vec2D = function(x,y){
  this.x = x;
  this.y = y;
  this.dot = function(vector){
    return this.x * vector.x + this.y * vector.y;
  }
};

export const Segment2D = function(x,y,vecx,vecy){
  this.x = x;
  this.y = y;
  this.vecx = vecx;
  this.vecy = vecy;
  this.segLength = function(){
    const dx = this.vecx;
    const dy = this.vecy;
    return Math.sqrt(dx*dx+dy*dy);
  };
  this.project = function(seg_onto){
    const vec = new Vec2D(this.vecx,this.vecy);
    const onto = new Vec2D(seg_onto.vecx,seg_onto.vecy);
    const d = onto.dot(onto);
    if (0 < d){
      const dp = vec.dot(onto);
      const multiplier = dp/d;
      const rx = onto.x * multiplier;
      const ry = onto.y * multiplier;
      return new Vec2D(rx,ry);
    }
    return new Vec2D(0,0);
  }
};

export const Box2D = function(min,max){
  this.min = new Vec2D(min[0],min[1]);
  this.max = new Vec2D(max[0],max[1]);
};

export const offsets = [];
export const charAttributes = [];
export const intangibility = [];
export const frames = [];
export const actionSounds = [];

export const charObject = function(num){
  this.attributes = charAttributes[num];
  this.animations = 0;
  this.hitboxes = hitboxes[num];
};

export const hitboxObject = function(id0,id1,id2,id3){
  this.id0 = id0;
  this.id1 = id1;
  this.id2 = id2;
  this.id3 = id3;
};

export const hitbox = function(offset,size,dmg,angle,kg,bk,sk,type,clank,hG,hA){
  this.offset = offset;
  this.size = size;
  this.dmg = dmg;
  this.angle = angle;
  this.kg = kg;
  this.bk = bk;
  this.sk = sk;
  this.type = type;
  // 0:normal , 1:slash ,2:grab , 3:fire , 4:eletric , 5:sleep, 6:reactOnClank, 7:reflect
  this.clank = clank;
  this.hitGrounded = hG;
  this.hitAirborne = hA;
};

export const hitboxes = [];

export const chars = [];

/*
char id:
0 - marth
1 - jiggs
2 - fox
*/
