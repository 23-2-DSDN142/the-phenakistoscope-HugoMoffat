const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 53, 202, 222);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(swimmer);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(beach);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(crawler);
  layer3.mode(SWIRL(3));
  layer3.set_boundary(0,400);

  //var layer4 = new PLayer(tree);
  //layer4.mode(RING)
  //layer4.set_boundary(0, 200)

}

function swimmer(x, y, animation, pScope){
  
  fill(67, 97, 181)
  ellipse(0,45,20,80)
  ellipse(0,5,60,100)
  
  fill(63, 191, 8)
  ellipse(0,40,10,70)
  ellipse(0,0,50,90);

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
  ellipse(0,40,10,70)  //tail
  ellipse(0,0,50,90)   //body

  fill(186, 240, 185)
  rect(0,0,10,10)  //scales
  rect(-5,10,10,10)
  rect(5,10,10,10)

}

function tree(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  
  fill(152, 250, 110)
  arc(x,y,100,400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  
}


