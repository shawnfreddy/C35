var ball;
var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPositionRef=database.ref('ball/position');
    ballPositionRef.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    ballPosition=data.val();
    ball.x=ballPosition.x;
    ball.y=ballPosition.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:ballPosition.x+x,
        y:ballPosition.y+y
    })
}
function showError(){
    console.log(showError)
}
