// Note: In this example we have two "requestAnimationFrame", PIXI + TweenMax.
// TweeMax coordinate his animations (bunnies).

//https://app.axieinfinity.com/marketplace/axies/246269/


const app = new PIXI.Application({ background: '#1099bb' });

document.body.appendChild(app.view);


let isFlower = true;

const normalEyes = PIXI.Texture.from('examples/assets/pixi-filters/eyes.png');
const angryEyes = PIXI.Texture.from('examples/assets/pixi-filters/eyes-angry.png');
const happyEyes = PIXI.Texture.from('examples/assets/pixi-filters/eyes-happy.png');
const shutEyes = PIXI.Texture.from('examples/assets/pixi-filters/eyes-shut.png');

const normalMouth = PIXI.Texture.from('examples/assets/pixi-filters/mouth.png');
const openMouth = PIXI.Texture.from('examples/assets/pixi-filters/mouth-bite.png');
const biteMouth = PIXI.Texture.from('examples/assets/pixi-filters/mouth-open.png');


const bg = PIXI.Sprite.from('examples/assets/pixi-filters/bg_depth_blur.jpg');
bg.width = app.screen.width;
bg.height = app.screen.height;
app.stage.addChild(bg);




const tail = PIXI.Sprite.from('examples/assets/pixi-filters/tail.png');
tail.x = 113;
tail.y = 405;

tail.x = 12;
tail.y = 25;
tail.interactive = true;
tail.cursor = 'pointer';
tail.anchor.set(0.5);
tail.scale.set(0.8);
tail.scale.x = -1;
tail.on('pointerdown', onDragStart, tail);
app.stage.addChild(tail);

const right_ears = PIXI.Sprite.from('examples/assets/pixi-filters/ear-right.png');
//right_ears.x = 518;
//right_ears.y = 265;

right_ears.x = 10;
right_ears.y = 20;
right_ears.interactive = true;
right_ears.cursor = 'pointer';
right_ears.anchor.set(0.5);
right_ears.scale.set(0.8);
right_ears.scale.x = -1;
right_ears.on('pointerdown', onDragStart, right_ears);
app.stage.addChild(right_ears);


const dynamicBack = PIXI.Sprite.from('examples/assets/pixi-filters/back.png');
dynamicBack.x = 216;
dynamicBack.y = 161;

dynamicBack.x = 25;
dynamicBack.y = 25;


dynamicBack.scale.x = -1;
dynamicBack.interactive = true;
dynamicBack.cursor = 'pointer';
dynamicBack.anchor.set(0.5);
dynamicBack.on('pointerdown', onDragStart, dynamicBack);
app.stage.addChild(dynamicBack);


const legBackLeft = PIXI.Sprite.from('examples/assets/pixi-filters/leg-back-left.png');
legBackLeft.x = 137;
legBackLeft.y = 560;
legBackLeft.scale.x = -1;
legBackLeft.interactive = true;
legBackLeft.cursor = 'pointer';
legBackLeft.anchor.set(1.5);
legBackLeft.on('pointerdown', onDragStart, legBackLeft);
app.stage.addChild(legBackLeft);



const legFrontRight = PIXI.Sprite.from('examples/assets/pixi-filters/leg-front-right.png');
legFrontRight.x = 448;
legFrontRight.y = 545;
legFrontRight.scale.x = -1;
legFrontRight.interactive = true;
legFrontRight.cursor = 'pointer';
legFrontRight.anchor.set(1.5);
legFrontRight.on('pointerdown', onDragStart, legFrontRight);
app.stage.addChild(legFrontRight);



const dynamicBody = PIXI.Sprite.from('examples/assets/pixi-filters/body.png');
/*
dynamicBody.x = 342;
dynamicBody.y = 351;
dynamicBody.scale.x = -1;
*/
dynamicBody.x = 300;
dynamicBody.y = 351;
dynamicBody.scale.set(1.7, 1.7);
dynamicBody.interactive = true;
dynamicBody.cursor = 'pointer';
dynamicBody.anchor.set(0.5);
dynamicBody.on('pointerdown', onDragStart, dynamicBody);
app.stage.addChild(dynamicBody);

