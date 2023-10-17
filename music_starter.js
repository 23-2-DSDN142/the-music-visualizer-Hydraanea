let firstRun = true
let dinerImg;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
  if(firstRun){
    rectMode(CENTER)
    dinerImg = loadImage('diner.png');
  
    firstRun = false
  }

  background(225, 50)

 

  textFont('Helvetica'); // please use CSS safe fonts

  textSize(24);


  var drumHeight = map(drum, 0, 100, 0,  600);
  var ballSize = 60;

  var bassHeight = map(bass, 0, 100, 0,  600);
  var ballSize2 = 60;

  var otherHeight = map(other, 0, 100, 100, 600)
  var ballSize3 = 100;

  fill(1000,500,0);
  ellipse(300, 500, otherHeight, ballSize3);

  fill(60,200,90);
  ellipse(100, drumHeight, ballSize);

  
  fill(100,20,100);
 ellipse(500, bassHeight, ballSize2);


 image(dinerImg, 0, 0)

   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   
   fill('#ffffff');
   rect(width/2,900, 920, 120);

   fill(100,20,100);
   text(words, width/2, 925);





  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;


  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);

 
}