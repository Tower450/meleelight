import {Box2D, Vec2D} from "../main/characters";
import {stage, player} from "../main/main";
/* eslint-disable */

export const stages = [{
    box : [new Box2D([-68.4,-9],[68.4,0]),new Box2D([-29.3,-34],[-13.68,-9]),new Box2D([13.68,-34],[29.3,-9]),new Box2D([-13.68,-20],[13.68,-9])],
    platform : [[new Vec2D(-57.6,27.2),new Vec2D(-20,27.2)],[new Vec2D(20,27.2),new Vec2D(57.6,27.2)],[new Vec2D(-18.8,54.4),new Vec2D(18.8,54.4)]],
    ground : [[new Vec2D(-68.4,0),new Vec2D(68.4,0)]],
    ceiling : [[new Vec2D(-68.4,-9),new Vec2D(-29.3,-9)],[new Vec2D(-29.3,-34),new Vec2D(-13.68,-34)],[new Vec2D(13.68,-34),new Vec2D(29.3,-34)],[new Vec2D(29.3,-9),new Vec2D(68.4,-9)],[new Vec2D(-13.68,-20),new Vec2D(13.68,-20)]],
    wallL : [[new Vec2D(-68.4,0),new Vec2D(-68.4,-9)],[new Vec2D(-29.3,-9),new Vec2D(-29.3,-34)],[new Vec2D(13.68,-20),new Vec2D(13.68,-34)]],
    wallR : [[new Vec2D(68.4,0),new Vec2D(68.4,-9)],[new Vec2D(29.3,-9),new Vec2D(29.3,-34)],[new Vec2D(-13.68,-20),new Vec2D(-13.68,-34)]],
    startingPoint : [new Vec2D(-50,50),new Vec2D(50,50),new Vec2D(-25,5),new Vec2D(25,5)],
    startingFace : [1,-1,1,-1],
    respawnPoints : [new Vec2D(-50,50),new Vec2D(50,50),new Vec2D(-25,35),new Vec2D(25,35)],
    respawnFace : [1,-1,1,-1],
    blastzone : new Box2D([-224,-108.8],[224,200]),
    ledge : [[0,0],[0,1]],
    ledgePos : [new Vec2D(-68.4,0),new Vec2D(68.4,0)],
    scale : 4.5,
    offset : [600,480],
    movingPlat : -1,
    movingPlatforms : function(){}
  },{
    box : [new Box2D([-56,-100],[56,0])],
    platform : [[new Vec2D(-103.6,-33.25),new Vec2D(-91.7,-33.25)],[new Vec2D(-59.5,23.45),new Vec2D(-28,23.45)],[new Vec2D(28,23.45),new Vec2D(59.5,23.45)],[new Vec2D(-15.75,42),new Vec2D(15.75,42)]],
    ground : [[new Vec2D(-56,0),new Vec2D(56,0)]],
    ceiling : [[new Vec2D(-56,-100),new Vec2D(56,-100)]],
    wallL : [[new Vec2D(-56,0),new Vec2D(-56,-100)]],
    wallR : [[new Vec2D(56,0),new Vec2D(56,-100)]],
    startingPoint : [new Vec2D(-42,30),new Vec2D(42,30),new Vec2D(-15,15),new Vec2D(15,15)],
    startingFace : [1,-1,1,-1],
    respawnPoints : [new Vec2D(-42,30),new Vec2D(42,30),new Vec2D(-20,30),new Vec2D(-20,30)],
    respawnFace : [1,-1,1,-1],
    blastzone : new Box2D([-175.7,-91],[173.6,168]),
    ledge : [[0,0],[0,1]],
    ledgePos : [new Vec2D(-56,0),new Vec2D(56,0)],
    scale : 5,
    offset : [600,430],
    movingPlat : 0,
    movingPlatforms : function(){
      var plat = stage.platform[0];
      var move = [0,0];
      if (plat[0].x <= -103.6 && plat[0].y > -33.25){
        plat[0].x = -103.6;
        plat[1].x = -91.7;
        plat[0].y -= 0.354845;
        plat[1].y -= 0.354845;
        move = [0,-0.354845];
      }
      if (plat[0].x >= 91.35 && plat[0].y < -13.65){
        plat[0].x = 91.35;
        plat[1].x = 103.25;
        plat[0].y += 0.354845;
        plat[1].y += 0.354845;
        move = [0,0.354845];
      }
      if (plat[0].y <= -33.25){
        plat[0].y = -33.25;
        plat[1].y = -33.25;
        plat[0].x += 0.354845;
        plat[1].x += 0.354845;
        move = [0.354845,0];
      }
      if (plat[0].y >= -13.65){
        plat[0].y = -13.65;
        plat[1].y = -13.65;
        plat[0].x -= 0.354845;
        plat[1].x -= 0.354845;
        move = [-0.354845,0];
      }

      for (var j=0;j<4;j++){
        if (player[j].phys.onSurface[0] == 1 && player[j].phys.onSurface[1] == 0 && player[j].phys.grounded){
          player[j].phys.pos.x += move[0];
          //player[j].phys.pos.y += move[1];
          player[j].phys.pos.y = plat[0].y;
        }
      }
    }
  },{
    box : [new Box2D([-87.7,-17.75],[87.7,0]),new Box2D([-62,-38],[62,-17.75]),new Box2D([-15,-112],[15,-38])],
    platform : [[new Vec2D(-55,25),new Vec2D(-25,25)],[new Vec2D(25,25),new Vec2D(55,25)]],
    ground : [[new Vec2D(-87.7,0),new Vec2D(87.7,0)]],
    ceiling : [[new Vec2D(-87.7,-17.75),new Vec2D(-62,-17.75)],[new Vec2D(-62,-38),new Vec2D(-15,-38)],[new Vec2D(-15,-112),new Vec2D(15,-112)],[new Vec2D(62,-17.75),new Vec2D(87.7,-17.75)],[new Vec2D(15,-38),new Vec2D(62,-38)]],
    wallL : [[new Vec2D(-87.7,0),new Vec2D(-87.7,-17.75)],[new Vec2D(-62,-17.75),new Vec2D(-62,-38)],[new Vec2D(-15,-38),new Vec2D(-15,-112)]],
    wallR : [[new Vec2D(87.7,0),new Vec2D(87.7,-17.75)],[new Vec2D(62,-17.75),new Vec2D(62,-38)],[new Vec2D(15,-38),new Vec2D(15,-112)]],
    startingPoint : [new Vec2D(-45,44),new Vec2D(45,44),new Vec2D(-25,44),new Vec2D(25,44)],
    startingFace : [1,-1,1,-1],
    respawnPoints : [new Vec2D(-45,44),new Vec2D(45,44),new Vec2D(-25,44),new Vec2D(25,44)],
    respawnFace : [1,-1,1,-1],
    blastzone : new Box2D([-230,-111],[230,180]),
    ledge : [[0,0],[0,1]],
    ledgePos : [new Vec2D(-87.7,0),(new Vec2D(87.7,0))],
    scale : 4.2,
    offset : [600,500],
    movingPlat : -1,
    movingPlatforms : function(){}
  },{
    box : [new Box2D([-77.27,-36],[77.27,0])],
    platform : [[new Vec2D(-61.393,30.142),new Vec2D(-31.725,30.142)],[new Vec2D(-19.018,51.425),new Vec2D(19.017,51.425)],[new Vec2D(31.704,30.243),new Vec2D(63.075,30.243)]],
    ground : [[new Vec2D(-77.27,0),new Vec2D(77.27,0)]],
    ceiling : [[new Vec2D(-77.27,-36),new Vec2D(77.27,-36)]],
    wallL : [[new Vec2D(-77.27,0),new Vec2D(-77.27,-36)]],
    wallR : [[new Vec2D(77.27,0),new Vec2D(77.27,-36)]],
    startingPoint : [new Vec2D(-60,50),new Vec2D(60,50),new Vec2D(-40,50),new Vec2D(40,50)],
    startingFace : [1,-1,1,-1],
    respawnPoints : [new Vec2D(-60,50),new Vec2D(60,50),new Vec2D(-40,50),new Vec2D(40,50)],
    respawnFace : [1,-1,1,-1],
    blastzone : new Box2D([-255,-123],[255,250]),
    ledge : [[0,0],[0,1]],
    ledgePos : [new Vec2D(-77.27,0),new Vec2D(77.27,0)],
    scale : 3.5,
    offset : [600,500],
    movingPlat : -1,
    movingPlatforms : function(){}
  }
];

