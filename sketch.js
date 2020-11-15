//Create variables here

var dog,happyDog,normDog;
var foodS,foodStock;
var database;

function preload()
{

happyDog = loadImage("images/dogImg.png");
normDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,30,30);
  dog.addImage(normDog);
  dog.scale = 0.5;

  foodStock = database.ref("virtual_pet_1/food")
  foodStock.on("value",readStock);

}


function draw() {  

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);

}



  drawSprites();
  //add styles here

}


function readStock(data){
foodS = data.val();
}

function writeStock(x){
if (x<-0){
  x-0
}
else{
x = x-1:

}
database.ref('/').update({});
food:x
}