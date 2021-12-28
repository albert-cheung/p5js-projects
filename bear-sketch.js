function setup() {
  createCanvas(400, 400);
}
 i = 0
function draw() {
  rotate(i);
  background('cyan');
//Ears
  fill(0);
  ellipse(75,85,95,95);
  ellipse(325,85,95,95);
  fill(165,42,42);
  ellipse(75,85,75,75);
  ellipse(325,85,75,75);
//Inner Ear  
  fill(0)
  ellipse(75,85,55,55);
  ellipse(325,85,55,55); 
  fill('pink')
  ellipse(75,85,35,35);
  ellipse(325,85,35,35);
 
//Main Head
  fill(0);
  ellipse(200, 200, 320, 320);
  fill(165,42, 42);
  ellipse(200, 200, 300, 300);
  
//Eyes
  fill(0);
  ellipse(125, 175, 100, 100);
  ellipse(275, 175, 100, 100);
  fill('white');
  ellipse(125, 175, 80, 80);
  ellipse(275, 175, 80, 80);
  
//Pupil
  fill(0);
  ellipse(130, 180, 60, 60);
  ellipse(270, 180, 60, 60);

//Lower Lip
  fill(0);
  arc(200, 250, 150,150, 0, PI);

  fill('tan');
  arc(200, 250, 130,130, 0, PI);
  
  //Mouth
  fill(0);
  arc(200, 250, 170,170, PI, 0);

  fill('tan');
  arc(200, 250, 150,150, PI, 0);


  

//Nose
  fill(0);
  //triangle(180, 200, 200, 220, 220, 200);
  ellipse(200, 200, 40, 20);

  
//Upper Lip
  fill(0);
  arc(160, 250, 90, 80, 0, PI);
  arc(240, 250, 90, 80, 0, PI);
  
  fill('tan');
  arc(160, 250, 70,60, 0, PI);
  arc(240, 250, 70,60, 0, PI);
  i = i + .01;

}