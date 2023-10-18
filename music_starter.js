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









// Behind the Background Variables
  var drumHeight = map(drum, 0, 100, 0,  600);
  var ballSize = 60;
  var bassHeight = map(bass, 0, 100, 0,  600);
  var ballSize2 = 60;

  var otherHeight = map(other, 0, 100, 100, 600)
  var ballSize3 = 400;

  background(255)

  fill('#f8c92e');
  rect(300, 500, otherHeight, ballSize3);

  fill('#bffdfc');
  ellipse(100, drumHeight, ballSize);

  
  fill('#c460ab');
 ellipse(1000, bassHeight, ballSize2);




 image(dinerImg, 0, 0)



image(jukeboxImg, 0, 0)





// Girl and Boy 

 var VocalFrame = int(map(vocal, 0, 100, 0, 3));
 push();
 image(boy[VocalFrame], 0, 0);
 pop();


 var otherFrame = int(map(other, 0, 100, 0, 3));
 push();
 image(girl[otherFrame], 0, 0);
 pop();





 let yellowColor;
 let pinkColor;
 let blueColor;
 
 blueColor = color('#f8c92e')
 yellowColor = color('#bffdfc')
 pinkColor = color('#c460ab')
 
 



 // Bottom Lyrics
  textFont('Helvetica'); // please use CSS safe fonts
  textSize(24);

   // display "words"
   noStroke();
   textAlign(CENTER);

   fill('#ffffff');
   rect(width/2,900, 920, 120);

   fill(100,20,100);
   textSize(vocal);
   text(words, width/2, 925);





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
   let otherColor = lerpColor(yellowColor, pinkColor, otherLerpNumber)
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