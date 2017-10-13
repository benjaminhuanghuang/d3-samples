var dataset = [
  { label:"Abulia", count:10},
  { label:"Ben", count:20},
  { label:"Tom", count:30},
  { label:"Jack", count:40},
];

var height = 360,
  width = 360,
  radius = Math.min(width, height)/2;

d3
  .select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width/2}, ${height/2})`);