/* here body comes */


const legFrontLeft = PIXI.Sprite.from('examples/assets/pixi-filters/leg-front-left.png');
legFrontLeft.x = 348;
legFrontLeft.y = 554;
legFrontLeft.scale.x = -1;
legFrontLeft.interactive = true;
legFrontLeft.cursor = 'pointer';
legFrontLeft.anchor.set(1.5);
legFrontLeft.on('pointerdown', onDragStart, legFrontLeft);
app.stage.addChild(legFrontLeft);

const left_ears = PIXI.Sprite.from('examples/assets/pixi-filters/ear-left.png');
left_ears.x = 287;
left_ears.y = 306;


left_ears.x = 20;
left_ears.y = 20;


left_ears.interactive = true;
left_ears.cursor = 'pointer';
left_ears.anchor.set(0.5);
left_ears.scale.set(0.8);
left_ears.scale.x = -1;
left_ears.on('pointerdown', onDragStart, left_ears);
app.stage.addChild(left_ears);


const staticHorn = PIXI.Sprite.from('examples/assets/pixi-filters/horn.png');
staticHorn.x = 208;
staticHorn.y = 308;
staticHorn.scale.x = -1;
staticHorn.interactive = true;
staticHorn.cursor = 'pointer';
staticHorn.anchor.set(1.5);
staticHorn.on('pointerdown', onDragStart, staticHorn);
app.stage.addChild(staticHorn);





/*



*/



//const dynamicEyes = PIXI.Sprite.from('examples/assets/pixi-filters/eyes.png');

const dynamicMouth = new PIXI.Sprite(normalMouth);
dynamicMouth.x = 443;
dynamicMouth.y = 363;
dynamicMouth.scale.x = -1;
dynamicMouth.interactive = true;
dynamicMouth.cursor = 'pointer';
dynamicMouth.anchor.set(0.5);
dynamicMouth.on('pointerdown', onDragStart, dynamicMouth);
app.stage.addChild(dynamicMouth);

const dynamicEyes = new PIXI.Sprite(normalEyes);
dynamicEyes.x = 436;
dynamicEyes.y = 315;
dynamicEyes.scale.x = -1;
dynamicEyes.interactive = true;
dynamicEyes.cursor = 'pointer';
dynamicEyes.anchor.set(0.5);
dynamicEyes.on('pointerdown', onDragStart, dynamicEyes);
app.stage.addChild(dynamicEyes);




const blurFilter1 = new PIXI.filters.BlurFilter();
blurFilter1.blur = 0.0;
dynamicBody.filters = [blurFilter1];

/*
const time = 2.0;
TweenMax.to(blurFilter1, time, { blur: 5.0, yoyo: true, repeat: -1 });
TweenMax.to(dynamicEyes, time, { pixi: { brightness: 2 }, yoyo: true, repeat: -1 });
*/



var dir=true;
var count = 0;
console.log(Math.floor(Math.random()));

function tailRotate(dir)
{
    //for(int i=1; i<=50; i++)
    {
        if(dir)
            tail.rotation = 0.002;
        else
            tail.rotation = -0.002

    }
}


var rotation = -0.002;

