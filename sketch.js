var dog, happyDog, foodS, foodStock
var database
var time = 10
var reset, feedbutton,lastFeed;
var milk1,mink2,milk3,milk4,milk5,milk6,milk7,milk8,milk9,milk10,
    milk11,mink12,milk13,milk14,milk15,milk16,milk17,milk18,milk19,milk20

function preload() {
  dogImg = loadImage('images/dogImg.png')
  doghappyImg = loadImage('images/dogImg1.png')
  milkImg = loadImage('images/Milk.png')
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 500);


  dog = createSprite(width-200,height/2, 50, 50)
  dog.addImage(dogImg)
  dog.scale = 0.2


  reset = createButton('Buy Food')
  reset.position(860, 540)

  feedbutton = createButton('Feed')
  feedbutton.position(800, 540)

  milk1 = createSprite(20,200,20,20)
  milk1.addImage(milkImg)
  milk1.scale=0.07

  milk2 = createSprite(milk1.x+40 ,200 ,20 ,20 ) 
  milk2.addImage(milkImg)
  milk2.scale=0.07

  milk3 = createSprite(milk2.x+40 ,200 ,20 ,20 )
  milk3.addImage(milkImg)
  milk3.scale=0.07

  milk4 = createSprite(milk3.x+40 ,200 ,20 ,20 )
  milk4.addImage(milkImg)
  milk4.scale=0.07

  milk5 = createSprite(milk4.x+40 ,200 ,20 ,20 )
  milk5.addImage(milkImg)
  milk5.scale=0.07

  milk6 = createSprite(milk5.x+40 ,200 ,20 ,20 )
  milk6.addImage(milkImg)
  milk6.scale=0.07

  milk7 = createSprite(milk6.x+40 ,200 ,20 ,20 )
  milk7.addImage(milkImg)
  milk7.scale=0.07

  milk8 = createSprite(milk7.x+40 ,200 ,20 ,20 )
  milk8.addImage(milkImg)
  milk8.scale=0.07

  milk9 = createSprite(milk8.x+40 ,200 ,20 ,20 )
  milk9.addImage(milkImg)
  milk9.scale=0.07

  milk10 = createSprite(milk9.x+40 , 200 ,20 ,20 )
  milk10.addImage(milkImg)
  milk10.scale=0.07

  milk11 = createSprite(milk2.x-40,250,20,20)
  milk11.addImage(milkImg)
  milk11.scale=0.07
  
  milk12 = createSprite(milk1.x+40 ,250 ,20 ,20 )
  milk12.addImage(milkImg)
  milk12.scale=0.07

  milk13 = createSprite(milk2.x+40 ,250 ,20 ,20 )
  milk13.addImage(milkImg)
  milk13.scale=0.07

  milk14 = createSprite(milk3.x+40 ,250 ,20 ,20 )
  milk14.addImage(milkImg)
  milk14.scale=0.07

  milk15 = createSprite(milk4.x+40 ,250 ,20 ,20 )
  milk15.addImage(milkImg)
  milk15.scale=0.07

  milk16 = createSprite(milk5.x+40 ,250 ,20 ,20 )
  milk16.addImage(milkImg)
  milk16.scale=0.07

  milk17 = createSprite(milk6.x+40 ,250 ,20 ,20 )
  milk17.addImage(milkImg)
  milk17.scale=0.07

  milk18 = createSprite(milk7.x+40 ,250 ,20 ,20 )
  milk18.addImage(milkImg)
  milk18.scale=0.07

  milk19 = createSprite(milk8.x+40 ,250 ,20 ,20 )
  milk19.addImage(milkImg)
  milk19.scale=0.07

  milk20 = createSprite(milk9.x+40 ,250 ,20 ,20 )
  milk20.addImage(milkImg)
  milk20.scale=0.07

}


