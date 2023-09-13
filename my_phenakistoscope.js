const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("one_tenth","png")
  pScope.load_image_sequence("Splash","png",7)
}

function setup_layers(pScope){

  new PLayer(null, 53, 202, 222);  //
  


  var layer1 = new PLayer(swimmer);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 600, 1000 );

  var layer5 = new PLayer(waves);
  layer5.mode(SWIRL(5));
  layer5.set_boundary(300,1000);

  var layer2 = new PLayer(beach);
  layer2.mode(RING);
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(crawler);
  layer3.mode(SWIRL(3));
  layer3.set_boundary(0,400);

  var layer4 = new PLayer(tree);
  layer4.mode(RING)
  layer4.set_boundary(0, 200)
  
  var layer6 = new PLayer(fish)
  layer6.mode(RING)
  layer6.set_boundary(0,1000)

  var layer7 = new PLayer(splash)
  layer7.mode(RING)
  layer7.set_boundary(0,1000)

}

function swimmer(x, y, animation, pScope){
  
  fill(67, 97, 181)   //blue
  ellipse(0,45,20,80) //wake
  ellipse(0,5,60,100) //wake
  
  fill(186, 240, 185)  //light green
  ellipse(0,40,10,70)  //tail
  fill(63, 191, 8)     //green
  ellipse(0,0,50,90);  //body

  fill(186, 240, 185)  //scales
  arc(0,0,50,90,337.5,202.5,OPEN)

  rect(5,-10,10,10)
  rect(15,-10,10,10)
  rect(-5,-10,10,10)
  rect(-15,-10,10,10)
  rect(-25,-10,10,10)

  rect(0,0,10,10)  
  rect(10,0,10,10)
  rect(-10,0,10,10)
  rect(-20,0,10,10)

  rect(-5,10,10,10)
  rect(5,10,10,10)
  rect(-15,10,10,10)

  rect(0,20,10,10)
  rect(-10,20,10,10)

  rect(-5,30,10,10)
  
}

function beach(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(247, 217, 141)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

}

function crawler(x, y, animation, pScope){

  fill(63, 191, 8)  //green
  ellipse(0,-10,80,20) //front legs
  ellipse(0,20,80,20)  //back legs
  fill(186, 240, 185)  //light green
  ellipse(0,40,10,70)  //tail
  fill(63, 191, 8)     //green
  ellipse(0,0,50,90)   //body
  
  fill(186, 240, 185)  //scales
  arc(0,0,50,90,337.5,202.5,OPEN)

  rect(5,-10,10,10)
  rect(15,-10,10,10)
  rect(-5,-10,10,10)
  rect(-15,-10,10,10)
  rect(-25,-10,10,10)

  rect(0,0,10,10)  
  rect(10,0,10,10)
  rect(-10,0,10,10)
  rect(-20,0,10,10)

  rect(-5,10,10,10)
  rect(5,10,10,10)
  rect(-15,10,10,10)

  rect(0,20,10,10)
  rect(-10,20,10,10)

  rect(-5,30,10,10)

}

function tree(x, y, animation, pScope){

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  
  fill(152, 250, 110)
  arc(x,y,100,400,backgroundArcStart,backgroundArcEnd); //palm leaves
  
}

function waves(x,y,animation,pScope){

  fill(53, 202, 222) //blue
  stroke(51, 81, 158)
  strokeWeight(3)

  arc(80,20,50,10,180,0)
  arc(130,20,50,10,0,180)
  arc(180,20,50,10,180,0)

  arc(-80,70,50,10,180,0)
  arc(-130,70,50,10,0,180)

}

function fish(x,y,animation,pScope){
  
  scale(1.55)
  pScope.draw_image("one_tenth",0,595)

}

function splash(x,yanimation,pScope){

  scale(1)
  pScope.draw_image_from_sequence("Splash", 0, 100, animation.frame);

}