export const customTargetStages = [];

export const targetStages = [
{startingPoint:new Vec2D(0.0,0.0),box:[new Box2D([-150.6,70.2],[-16.1,88.2]),new Box2D([-56.6,-21.8],[55.6,-14.0]),new Box2D([114.7,-78.7],[143.4,17.0]),new Box2D([82.3,-78.8],[143.5,-20.6]),new Box2D([-172.0,-118.1],[-159.2,-13.6]),new Box2D([-133.1,-48.8],[-111.6,-27.1]),new Box2D([37.6,-78.7],[143.4,-50.9])],ground:[[new Vec2D(-150.6,88.2),new Vec2D(-16.1,88.2)],[new Vec2D(-56.6,-14.0),new Vec2D(55.6,-14.0)],[new Vec2D(114.7,17.0),new Vec2D(143.4,17.0)],[new Vec2D(82.3,-20.6),new Vec2D(143.5,-20.6)],[new Vec2D(-172.0,-13.6),new Vec2D(-159.2,-13.6)],[new Vec2D(-133.1,-27.1),new Vec2D(-111.6,-27.1)],[new Vec2D(37.6,-50.9),new Vec2D(143.4,-50.9)]],ceiling:[[new Vec2D(-150.6,70.2),new Vec2D(-16.1,70.2)],[new Vec2D(-56.6,-21.8),new Vec2D(55.6,-21.8)],[new Vec2D(114.7,-78.7),new Vec2D(143.4,-78.7)],[new Vec2D(82.3,-78.8),new Vec2D(143.5,-78.8)],[new Vec2D(-172.0,-118.1),new Vec2D(-159.2,-118.1)],[new Vec2D(-133.1,-48.8),new Vec2D(-111.6,-48.8)],[new Vec2D(37.6,-78.7),new Vec2D(143.4,-78.7)]],wallL:[[new Vec2D(-150.6,88.2),new Vec2D(-150.6,70.2)],[new Vec2D(-56.6,-14.0),new Vec2D(-56.6,-21.8)],[new Vec2D(114.7,17.0),new Vec2D(114.7,-78.7)],[new Vec2D(82.3,-20.6),new Vec2D(82.3,-78.8)],[new Vec2D(-172.0,-13.6),new Vec2D(-172.0,-118.1)],[new Vec2D(-133.1,-27.1),new Vec2D(-133.1,-48.8)],[new Vec2D(37.6,-50.9),new Vec2D(37.6,-78.7)]],wallR:[[new Vec2D(-16.1,88.2),new Vec2D(-16.1,70.2)],[new Vec2D(55.6,-14.0),new Vec2D(55.6,-21.8)],[new Vec2D(143.4,17.0),new Vec2D(143.4,-78.7)],[new Vec2D(143.5,-20.6),new Vec2D(143.5,-78.8)],[new Vec2D(-159.2,-13.6),new Vec2D(-159.2,-118.1)],[new Vec2D(-111.6,-27.1),new Vec2D(-111.6,-48.8)],[new Vec2D(143.4,-50.9),new Vec2D(143.4,-78.7)]],platform:[[new Vec2D(143.4,-21.5),new Vec2D(169.5,-21.5)],[new Vec2D(143.4,-50.6),new Vec2D(168.6,-50.6)],[new Vec2D(-95.2,-63.9),new Vec2D(-5.3,-63.9)],[new Vec2D(-140.1,29.9),new Vec2D(-84.6,29.9)],[new Vec2D(-193.1,70.1),new Vec2D(-149.5,70.1)]],ledge:[[3.0,0.0],[2.0,0.0],[4.0,1.0]],target:[new Vec2D(-48.6,0.7),new Vec2D(48.4,0.7),new Vec2D(157.0,-66.3),new Vec2D(-15.1,-43.2),new Vec2D(-186.4,-87.0),new Vec2D(-113.2,47.7),new Vec2D(-128.9,103.6),new Vec2D(53.1,103.6),new Vec2D(154.0,-7.2),new Vec2D(-51.9,103.9)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-159.5,-73.8),box:[new Box2D([-200.0,-103.0],[-48.9,-88.3]),new Box2D([-200.0,-51.3],[-49.8,-36.8]),new Box2D([-145.4,-37.0],[-111.6,20.8]),new Box2D([-76.0,6.7],[10.4,19.9]),new Box2D([141.3,-44.6],[155.8,60.9]),new Box2D([181.6,-43.5],[195.2,61.0])],ground:[[new Vec2D(-200.0,-88.3),new Vec2D(-48.9,-88.3)],[new Vec2D(-200.0,-36.8),new Vec2D(-49.8,-36.8)],[new Vec2D(-145.4,20.8),new Vec2D(-111.6,20.8)],[new Vec2D(-76.0,19.9),new Vec2D(10.4,19.9)],[new Vec2D(141.3,60.9),new Vec2D(155.8,60.9)],[new Vec2D(181.6,61.0),new Vec2D(195.2,61.0)]],ceiling:[[new Vec2D(-200.0,-103.0),new Vec2D(-48.9,-103.0)],[new Vec2D(-200.0,-51.3),new Vec2D(-49.8,-51.3)],[new Vec2D(-145.4,-37.0),new Vec2D(-111.6,-37.0)],[new Vec2D(-76.0,6.7),new Vec2D(10.4,6.7)],[new Vec2D(141.3,-44.6),new Vec2D(155.8,-44.6)],[new Vec2D(181.6,-43.5),new Vec2D(195.2,-43.5)]],wallL:[[new Vec2D(-200.0,-88.3),new Vec2D(-200.0,-103.0)],[new Vec2D(-200.0,-36.8),new Vec2D(-200.0,-51.3)],[new Vec2D(-145.4,20.8),new Vec2D(-145.4,-37.0)],[new Vec2D(-76.0,19.9),new Vec2D(-76.0,6.7)],[new Vec2D(141.3,60.9),new Vec2D(141.3,-44.6)],[new Vec2D(181.6,61.0),new Vec2D(181.6,-43.5)]],wallR:[[new Vec2D(-48.9,-88.3),new Vec2D(-48.9,-103.0)],[new Vec2D(-49.8,-36.8),new Vec2D(-49.8,-51.3)],[new Vec2D(-111.6,20.8),new Vec2D(-111.6,-37.0)],[new Vec2D(10.4,19.9),new Vec2D(10.4,6.7)],[new Vec2D(155.8,60.9),new Vec2D(155.8,-44.6)],[new Vec2D(195.2,61.0),new Vec2D(195.2,-43.5)]],platform:[[new Vec2D(-43.6,-69.7),new Vec2D(-0.3,-69.7)],[new Vec2D(-139.2,47.2),new Vec2D(-118.0,47.2)],[new Vec2D(-134.8,72.0),new Vec2D(-122.9,72.0)],[new Vec2D(12.9,33.6),new Vec2D(48.3,33.6)],[new Vec2D(53.3,39.2),new Vec2D(90.9,39.2)],[new Vec2D(95.6,32.9),new Vec2D(134.6,32.9)],[new Vec2D(155.6,82.9),new Vec2D(182.9,82.9)]],ledge:[[2.0,1.0],[2.0,0.0]],target:[new Vec2D(-185.1,-75.1),new Vec2D(-178.3,-19.2),new Vec2D(-129.0,95.2),new Vec2D(72.2,22.7),new Vec2D(70.7,76.4),new Vec2D(168.4,5.5),new Vec2D(185.2,114.2),new Vec2D(170.1,-97.0),new Vec2D(-25.3,-44.8),new Vec2D(-67.6,28.9)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-179.7,-74.4),box:[new Box2D([-150.2,-126.3],[-115.8,39.8]),new Box2D([-18.6,-128.6],[16.7,36.5]),new Box2D([109.7,-143.2],[144.0,36.4]),new Box2D([-25.2,71.3],[-11.9,129.1]),new Box2D([11.4,70.6],[24.1,163.1])],ground:[[new Vec2D(-150.2,39.8),new Vec2D(-115.8,39.8)],[new Vec2D(-18.6,36.5),new Vec2D(16.7,36.5)],[new Vec2D(109.7,36.4),new Vec2D(144.0,36.4)],[new Vec2D(-25.2,129.1),new Vec2D(-11.9,129.1)],[new Vec2D(11.4,163.1),new Vec2D(24.1,163.1)]],ceiling:[[new Vec2D(-150.2,-126.3),new Vec2D(-115.8,-126.3)],[new Vec2D(-18.6,-128.6),new Vec2D(16.7,-128.6)],[new Vec2D(109.7,-143.2),new Vec2D(144.0,-143.2)],[new Vec2D(-25.2,71.3),new Vec2D(-11.9,71.3)],[new Vec2D(11.4,70.6),new Vec2D(24.1,70.6)]],wallL:[[new Vec2D(-150.2,39.8),new Vec2D(-150.2,-126.3)],[new Vec2D(-18.6,36.5),new Vec2D(-18.6,-128.6)],[new Vec2D(109.7,36.4),new Vec2D(109.7,-143.2)],[new Vec2D(-25.2,129.1),new Vec2D(-25.2,71.3)],[new Vec2D(11.4,163.1),new Vec2D(11.4,70.6)]],wallR:[[new Vec2D(-115.8,39.8),new Vec2D(-115.8,-126.3)],[new Vec2D(16.7,36.5),new Vec2D(16.7,-128.6)],[new Vec2D(144.0,36.4),new Vec2D(144.0,-143.2)],[new Vec2D(-11.9,129.1),new Vec2D(-11.9,71.3)],[new Vec2D(24.1,163.1),new Vec2D(24.1,70.6)]],platform:[[new Vec2D(-181.1,-53.9),new Vec2D(-82.6,-53.9)],[new Vec2D(-170.4,-20.2),new Vec2D(-92.7,-20.2)],[new Vec2D(-187.3,-84.5),new Vec2D(-75.2,-84.5)],[new Vec2D(-158.9,8.0),new Vec2D(-106.5,8.0)],[new Vec2D(-148.1,65.9),new Vec2D(-118.9,65.9)],[new Vec2D(-141.2,90.4),new Vec2D(-126.6,90.4)],[new Vec2D(-29.3,-85.5),new Vec2D(27.4,-85.5)],[new Vec2D(-36.2,-53.6),new Vec2D(34.4,-53.6)],[new Vec2D(-47.9,-20.7),new Vec2D(46.0,-20.7)],[new Vec2D(70.6,-86.6),new Vec2D(184.7,-86.6)],[new Vec2D(80.8,-53.8),new Vec2D(174.5,-53.8)],[new Vec2D(89.8,-21.3),new Vec2D(165.1,-21.3)],[new Vec2D(100.8,8.9),new Vec2D(152.9,8.9)],[new Vec2D(118.8,86.3),new Vec2D(133.4,86.3)],[new Vec2D(111.7,64.2),new Vec2D(141.6,64.2)],[new Vec2D(-58.9,9.6),new Vec2D(55.7,9.6)]],ledge:[[0.0,1.0],[0.0,0.0],[1.0,0.0],[1.0,1.0],[2.0,1.0],[2.0,0.0]],target:[new Vec2D(-133.7,111.2),new Vec2D(-103.1,-104.0),new Vec2D(-31.8,-36.6),new Vec2D(-0.6,125.0),new Vec2D(29.8,-73.3),new Vec2D(93.3,-38.0),new Vec2D(-1.6,53.3),new Vec2D(125.8,105.9),new Vec2D(162.0,-38.1),new Vec2D(160.2,-107.7)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-131.8,61.4),box:[new Box2D([-154.9,-125.0],[-108.6,47.3]),new Box2D([-67.6,-46.8],[-42.4,83.0]),new Box2D([6.8,-47.5],[29.8,28.6]),new Box2D([30.0,7.9],[89.7,28.6]),new Box2D([77.5,-131.5],[100.2,-43.3]),new Box2D([136.4,-125.0],[156.7,-67.2])],ground:[[new Vec2D(-154.9,47.3),new Vec2D(-108.6,47.3)],[new Vec2D(-67.6,83.0),new Vec2D(-42.4,83.0)],[new Vec2D(6.8,28.6),new Vec2D(29.8,28.6)],[new Vec2D(30.0,28.6),new Vec2D(89.7,28.6)],[new Vec2D(77.5,-43.3),new Vec2D(100.2,-43.3)],[new Vec2D(136.4,-67.2),new Vec2D(156.7,-67.2)]],ceiling:[[new Vec2D(-154.9,-125.0),new Vec2D(-108.6,-125.0)],[new Vec2D(-67.6,-46.8),new Vec2D(-42.4,-46.8)],[new Vec2D(6.8,-47.5),new Vec2D(29.8,-47.5)],[new Vec2D(30.0,7.9),new Vec2D(89.7,7.9)],[new Vec2D(77.5,-131.5),new Vec2D(100.2,-131.5)],[new Vec2D(136.4,-125.0),new Vec2D(156.7,-125.0)]],wallL:[[new Vec2D(-154.9,47.3),new Vec2D(-154.9,-125.0)],[new Vec2D(-67.6,83.0),new Vec2D(-67.6,-46.8)],[new Vec2D(6.8,28.6),new Vec2D(6.8,-47.5)],[new Vec2D(30.0,28.6),new Vec2D(30.0,7.9)],[new Vec2D(77.5,-43.3),new Vec2D(77.5,-131.5)],[new Vec2D(136.4,-67.2),new Vec2D(136.4,-125.0)]],wallR:[[new Vec2D(-108.6,47.3),new Vec2D(-108.6,-125.0)],[new Vec2D(-42.4,83.0),new Vec2D(-42.4,-46.8)],[new Vec2D(29.8,28.6),new Vec2D(29.8,-47.5)],[new Vec2D(89.7,28.6),new Vec2D(89.7,7.9)],[new Vec2D(100.2,-43.3),new Vec2D(100.2,-131.5)],[new Vec2D(156.7,-67.2),new Vec2D(156.7,-125.0)]],platform:[[new Vec2D(-108.4,9.1),new Vec2D(-67.6,9.1)],[new Vec2D(-108.5,-13.1),new Vec2D(-67.6,-13.1)],[new Vec2D(-108.6,-40.1),new Vec2D(-67.5,-40.1)],[new Vec2D(-108.2,-90.0),new Vec2D(-40.9,-90.0)],[new Vec2D(5.8,-90.0),new Vec2D(66.9,-90.0)],[new Vec2D(-30.1,-57.8),new Vec2D(-3.8,-57.8)],[new Vec2D(30.0,-18.0),new Vec2D(64.9,-18.0)],[new Vec2D(110.3,41.8),new Vec2D(143.4,41.8)],[new Vec2D(150.3,67.5),new Vec2D(181.2,67.5)],[new Vec2D(100.1,-111.1),new Vec2D(132.8,-111.1)]],ledge:[[1.0,1.0],[1.0,0.0],[5.0,1.0],[4.0,1.0],[4.0,0.0],[3.0,1.0],[2.0,0.0]],target:[new Vec2D(-88.3,-26.7),new Vec2D(-16.4,-69.7),new Vec2D(-16.4,5.1),new Vec2D(-30.0,73.8),new Vec2D(45.4,-5.4),new Vec2D(75.7,41.9),new Vec2D(188.2,95.9),new Vec2D(188.2,-10.3),new Vec2D(188.2,-102.0),new Vec2D(111.3,-91.7)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(0.0,0.0),box:[new Box2D([-41.2,-50.3],[57.3,-37.8]),new Box2D([136.2,-50.5],[149.5,50.7]),new Box2D([57.0,-69.1],[70.1,51.1]),new Box2D([-41.0,-100.5],[-13.8,-78.3]),new Box2D([137.4,-125.0],[200.0,-75.5]),new Box2D([-150.7,-101.6],[-93.3,-78.2]),new Box2D([-200.6,33.6],[-104.8,52.9]),new Box2D([-200.0,-101.3],[-151.2,33.3])],ground:[[new Vec2D(-41.2,-37.8),new Vec2D(57.3,-37.8)],[new Vec2D(136.2,50.7),new Vec2D(149.5,50.7)],[new Vec2D(57.0,51.1),new Vec2D(70.1,51.1)],[new Vec2D(-41.0,-78.3),new Vec2D(-13.8,-78.3)],[new Vec2D(137.4,-75.5),new Vec2D(200.0,-75.5)],[new Vec2D(-150.7,-78.2),new Vec2D(-93.3,-78.2)],[new Vec2D(-200.6,52.9),new Vec2D(-104.8,52.9)],[new Vec2D(-200.0,33.3),new Vec2D(-151.2,33.3)]],ceiling:[[new Vec2D(-41.2,-50.3),new Vec2D(57.3,-50.3)],[new Vec2D(136.2,-50.5),new Vec2D(149.5,-50.5)],[new Vec2D(57.0,-69.1),new Vec2D(70.1,-69.1)],[new Vec2D(-41.0,-100.5),new Vec2D(-13.8,-100.5)],[new Vec2D(137.4,-125.0),new Vec2D(200.0,-125.0)],[new Vec2D(-150.7,-101.6),new Vec2D(-93.3,-101.6)],[new Vec2D(-200.6,33.6),new Vec2D(-104.8,33.6)],[new Vec2D(-200.0,-101.3),new Vec2D(-151.2,-101.3)]],wallL:[[new Vec2D(-41.2,-37.8),new Vec2D(-41.2,-50.3)],[new Vec2D(136.2,50.7),new Vec2D(136.2,-50.5)],[new Vec2D(57.0,51.1),new Vec2D(57.0,-69.1)],[new Vec2D(-41.0,-78.3),new Vec2D(-41.0,-100.5)],[new Vec2D(137.4,-75.5),new Vec2D(137.4,-125.0)],[new Vec2D(-150.7,-78.2),new Vec2D(-150.7,-101.6)],[new Vec2D(-200.6,52.9),new Vec2D(-200.6,33.6)],[new Vec2D(-200.0,33.3),new Vec2D(-200.0,-101.3)]],wallR:[[new Vec2D(57.3,-37.8),new Vec2D(57.3,-50.3)],[new Vec2D(149.5,50.7),new Vec2D(149.5,-50.5)],[new Vec2D(70.1,51.1),new Vec2D(70.1,-69.1)],[new Vec2D(-13.8,-78.3),new Vec2D(-13.8,-100.5)],[new Vec2D(200.0,-75.5),new Vec2D(200.0,-125.0)],[new Vec2D(-93.3,-78.2),new Vec2D(-93.3,-101.6)],[new Vec2D(-104.8,52.9),new Vec2D(-104.8,33.6)],[new Vec2D(-151.2,33.3),new Vec2D(-151.2,-101.3)]],platform:[[new Vec2D(-17.9,-13.6),new Vec2D(16.6,-13.6)],[new Vec2D(36.8,18.5),new Vec2D(57.1,18.5)],[new Vec2D(78.1,-97.6),new Vec2D(95.5,-97.6)],[new Vec2D(28.4,-97.6),new Vec2D(43.0,-97.6)],[new Vec2D(38.1,-69.3),new Vec2D(57.4,-69.3)],[new Vec2D(186.1,-50.6),new Vec2D(200.0,-50.6)],[new Vec2D(148.9,-6.9),new Vec2D(164.3,-6.9)],[new Vec2D(186.4,39.0),new Vec2D(200.1,39.0)],[new Vec2D(120.5,50.6),new Vec2D(136.7,50.6)],[new Vec2D(-65.7,78.6),new Vec2D(-41.2,78.6)],[new Vec2D(-3.9,78.6),new Vec2D(22.6,78.6)]],ledge:[[0.0,0.0],[1.0,1.0],[5.0,1.0],[6.0,1.0],[3.0,0.0],[3.0,1.0],[4.0,0.0],[2.0,0.0]],target:[new Vec2D(47.1,36.1),new Vec2D(47.5,-59.0),new Vec2D(191.0,49.6),new Vec2D(190.9,-63.2),new Vec2D(90.9,-6.9),new Vec2D(116.9,-16.4),new Vec2D(-125.8,-59.5),new Vec2D(-151.9,65.5),new Vec2D(-121.9,76.0),new Vec2D(-22.9,92.1)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(0.0,0.0),box:[new Box2D([-24.4,-51.1],[113.3,-37.3]),new Box2D([45.9,-14.6],[113.2,-3.7]),new Box2D([45.9,-3.7],[56.5,45.4]),new Box2D([-25.0,-78.3],[56.5,-73.7]),new Box2D([-23.2,32.9],[45.6,45.1]),new Box2D([75.3,69.4],[129.6,74.5]),new Box2D([99.5,30.7],[107.2,69.4]),new Box2D([-120.9,-125.0],[-105.2,-29.4]),new Box2D([-119.8,33.0],[-104.8,45.4]),new Box2D([-151.4,-45.4],[-120.8,-29.4])],ground:[[new Vec2D(-24.4,-37.3),new Vec2D(113.3,-37.3)],[new Vec2D(45.9,-3.7),new Vec2D(113.2,-3.7)],[new Vec2D(45.9,45.4),new Vec2D(56.5,45.4)],[new Vec2D(-25.0,-73.7),new Vec2D(56.5,-73.7)],[new Vec2D(-23.2,45.1),new Vec2D(45.6,45.1)],[new Vec2D(75.3,74.5),new Vec2D(129.6,74.5)],[new Vec2D(99.5,69.4),new Vec2D(107.2,69.4)],[new Vec2D(-120.9,-29.4),new Vec2D(-105.2,-29.4)],[new Vec2D(-119.8,45.4),new Vec2D(-104.8,45.4)],[new Vec2D(-151.4,-29.4),new Vec2D(-120.8,-29.4)]],ceiling:[[new Vec2D(-24.4,-51.1),new Vec2D(113.3,-51.1)],[new Vec2D(45.9,-14.6),new Vec2D(113.2,-14.6)],[new Vec2D(45.9,-3.7),new Vec2D(56.5,-3.7)],[new Vec2D(-25.0,-78.3),new Vec2D(56.5,-78.3)],[new Vec2D(-23.2,32.9),new Vec2D(45.6,32.9)],[new Vec2D(75.3,69.4),new Vec2D(129.6,69.4)],[new Vec2D(99.5,30.7),new Vec2D(107.2,30.7)],[new Vec2D(-120.9,-125.0),new Vec2D(-105.2,-125.0)],[new Vec2D(-119.8,33.0),new Vec2D(-104.8,33.0)],[new Vec2D(-151.4,-45.4),new Vec2D(-120.8,-45.4)]],wallL:[[new Vec2D(-24.4,-37.3),new Vec2D(-24.4,-51.1)],[new Vec2D(45.9,-3.7),new Vec2D(45.9,-14.6)],[new Vec2D(45.9,45.4),new Vec2D(45.9,-3.7)],[new Vec2D(-25.0,-73.7),new Vec2D(-25.0,-78.3)],[new Vec2D(-23.2,45.1),new Vec2D(-23.2,32.9)],[new Vec2D(75.3,74.5),new Vec2D(75.3,69.4)],[new Vec2D(99.5,69.4),new Vec2D(99.5,30.7)],[new Vec2D(-120.9,-29.4),new Vec2D(-120.9,-125.0)],[new Vec2D(-119.8,45.4),new Vec2D(-119.8,33.0)],[new Vec2D(-151.4,-29.4),new Vec2D(-151.4,-45.4)]],wallR:[[new Vec2D(113.3,-37.3),new Vec2D(113.3,-51.1)],[new Vec2D(113.2,-3.7),new Vec2D(113.2,-14.6)],[new Vec2D(56.5,45.4),new Vec2D(56.5,-3.7)],[new Vec2D(56.5,-73.7),new Vec2D(56.5,-78.3)],[new Vec2D(45.6,45.1),new Vec2D(45.6,32.9)],[new Vec2D(129.6,74.5),new Vec2D(129.6,69.4)],[new Vec2D(107.2,69.4),new Vec2D(107.2,30.7)],[new Vec2D(-105.2,-29.4),new Vec2D(-105.2,-125.0)],[new Vec2D(-104.8,45.4),new Vec2D(-104.8,33.0)],[new Vec2D(-120.8,-29.4),new Vec2D(-120.8,-45.4)]],platform:[[new Vec2D(131.3,-26.0),new Vec2D(186.5,-26.0)],[new Vec2D(-71.4,-59.2),new Vec2D(-50.7,-59.2)],[new Vec2D(-97.0,-37.3),new Vec2D(-77.6,-37.3)],[new Vec2D(-121.8,-15.6),new Vec2D(-104.0,-15.6)],[new Vec2D(-16.0,-14.6),new Vec2D(14.5,-14.6)],[new Vec2D(141.7,10.2),new Vec2D(175.2,10.2)],[new Vec2D(151.9,40.7),new Vec2D(166.7,40.7)],[new Vec2D(-93.4,6.7),new Vec2D(-74.1,6.7)],[new Vec2D(-66.2,27.8),new Vec2D(-46.5,27.8)]],ledge:[[3.0,1.0],[0.0,0.0],[3.0,0.0],[0.0,1.0],[1.0,1.0],[2.0,1.0],[4.0,0.0]],target:[new Vec2D(103.3,-66.6),new Vec2D(74.1,-78.3),new Vec2D(-26.6,-62.4),new Vec2D(159.0,25.2),new Vec2D(118.6,58.8),new Vec2D(86.7,58.8),new Vec2D(-112.7,19.4),new Vec2D(-134.1,-71.6),new Vec2D(-44.5,56.0)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-122.9,51.9),box:[new Box2D([-153.4,24.8],[-6.1,36.5]),new Box2D([33.3,25.5],[128.0,36.5]),new Box2D([-90.1,5.1],[-69.3,24.8]),new Box2D([-137.3,-77.7],[-126.5,24.7]),new Box2D([-156.8,-125.0],[-109.6,-115.7]),new Box2D([142.2,-62.3],[201.2,-51.7]),new Box2D([183.5,-51.3],[200.0,37.1]),new Box2D([-64.6,-72.0],[-55.2,-29.1]),new Box2D([-64.0,-28.9],[-7.7,-19.3]),new Box2D([-55.2,-71.8],[-8.9,-63.5])],ground:[[new Vec2D(-153.4,36.5),new Vec2D(-6.1,36.5)],[new Vec2D(33.3,36.5),new Vec2D(128.0,36.5)],[new Vec2D(-90.1,24.8),new Vec2D(-69.3,24.8)],[new Vec2D(-137.3,24.7),new Vec2D(-126.5,24.7)],[new Vec2D(-156.8,-115.7),new Vec2D(-109.6,-115.7)],[new Vec2D(142.2,-51.7),new Vec2D(201.2,-51.7)],[new Vec2D(183.5,37.1),new Vec2D(200.0,37.1)],[new Vec2D(-64.6,-29.1),new Vec2D(-55.2,-29.1)],[new Vec2D(-64.0,-19.3),new Vec2D(-7.7,-19.3)],[new Vec2D(-55.2,-63.5),new Vec2D(-8.9,-63.5)]],ceiling:[[new Vec2D(-153.4,24.8),new Vec2D(-6.1,24.8)],[new Vec2D(33.3,25.5),new Vec2D(128.0,25.5)],[new Vec2D(-90.1,5.1),new Vec2D(-69.3,5.1)],[new Vec2D(-137.3,-77.7),new Vec2D(-126.5,-77.7)],[new Vec2D(-156.8,-125.0),new Vec2D(-109.6,-125.0)],[new Vec2D(142.2,-62.3),new Vec2D(201.2,-62.3)],[new Vec2D(183.5,-51.3),new Vec2D(200.0,-51.3)],[new Vec2D(-64.6,-72.0),new Vec2D(-55.2,-72.0)],[new Vec2D(-64.0,-28.9),new Vec2D(-7.7,-28.9)],[new Vec2D(-55.2,-71.8),new Vec2D(-8.9,-71.8)]],wallL:[[new Vec2D(-153.4,36.5),new Vec2D(-153.4,24.8)],[new Vec2D(33.3,36.5),new Vec2D(33.3,25.5)],[new Vec2D(-90.1,24.8),new Vec2D(-90.1,5.1)],[new Vec2D(-137.3,24.7),new Vec2D(-137.3,-77.7)],[new Vec2D(-156.8,-115.7),new Vec2D(-156.8,-125.0)],[new Vec2D(142.2,-51.7),new Vec2D(142.2,-62.3)],[new Vec2D(183.5,37.1),new Vec2D(183.5,-51.3)],[new Vec2D(-64.6,-29.1),new Vec2D(-64.6,-72.0)],[new Vec2D(-64.0,-19.3),new Vec2D(-64.0,-28.9)],[new Vec2D(-55.2,-63.5),new Vec2D(-55.2,-71.8)]],wallR:[[new Vec2D(-6.1,36.5),new Vec2D(-6.1,24.8)],[new Vec2D(128.0,36.5),new Vec2D(128.0,25.5)],[new Vec2D(-69.3,24.8),new Vec2D(-69.3,5.1)],[new Vec2D(-126.5,24.7),new Vec2D(-126.5,-77.7)],[new Vec2D(-109.6,-115.7),new Vec2D(-109.6,-125.0)],[new Vec2D(201.2,-51.7),new Vec2D(201.2,-62.3)],[new Vec2D(200.0,37.1),new Vec2D(200.0,-51.3)],[new Vec2D(-55.2,-29.1),new Vec2D(-55.2,-72.0)],[new Vec2D(-7.7,-19.3),new Vec2D(-7.7,-28.9)],[new Vec2D(-8.9,-63.5),new Vec2D(-8.9,-71.8)]],platform:[[new Vec2D(-69.7,65.3),new Vec2D(-38.2,65.3)],[new Vec2D(64.1,65.3),new Vec2D(101.3,65.3)],[new Vec2D(161.0,-4.7),new Vec2D(183.5,-4.7)],[new Vec2D(120.1,-52.0),new Vec2D(142.9,-52.0)],[new Vec2D(-104.4,-67.2),new Vec2D(-83.0,-67.2)],[new Vec2D(-157.2,-77.3),new Vec2D(-137.0,-77.3)],[new Vec2D(-57.1,-115.8),new Vec2D(-23.2,-115.8)]],ledge:[[0.0,1.0],[1.0,0.0],[1.0,1.0],[6.0,0.0],[0.0,0.0],[4.0,0.0],[4.0,1.0],[9.0,1.0],[8.0,1.0],[8.0,0.0]],target:[new Vec2D(-109.1,10.0),new Vec2D(171.0,30.7),new Vec2D(152.3,-29.9),new Vec2D(96.4,-44.3),new Vec2D(55.3,-71.4),new Vec2D(14.7,-97.3),new Vec2D(-28.9,-45.5),new Vec2D(-53.5,73.9),new Vec2D(13.3,31.8),new Vec2D(-152.2,5.7)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-61.9,-28.7),box:[new Box2D([-1.0,-50.3],[9.3,82.9]),new Box2D([-79.7,14.7],[-50.5,22.4]),new Box2D([-78.1,64.2],[-49.1,71.2]),new Box2D([43.5,74.2],[110.9,82.6]),new Box2D([76.7,-50.9],[146.9,7.5]),new Box2D([75.5,-125.0],[145.7,-103.9]),new Box2D([-82.9,-125.0],[10.6,-103.9]),new Box2D([-200.0,-125.0],[-176.6,125.0]),new Box2D([-86.8,-50.2],[-35.8,-41.6])],ground:[[new Vec2D(-1.0,82.9),new Vec2D(9.3,82.9)],[new Vec2D(-79.7,22.4),new Vec2D(-50.5,22.4)],[new Vec2D(-78.1,71.2),new Vec2D(-49.1,71.2)],[new Vec2D(43.5,82.6),new Vec2D(110.9,82.6)],[new Vec2D(76.7,7.5),new Vec2D(146.9,7.5)],[new Vec2D(75.5,-103.9),new Vec2D(145.7,-103.9)],[new Vec2D(-82.9,-103.9),new Vec2D(10.6,-103.9)],[new Vec2D(-200.0,125.0),new Vec2D(-176.6,125.0)],[new Vec2D(-86.8,-41.6),new Vec2D(-35.8,-41.6)]],ceiling:[[new Vec2D(-1.0,-50.3),new Vec2D(9.3,-50.3)],[new Vec2D(-79.7,14.7),new Vec2D(-50.5,14.7)],[new Vec2D(-78.1,64.2),new Vec2D(-49.1,64.2)],[new Vec2D(43.5,74.2),new Vec2D(110.9,74.2)],[new Vec2D(76.7,-50.9),new Vec2D(146.9,-50.9)],[new Vec2D(75.5,-125.0),new Vec2D(145.7,-125.0)],[new Vec2D(-82.9,-125.0),new Vec2D(10.6,-125.0)],[new Vec2D(-200.0,-125.0),new Vec2D(-176.6,-125.0)],[new Vec2D(-86.8,-50.2),new Vec2D(-35.8,-50.2)]],wallL:[[new Vec2D(-1.0,82.9),new Vec2D(-1.0,-50.3)],[new Vec2D(-79.7,22.4),new Vec2D(-79.7,14.7)],[new Vec2D(-78.1,71.2),new Vec2D(-78.1,64.2)],[new Vec2D(43.5,82.6),new Vec2D(43.5,74.2)],[new Vec2D(76.7,7.5),new Vec2D(76.7,-50.9)],[new Vec2D(75.5,-103.9),new Vec2D(75.5,-125.0)],[new Vec2D(-82.9,-103.9),new Vec2D(-82.9,-125.0)],[new Vec2D(-200.0,125.0),new Vec2D(-200.0,-125.0)],[new Vec2D(-86.8,-41.6),new Vec2D(-86.8,-50.2)]],wallR:[[new Vec2D(9.3,82.9),new Vec2D(9.3,-50.3)],[new Vec2D(-50.5,22.4),new Vec2D(-50.5,14.7)],[new Vec2D(-49.1,71.2),new Vec2D(-49.1,64.2)],[new Vec2D(110.9,82.6),new Vec2D(110.9,74.2)],[new Vec2D(146.9,7.5),new Vec2D(146.9,-50.9)],[new Vec2D(145.7,-103.9),new Vec2D(145.7,-125.0)],[new Vec2D(10.6,-103.9),new Vec2D(10.6,-125.0)],[new Vec2D(-176.6,125.0),new Vec2D(-176.6,-125.0)],[new Vec2D(-35.8,-41.6),new Vec2D(-35.8,-50.2)]],platform:[[new Vec2D(132.1,42.9),new Vec2D(171.8,42.9)],[new Vec2D(33.0,-29.4),new Vec2D(55.9,-29.4)],[new Vec2D(-137.2,-86.0),new Vec2D(-115.8,-86.0)],[new Vec2D(-176.3,-60.0),new Vec2D(-155.3,-60.0)],[new Vec2D(-133.9,22.3),new Vec2D(-108.1,22.3)],[new Vec2D(-20.9,-8.6),new Vec2D(-0.7,-8.6)],[new Vec2D(-19.4,44.6),new Vec2D(-1.3,44.6)],[new Vec2D(32.7,-69.7),new Vec2D(53.8,-69.7)]],ledge:[[4.0,0.0],[4.0,1.0],[5.0,1.0],[5.0,0.0],[6.0,1.0],[6.0,0.0],[0.0,1.0],[0.0,0.0],[3.0,0.0],[3.0,1.0],[1.0,1.0],[1.0,0.0],[2.0,0.0],[2.0,1.0],[8.0,0.0],[8.0,1.0]],target:[new Vec2D(-49.9,38.8),new Vec2D(52.2,98.5),new Vec2D(120.1,55.7),new Vec2D(56.8,1.3),new Vec2D(30.4,11.8),new Vec2D(15.5,-82.8),new Vec2D(-81.1,-65.0),new Vec2D(-146.9,-26.7),new Vec2D(172.7,-106.9),new Vec2D(-104.5,84.7)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-170.0,-101.5),box:[new Box2D([-200.0,-125.0],[-185.6,125.0]),new Box2D([-200.0,111.3],[200.0,125.0]),new Box2D([184.6,-125.0],[200.0,125.0]),new Box2D([-200.0,-125.0],[200.0,-111.2]),new Box2D([-144.7,-130.0],[-137.0,68.8]),new Box2D([-144.9,68.7],[13.3,80.0]),new Box2D([156.1,-90.4],[167.7,68.8]),new Box2D([-30.7,-57.8],[156.2,-46.3]),new Box2D([117.6,-125.0],[128.9,-93.6]),new Box2D([69.8,-125.0],[81.6,-76.6]),new Box2D([22.3,-125.0],[33.1,-93.9]),new Box2D([-29.6,-125.0],[-17.8,-74.3]),new Box2D([-69.7,-125.0],[-58.3,-5.0]),new Box2D([-30.9,-59.2],[-18.7,24.2]),new Box2D([13.6,55.1],[129.3,68.2]),new Box2D([-108.3,15.3],[-18.7,25.4]),new Box2D([-108.3,-89.5],[-95.3,25.4]),new Box2D([13.8,15.5],[124.0,25.9]),new Box2D([31.0,-17.9],[123.2,-7.5]),new Box2D([129.1,68.0],[167.6,79.6])],ground:[[new Vec2D(-200.0,125.0),new Vec2D(-185.6,125.0)],[new Vec2D(-200.0,125.0),new Vec2D(200.0,125.0)],[new Vec2D(184.6,125.0),new Vec2D(200.0,125.0)],[new Vec2D(-200.0,-111.2),new Vec2D(200.0,-111.2)],[new Vec2D(-144.7,68.8),new Vec2D(-137.0,68.8)],[new Vec2D(-144.9,80.0),new Vec2D(13.3,80.0)],[new Vec2D(156.1,68.8),new Vec2D(167.7,68.8)],[new Vec2D(-30.7,-46.3),new Vec2D(156.2,-46.3)],[new Vec2D(117.6,-93.6),new Vec2D(128.9,-93.6)],[new Vec2D(69.8,-76.6),new Vec2D(81.6,-76.6)],[new Vec2D(22.3,-93.9),new Vec2D(33.1,-93.9)],[new Vec2D(-29.6,-74.3),new Vec2D(-17.8,-74.3)],[new Vec2D(-69.7,-5.0),new Vec2D(-58.3,-5.0)],[new Vec2D(-30.9,24.2),new Vec2D(-18.7,24.2)],[new Vec2D(13.6,68.2),new Vec2D(129.3,68.2)],[new Vec2D(-108.3,25.4),new Vec2D(-18.7,25.4)],[new Vec2D(-108.3,25.4),new Vec2D(-95.3,25.4)],[new Vec2D(13.8,25.9),new Vec2D(124.0,25.9)],[new Vec2D(31.0,-7.5),new Vec2D(123.2,-7.5)],[new Vec2D(129.1,79.6),new Vec2D(167.6,79.6)]],ceiling:[[new Vec2D(-200.0,-125.0),new Vec2D(-185.6,-125.0)],[new Vec2D(-200.0,111.3),new Vec2D(200.0,111.3)],[new Vec2D(184.6,-125.0),new Vec2D(200.0,-125.0)],[new Vec2D(-200.0,-125.0),new Vec2D(200.0,-125.0)],[new Vec2D(-144.7,-130.0),new Vec2D(-137.0,-130.0)],[new Vec2D(-144.9,68.7),new Vec2D(13.3,68.7)],[new Vec2D(156.1,-90.4),new Vec2D(167.7,-90.4)],[new Vec2D(-30.7,-57.8),new Vec2D(156.2,-57.8)],[new Vec2D(117.6,-125.0),new Vec2D(128.9,-125.0)],[new Vec2D(69.8,-125.0),new Vec2D(81.6,-125.0)],[new Vec2D(22.3,-125.0),new Vec2D(33.1,-125.0)],[new Vec2D(-29.6,-125.0),new Vec2D(-17.8,-125.0)],[new Vec2D(-69.7,-125.0),new Vec2D(-58.3,-125.0)],[new Vec2D(-30.9,-59.2),new Vec2D(-18.7,-59.2)],[new Vec2D(13.6,55.1),new Vec2D(129.3,55.1)],[new Vec2D(-108.3,15.3),new Vec2D(-18.7,15.3)],[new Vec2D(-108.3,-89.5),new Vec2D(-95.3,-89.5)],[new Vec2D(13.8,15.5),new Vec2D(124.0,15.5)],[new Vec2D(31.0,-17.9),new Vec2D(123.2,-17.9)],[new Vec2D(129.1,68.0),new Vec2D(167.6,68.0)]],wallL:[[new Vec2D(-200.0,125.0),new Vec2D(-200.0,-125.0)],[new Vec2D(-200.0,125.0),new Vec2D(-200.0,111.3)],[new Vec2D(184.6,125.0),new Vec2D(184.6,-125.0)],[new Vec2D(-200.0,-111.2),new Vec2D(-200.0,-125.0)],[new Vec2D(-144.7,68.8),new Vec2D(-144.7,-130.0)],[new Vec2D(-144.9,80.0),new Vec2D(-144.9,68.7)],[new Vec2D(156.1,68.8),new Vec2D(156.1,-90.4)],[new Vec2D(-30.7,-46.3),new Vec2D(-30.7,-57.8)],[new Vec2D(117.6,-93.6),new Vec2D(117.6,-125.0)],[new Vec2D(69.8,-76.6),new Vec2D(69.8,-125.0)],[new Vec2D(22.3,-93.9),new Vec2D(22.3,-125.0)],[new Vec2D(-29.6,-74.3),new Vec2D(-29.6,-125.0)],[new Vec2D(-69.7,-5.0),new Vec2D(-69.7,-125.0)],[new Vec2D(-30.9,24.2),new Vec2D(-30.9,-59.2)],[new Vec2D(13.6,68.2),new Vec2D(13.6,55.1)],[new Vec2D(-108.3,25.4),new Vec2D(-108.3,15.3)],[new Vec2D(-108.3,25.4),new Vec2D(-108.3,-89.5)],[new Vec2D(13.8,25.9),new Vec2D(13.8,15.5)],[new Vec2D(31.0,-7.5),new Vec2D(31.0,-17.9)],[new Vec2D(129.1,79.6),new Vec2D(129.1,68.0)]],wallR:[[new Vec2D(-185.6,125.0),new Vec2D(-185.6,-125.0)],[new Vec2D(200.0,125.0),new Vec2D(200.0,111.3)],[new Vec2D(200.0,125.0),new Vec2D(200.0,-125.0)],[new Vec2D(200.0,-111.2),new Vec2D(200.0,-125.0)],[new Vec2D(-137.0,68.8),new Vec2D(-137.0,-130.0)],[new Vec2D(13.3,80.0),new Vec2D(13.3,68.7)],[new Vec2D(167.7,68.8),new Vec2D(167.7,-90.4)],[new Vec2D(156.2,-46.3),new Vec2D(156.2,-57.8)],[new Vec2D(128.9,-93.6),new Vec2D(128.9,-125.0)],[new Vec2D(81.6,-76.6),new Vec2D(81.6,-125.0)],[new Vec2D(33.1,-93.9),new Vec2D(33.1,-125.0)],[new Vec2D(-17.8,-74.3),new Vec2D(-17.8,-125.0)],[new Vec2D(-58.3,-5.0),new Vec2D(-58.3,-125.0)],[new Vec2D(-18.7,24.2),new Vec2D(-18.7,-59.2)],[new Vec2D(129.3,68.2),new Vec2D(129.3,55.1)],[new Vec2D(-18.7,25.4),new Vec2D(-18.7,15.3)],[new Vec2D(-95.3,25.4),new Vec2D(-95.3,-89.5)],[new Vec2D(124.0,25.9),new Vec2D(124.0,15.5)],[new Vec2D(123.2,-7.5),new Vec2D(123.2,-17.9)],[new Vec2D(167.6,79.6),new Vec2D(167.6,68.0)]],platform:[[new Vec2D(-163.5,-75.0),new Vec2D(-144.6,-75.0)],[new Vec2D(-186.0,-43.1),new Vec2D(-167.9,-43.1)],[new Vec2D(-161.1,-7.5),new Vec2D(-144.7,-7.5)],[new Vec2D(-185.7,27.3),new Vec2D(-168.0,27.3)],[new Vec2D(-136.9,-79.2),new Vec2D(-108.2,-79.2)],[new Vec2D(-136.9,-54.2),new Vec2D(-108.2,-54.2)],[new Vec2D(-136.9,-29.0),new Vec2D(-108.0,-29.0)],[new Vec2D(-136.9,-6.2),new Vec2D(-108.0,-6.2)],[new Vec2D(-136.9,18.0),new Vec2D(-108.0,18.0)],[new Vec2D(-45.8,-58.9),new Vec2D(-30.6,-58.9)],[new Vec2D(-161.4,61.3),new Vec2D(-144.9,61.3)],[new Vec2D(-185.1,94.0),new Vec2D(-167.2,94.0)],[new Vec2D(21.7,79.5),new Vec2D(49.7,79.5)],[new Vec2D(56.2,83.3),new Vec2D(87.9,83.3)],[new Vec2D(95.5,79.5),new Vec2D(124.3,79.5)]],ledge:[[5.0,0.0]],target:[new Vec2D(141.6,-4.0)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]},
{startingPoint:new Vec2D(-175.0,45.0),box:[new Box2D([-45.0,-55.0],[150.0,-20.0]),new Box2D([-185.0,5.0],[-135.0,30.0]),new Box2D([-112.5,-12.5],[-67.5,12.5]),new Box2D([24.5,-19.5],[59.5,65.5])],ground:[[new Vec2D(-45.0,-20.0),new Vec2D(150.0,-20.0)],[new Vec2D(-185.0,30.0),new Vec2D(-135.0,30.0)],[new Vec2D(-112.5,12.5),new Vec2D(-67.5,12.5)],[new Vec2D(24.5,65.5),new Vec2D(59.5,65.5)]],ceiling:[[new Vec2D(-45.0,-55.0),new Vec2D(150.0,-55.0)],[new Vec2D(-185.0,5.0),new Vec2D(-135.0,5.0)],[new Vec2D(-112.5,-12.5),new Vec2D(-67.5,-12.5)],[new Vec2D(24.5,-19.5),new Vec2D(59.5,-19.5)]],wallL:[[new Vec2D(-45.0,-20.0),new Vec2D(-45.0,-55.0)],[new Vec2D(-185.0,30.0),new Vec2D(-185.0,5.0)],[new Vec2D(-112.5,12.5),new Vec2D(-112.5,-12.5)],[new Vec2D(24.5,65.5),new Vec2D(24.5,-19.5)]],wallR:[[new Vec2D(150.0,-20.0),new Vec2D(150.0,-55.0)],[new Vec2D(-135.0,30.0),new Vec2D(-135.0,5.0)],[new Vec2D(-67.5,12.5),new Vec2D(-67.5,-12.5)],[new Vec2D(59.5,65.5),new Vec2D(59.5,-19.5)]],platform:[[new Vec2D(-82.5,60.0),new Vec2D(2.5,60.0)],[new Vec2D(59.5,11.0),new Vec2D(84.5,11.0)],[new Vec2D(149.5,-55.0),new Vec2D(208.5,-55.0)],[new Vec2D(-185.0,-35.0),new Vec2D(-135.0,-35.0)]],ledge:[],target:[new Vec2D(160.0,100.0),new Vec2D(-160.0,-15.0),new Vec2D(175.0,-102.0),new Vec2D(175.0,-40.0),new Vec2D(42.0,99.0),new Vec2D(-90.0,25.0),new Vec2D(-56.0,-37.0),new Vec2D(-41.0,78.0),new Vec2D(72.0,-5.0),new Vec2D(-160.0,92.0)],scale:3,blastzone:new Box2D([-250,-250],[250,250]),offset:[600,375]}];
