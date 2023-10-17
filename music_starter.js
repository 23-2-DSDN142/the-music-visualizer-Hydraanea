let firstRun = true
let dinerImg;
let girl = []
let boy = []
let jukeboxImg;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER)

    // Animation
    girl.push(loadImage('girl_0.png'));
    girl.push(loadImage('girl_1.png'));
    girl.push(loadImage('girl_2.png'));

    boy.push(loadImage('boy_0.png'));
    boy.push(loadImage('boy_1.png'));
    boy.push(loadImage('boy_2.png'));

    // Images 
    dinerImg = loadImage('dinerbackground.png');
    jukeboxImg = loadImage('jukebox.png');
  
    firstRun = false
  }

// Behinf the Background Variables
  var drumHeight = map(drum, 0, 100, 0,  600);
  var ballSize = 60;
  var bassHeight = map(bass, 0, 100, 0,  600);
  var ballSize2 = 60;

  var otherHeight = map(other, 0, 100, 100, 600)
  var ballSize3 = 400;

   
  fill('#f8c92e');
  rect(300, 500, otherHeight, ballSize3);

  fill('#bffdfc');
  ellipse(100, drumHeight, ballSize);

  
  fill('#c460ab');
 ellipse(1000, bassHeight, ballSize2);

 background(225, 50)


// Background
  image(dinerImg, 0, 0)


// Girl and Boy 

 var VocalFrame = int(map(vocal, 0, 100, 0, 3));
 console.log(VocalFrame);
 push();
 image(jukeboxImg, 0, 0)
 image(girl[VocalFrame], 0, 0);
 image(boy[VocalFrame], 0, 0);
 pop();



 // Bottom Lyrics
  textFont('Helvetica'); // please use CSS safe fonts
  textSize(24);

   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   
   fill('#ffffff');
   rect(width/2,900, 920, 120);

   fill(100,20,100);
   text(words, width/2, 925);

















   

// Orginal Code

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