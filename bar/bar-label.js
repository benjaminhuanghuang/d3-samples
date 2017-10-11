var svg_width = 500;
var svg_height = 200;
var bar_padding = 5;

var dataset = [30, 20, 10, 40, 45, 25, 15, 25, 18];
var svg = d3.select('#viz')
.append('svg')
.style('background', '#C9D7D6')
.attr('width', svg_width)
.attr('height', svg_height);


svg.selectAll('rect')   // create an empty selection
.data(dataset)
.enter() //.enter identifies any DOM elements that need to be added 
.append("rect")
.attr('x', function(d,i){
  return i * (svg_width/ dataset.length);
})
.attr('y', function(d){
  return svg_height - (d * 4);
})
.attr('width', svg_width/ dataset.length - bar_padding)
.attr('height', function(d){
  return d * 4;
})
.attr('fill', d=>{
  return "rgb("+d*5+",0,0)";
});

// Add text
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(d=>{
  return d;
})
.attr('text-anchor', "middle")
.attr('x', function(d,i){
  return i * (svg_width/ dataset.length) + (svg_width / dataset.length - bar_padding) /2;
})
.attr('y', function(d){
  return svg_height - (d * 4) + 20;
})
.attr('font-family', "sans-serif")
.attr('font-size', "20px")
.attr('fill', "white")
;