d3.select("body")
  .selectAll("p")
  .data(["a", "b"])
  .enter()
  .append("p")
  .text(function(d){
    return d + ", hello"
  });
  