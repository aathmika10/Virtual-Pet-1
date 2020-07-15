//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogimg = loadImage("dogImg.png");
  happyDogimg = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database=firebase.database();
    foodStock=database.ref('food');
    foodStock.on("value",readStock);

  dog=createSprite(250, 290, 10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;
}

function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg);
    dog.scale=0.2;
}

  drawSprites();

  //add styles here
  textSize(14);
  fill("white");
  text("Food remaining:"+foodS,250,170);
  text("Note:press UP_ARROW key to feed Drago milk!",100,440);
}
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
    
    database.ref('/').update({
      Food:x
    })
  }




