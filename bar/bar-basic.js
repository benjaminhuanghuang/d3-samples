var svg_width = 500;
var svg_height = 200;

var dataset = [30, 20, 10, 40, 45, 25, 15, 25, 18];
var svg = d3.select('#viz')
.append('svg')
.style('background', '#C9D7D6')
.attr('width', svg_width)
.attr('height', svg_height);


svg.selectAll('rect')   // create an empty selection
.data(dataset)
.enter()
.append("rect")
.attr('x', function(d,i){
  return i * (svg_width/ dataset.length);
})
.attr('y', function(d){
  return svg_height - (d * 4);
})
.attr('width', svg_width/ dataset.length)
.attr('height', function(d){
  return d * 4;
});