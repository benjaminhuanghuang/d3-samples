var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
let data= [""];

d3
  .select("#viz")
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "shot")
  .attr("transform", function(d){
    return `translate(${10 * d.y},${10 * d.x})`;
  })
  .on("mouseover", function(d){
    d3.select(this).raise()
    .append("text")
    .attr("class", "playername")
    .text(d.player);
  })
  .on("mouseout", function(d){
    d3.selectAll("text.player").remove();
  })