let firstRun = true
let dinerImg;
let girl = []
let boy = []
let jukebox = []


let yellowColor;
let pinkColor;
let blueColor;
let purpleColor;
let whiteColor;
let blackColor;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
 
yellowColor = color('#f8c92e')
blueColor = color('#bffdfc')
pinkColor = color('#c460ab')
whiteColor = color('#fffff')
blackColor = color('#211f21')
purpleColor = color(100,20,100);


  if(firstRun){
    rectMode(CENTER)
    

    // Animation
    girl.push(loadImage('girl_0.png'));
    girl.push(loadImage('girl_1.png'));
    girl.push(loadImage('girl_2.png'));

    boy.push(loadImage('boy_0.png'));
    boy.push(loadImage('boy_1.png'));
    boy.push(loadImage('boy_2.png'));

    jukebox.push(loadImage('jukebox_0.png'))
    jukebox.push(loadImage('jukebox_1.png'))
    jukebox.push(loadImage('jukebox_2.png'))

    // Images 
    dinerImg = loadImage('dinerbackground.png');
  
    firstRun = false
  }




  var drumHeight = map(drum, 700, 0, 100,  950);
  var bassHeight = map(bass, 900, 0, 0,  950);
  var otherHeight = map(other, 800, 0, 0, 980);
  var ballSize = 30;

  
  // var otherHeight = map(other, 0, 100, 100, 600)
  // var rectangleSize = 100;


  // WINDOWS


  background(255)

  // big
  var rectLerpNumber = map(bass, 0, 50, 10, 1)
  let rectColor = lerpColor(yellowColor, blueColor, rectLerpNumber)
  fill(rectColor)
  rect(100, 500, 1200, 1000);

  // small
  var rect2LerpNumber = map(drum, 100, 50, 10, 1)
  let rect2Color = lerpColor(pinkColor, blueColor, rect2LerpNumber)
  fill(rect2Color)
  rect(1100, 100, 800, 900);






image(dinerImg, 0, 0)



var bassFrame = int(map(bass, 0, 100, 0, 3));
push();
image(jukebox[bassFrame], 0, 0);
pop();






// Behind the Background Variables


// fill(pinkColor);
// ellipse(1000, bassHeight, ballSize2);


// Girl and Boy 

 var VocalFrame = int(map(vocal, 0, 100, 0, 3));
 push();
 image(boy[VocalFrame], 0, 0);
 pop();


 var otherFrame = int(map(other, 0, 100, 0, 3));
 push();
 image(girl[otherFrame], 0, 0);
 pop();

 



 // Bottom Lyrics
  textFont('Georgia'); // please use CSS safe fonts
  textSize(20);

   // display "words"
   noStroke();
   textAlign(CENTER);

   fill(whiteColor);
   rect(width/2,900, 2000, 150);

   fill(purpleColor);
   textSize(vocal);
   text(words, width/2, 925);






// white dots
noStroke()
fill(purpleColor);
ellipse(300, drumHeight, ballSize);
ellipse(400, bassHeight, ballSize);
ellipse(500, otherHeight, ballSize);


ellipse(800, otherHeight, ballSize);
ellipse(900, bassHeight, ballSize);
ellipse(1000, drumHeight, ballSize);













   strokeWeight(3);
   stroke(drum, 10, 10);
   
   var drumMap = map(drum, 50, 0, 90, 0);
   let drumLerpNumber = map(drum, 0, 50, 10, 1)
   let drumColor = lerpColor(blueColor, yellowColor, drumLerpNumber)
   var lengthOfLine = 100; // x length
   var lineStart = 0; // x location
   var lineEnd = lineStart + lengthOfLine;
  
   
   
   for (var i = 0; i <=drumMap; i++) {
     var lineStep = lineStart - i * 4;
     stroke(drumColor)
     // line(lineStart, lineStep, lineEnd, lineStep);
     line(lineStart, lineStep+1020, lineEnd, lineStep+1120);
   
     
     
   }
   
  
   strokeWeight(3);
   stroke(bass, 10, 10);
   
   var bassMap = map(bass, 50, 0, 60, 0);
   let bassLerpNumber = map(bass, 0, 50, 10, 1)
   let bassColor = lerpColor(pinkColor, yellowColor, bassLerpNumber)
   var lengthOfLine = 100; // x length
   var lineStart = 110; // x location
   var lineEnd = lineStart + lengthOfLine;
  
   
   
   for (var i = 0; i <=bassMap; i++) {
     var lineStep = lineStart - i * 4;
     stroke(bassColor)
     // line(lineStart, lineStep, lineEnd, lineStep);
     line(lineStart, lineStep+1020, lineEnd, lineStep+1020);

   }

     
   strokeWeight(3);
   stroke(other, 10, 10);
   
   var otherMap = map(other, 50, 0, 60, 0);
   var otherLerpNumber = map(other, 0, 50, 10, 1)
   let otherColor = lerpColor(pinkColor, blueColor, otherLerpNumber)
   var lengthOfLine = 100; // x length
   var lineStart = 1110; // x location
   var lineEnd = lineStart + lengthOfLine;
  
   
   
   for (var i = 0; i <=otherMap; i++) {
     var lineStep = lineStart - i * 4;
     stroke(otherColor)
     // line(lineStart, lineStep, lineEnd, lineStep);
     line(lineStart, lineStep+20, lineEnd, lineStep+20);

   }

   strokeWeight(3);
   stroke(vocal, 10, 10);
   
   var vocalMap = map(vocal, 50, 0, 60, 0);
   var vocalLerpNumber = map(vocal, 0, 50, 10, 1)
   let vocalColor = lerpColor(yellowColor, blueColor, vocalLerpNumber)
   var lengthOfLine = 100; // x length
   var lineStart = 1220; // x location
   var lineEnd = lineStart + lengthOfLine;
  
   
   
   for (var i = 0; i <=vocalMap; i++) {
     var lineStep = lineStart - i * 4;
     stroke(vocalColor)
     // line(lineStart, lineStep, lineEnd, lineStep);
     line(lineStart, lineStep-100, lineEnd, lineStep-200);

   }

   


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