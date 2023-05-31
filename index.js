// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container', // id of container <div>
  width: 500,
  height: 500,
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});

// m²akin a star
var star = new Konva.Star({
  x: 22,
  y: 22,
  numPoints: 12,
  innerRadius: 20,
  outerRadius: 6,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 4,
});

// makin a blob
var blob = new Konva.Line({
  points: [
    50, 50, 50, 150, 75, 75, 100, 150, 125, 150, 150, 75, 175, 150, 200, 75,
    225, 200, 275, 200, 230, 190, 230, 75, 235, 50, 225, 10, 150, 10, 200, 20,
    200, 50,
  ],
  fill: '#00D2FF',

  closed: true,
  tension: 0.5,
  draggable: true,
  opacity: 0.5,
});

//making a rectangle
var rectangle = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  fill: 'yellowgreen',
  stroke: 'yellow',
  strokeWidth: 6,
  draggable: true,
});

// event listeners
blob.on('dblclick', function () {
  blob.fill('yellow');
});

// add the shape to the layer
layer.add(circle);

//adding rect
layer.add(rectangle);

// add star

layer.add(star);

// add blob
layer.add(blob);
// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