var jumpValue = 0.3;
app.ticker.add((delta) => {


    
    //console.log("Tail Rotation = " + tail.rotation + " Count = " + count + "Delta " + delta);
    
    if(count < 30)
    {
        tail.rotation        += 0.001  *  1.0022399999998743;
        dynamicBack.rotation += 0.001  *  1.0022399999998743;

        left_ears.rotation      += 0.001  *  1.0022399999998743;
        right_ears.rotation     += 0.001  *  1.0022399999998743;


        
        
    }
    if(count > 70)
    {
        //console.log("Negative DynamicBody.y = " + dynamicBody.y);

        tail.rotation           -= 0.001 *  1.0022399999998743;
        dynamicBack.rotation    -= 0.001 *  1.0022399999998743;

        left_ears.rotation      -= 0.001  *  1.0022399999998743;
        right_ears.rotation     -= 0.001  *  1.0022399999998743;


        dynamicBody.y           -= 0.1  *  1.0022399999998743;
        dynamicBack.y           -= 0.1  *  1.0022399999998743;
        staticHorn.y            -= 0.1  *  1.0022399999998743;
        dynamicEyes.y           -= 0.1  *  1.0022399999998743;
        dynamicMouth.y          -= 0.1  *  1.0022399999998743;
        left_ears.y             -= 0.1  *  1.0022399999998743;
        right_ears.y            -= 0.1  *  1.0022399999998743;
        tail.y                  -= 0.1  *  1.0022399999998743;


        /*
        legFrontRight.x         -= 0.1  *  1.0022399999998743;          
        legBackLeft.x           -= 0.1  *  1.0022399999998743;     
        legFrontLeft.x          -= 0.1  *  1.0022399999998743;

        
        legFrontRight.y         -= 0.1  *  1.0022399999998743;          
        legBackLeft.y           -= 0.1  *  1.0022399999998743;     
        legFrontLeft.y          -= 0.1  *  1.0022399999998743; 
        */
        legFrontLeft.rotation   -= 0.0022399999998743; 
        legFrontLeft.x          -= 0.05  *  1.0022399999998743; 



    }
    if(count > 30 && count < 60)
    {
        //console.log("Positive DynamicBody.Y = " + dynamicBody.y);

        dynamicBody.y           += 0.1  *  1.0022399999998743;
        dynamicBack.y           += 0.1  *  1.0022399999998743;
        staticHorn.y            += 0.1  *  1.0022399999998743;

        dynamicEyes.y           += 0.1  *  1.0022399999998743;
        dynamicMouth.y          += 0.1  *  1.0022399999998743;
        left_ears.y             += 0.1  *  1.0022399999998743;
        right_ears.y            += 0.1  *  1.0022399999998743;   
        tail.y                  += 0.1  *  1.0022399999998743;

        /*
        legFrontRight.x         += 0.1  *  1.0022399999998743;          
        legBackLeft.x           += 0.1  *  1.0022399999998743;     
        legFrontLeft.x          += 0.1  *  1.0022399999998743;   
        
        
        legFrontRight.y         += 0.1  *  1.0022399999998743;          
        legBackLeft.y           += 0.1  *  1.0022399999998743;     
        legFrontLeft.y          += 0.1  *  1.0022399999998743;     
        */
        legFrontLeft.rotation   +=  0.0022399999998743; 
        legFrontLeft.x          += 0.05  *  1.0022399999998743;  
            
    }
    
    if(count === 50)
    {
        //tail.rotation -= 0.01 * delta;
        //console.log(tail.rotation);
    }

    if(count === 50)
    {
        //tail.rotation = -0.002
        //tailRotate(true);       
        
        normalEyesMouth();
    }

    if(count === 70)
    {
        normalEyesMouth();
    }
    if(count === 90)
    {
        openMouthNormalEyes();
    }
    
    if(count === 20)
    {
        //tail.rotation = 0.002;
        //tailRotate(false);
        //tail.rotation += 0.05 * delta;

        dynamicBack.rotation = 0.002;

        openMouthNormalEyes();
    }

    count++;

    if(count > 100)
    {
        count = 0;
    }
});


function openMouthNormalEyes()
{
    isFlower = !isFlower;
    dynamicEyes.texture = isFlower ? happyEyes : shutEyes;
    dynamicMouth.texture = isFlower ? openMouth : biteMouth;
}

function normalEyesMouth()
{
    isFlower = !isFlower;
    dynamicEyes.texture = isFlower ? normalEyes : angryEyes;
    dynamicMouth.texture = isFlower ? normalMouth : openMouth;    
}


let dragTarget = null;

app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on('pointerup', onDragEnd);
app.stage.on('pointerupoutside', onDragEnd);

function onDragMove(event) {
    if (dragTarget) {
        console.log(dragTarget.position);
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
    }
}

function onDragStart() {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    // this.data = event.data;
    this.alpha = 0.5;
    dragTarget = this;
    app.stage.on('pointermove', onDragMove);
}

function onDragEnd() {
    if (dragTarget) {
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
    }
}