function draw() {
  background(46, 19, 87)

  time = time - 1


  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  
  feedtime = database.ref('Time')
  feedtime.on("value", readTime)

  
  if (foodS !== undefined) {
    fill("white")
    textSize(20)
    text("Food left = " + foodS, 50, 30)
  }
  if(lastFeed>12)
    text("Last Feed = "+lastFeed+" PM",250,30)

    else if(lastFeed<12)
    text("Last Feed = "+lastFeed+" AM",250,30)


  if (time <= 0) {
    dog.addImage(dogImg)
  }
  

  buttonPressed() 
  display_Milk()
  drawSprites();
}

// Reading data from the database
function readStock(data) {
  foodS = data.val()
}
function readTime(data) {
  lastFeed = data.val()
}

function writeStock(x) {
  database.ref('/').update({
    Food: x - 1
  })
}

function writeTime(x) {
  database.ref('/').update({
    Time: x
  })
}

function writeStockUpdate(x) {
  database.ref('/').update({
    Food: 20
  })
}

function writeTimeUpdate(x) {
  database.ref('/').update({
    Time: lastTime
  })
}

function buttonPressed() {
  if (foodS < 5) {
    reset.mousePressed(() => {
      writeStockUpdate(foodS)
    })
  }
  else {
    reset.mousePressed(() => {
      alert("You have Sufficient Food")
    })
  }



  if (foodS !== 0) {
    feedbutton.mousePressed(() => {
      writeStock(foodS)
      time = 1000
      lastTime = hour()
      writeTimeUpdate(lastFeed)
      dog.addImage(doghappyImg)
    })
  }
  else if (foodS <= 0) {
    feedbutton.mousePressed(() => {
      alert("Please Buy Some Food for Your Dog")
    })
  }
}


function display_Milk() {

  if(foodS===19)
   milk20.x = width-300
  
  if(foodS===18){
    milk20.x = -1000
    milk19.x = width-300
  }
  
  if(foodS===17){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = width-300
  }
  
  if(foodS===16){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = width-300
  }

  if(foodS===15){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = width-300
  }

  if(foodS===14){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = width-300
  }

  if(foodS===13){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = width-300
  }

  if(foodS===12){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x =width-300
}

  if(foodS===11){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = width-300
  }

  if(foodS===10){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = width-300
  }

  if(foodS===9){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = width-300
  }

  if(foodS===8){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = width-300
  }

  if(foodS===7){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = width-300
  }

  if(foodS===6){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = width-300
  }

  if(foodS===5){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = width-300
  }

  if(foodS===4){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = width-300
  }

  if(foodS===3){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = -1000
    milk4.x = width-300
  }

  if(foodS===2){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = -1000
    milk4.x = -1000
    milk3.x = width-300
  }

  if(foodS===1){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = -1000
    milk4.x = -1000
    milk3.x = -1000
    milk2.x = width-300
  }

  if(foodS===0){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = -1000
    milk4.x = -1000
    milk3.x = -1000
    milk2.x = -1000
    milk1.x = width-300
  }
  if(foodS===0 && time <=0){
    milk20.x = -1000
    milk19.x = -1000
    milk18.x = -1000
    milk17.x = -1000
    milk16.x = -1000
    milk15.x = -1000
    milk14.x = -1000
    milk13.x = -1000
    milk12.x = -1000
    milk11.x = -1000
    milk10.x = -1000
    milk9.x = -1000
    milk8.x = -1000
    milk7.x = -1000
    milk6.x = -1000
    milk5.x = -1000
    milk4.x = -1000
    milk3.x = -1000
    milk2.x = -1000
    milk1.x = -1000
  }
  if(foodS===20){
    milk20.x = 380
    milk19.x = 340
    milk18.x = 300
    milk17.x = 260
    milk16.x = 220
    milk15.x = 180
    milk14.x = 140
    milk13.x = 100
    milk12.x = 60
    milk11.x = 20
    milk10.x = 380
    milk9.x = 340
    milk8.x = 300
    milk7.x = 260
    milk6.x = 220
    milk5.x = 180
    milk4.x = 140
    milk3.x = 100
    milk2.x = 60
    milk1.x = 20
  }
}