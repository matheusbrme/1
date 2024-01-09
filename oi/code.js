var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var ball1, ball2, ball3,ball4;
var boundary1, boundary2;
var oi;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  oi = createSprite(20,190,13,13);
  oi.shapeColor = "red";
  
  ball1 = createSprite(100,130,10,10);
  ball1.shapeColor = "green";
  ball2 = createSprite(215,130,10,10);
  ball2.shapeColor = "green";
  ball3 = createSprite(165,250,10,10);
  ball3.shapeColor = "green";
  ball4 = createSprite(270,250,10,10);
  ball4.shapeColor = "green";
  
ball1.velocityY = 5
ball2.velocityY = 5
ball3.velocityY = 5
ball4.velocityY = 5
    
 
//adicione velocidade para fazer o carro se mover.

function draw() {
   background("white");
  text("motes: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites

ball1.bounceOff(boundary1);
ball1.bounceOff(boundary2);
ball2.bounceOff(boundary1);
ball2.bounceOff(boundary2);
ball3.bounceOff(boundary2);
ball3.bounceOff(boundary1);
ball4.bounceOff(boundary1);
ball4.bounceOff(boundary2);

if (keyDown("d")) {
oi.x= oi.x +5
    
}
if (keyDown("a")) {
oi.x= oi.x -5
    
}

if (oi.isTouching(ball1)) {
oi.x = 20
oi.y = 190
    life = life+1
}
if (oi.isTouching(ball2)) {
oi.x = 20
oi.y = 190
    life = life+1
}
if (oi.isTouching(ball3)) {
oi.x = 20
oi.y = 190
    life = life+1
}
if (oi.isTouching(ball4)) {
oi.x = 20
oi.y = 190
    life = life+1
}

//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
