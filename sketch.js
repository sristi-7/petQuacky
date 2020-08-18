//Create variables here
var dog,database,foodStock,foodS;
var dogIMG1,dogIMG2;
function preload()
{
  //load images here
  dogIMG1 = loadImage("images/dogImg.png");
  dogIMG2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(200,200,10,10);
  dog.addImage("dog", dogIMG1);
  dog.scale=0.3;
  database=firebase.database();
  foodStock= database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog1",dogIMG2);
  }
  drawSprites();
  //add styles here
  text("note-press the uparrowkey to feed the dog",200,100);
  fill("blue");

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x-0;
  } else{
    x=x-1;
  }

  database.ref("/").update ({
    food:x
  })

}

