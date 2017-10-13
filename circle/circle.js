const arbitraryData = [
  { name: "Ireland", income: 53000, life: 78, pop: 6378, color: "green" },
  { name: "Norway", income: 73000, life: 87, pop: 5084, color: "blue" },
  { name: "Tanzania", income: 27000, life: 45, pop: 3407, color: "pink" },
  { name: "Mexico", income: 36000, life: 65, pop: 2000, color: "yellow" },
  { name: "India", income: 20000, life: 59, pop: 10000, color: "red" },
  { name: "France", income: 10000, life: 95, pop: 8000, color: "purple" }
];

const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .style("background-color", "#666666");

svg
  .selectAll("circle")
  .data(arbitraryData)
  .enter()
  .append("circle")
  .attr("id", d => d.name)
  .attr("cx", d => d.income / 200)
  .attr("cy", d => d.life * 3)
  .attr("r", d => d.pop / 1000 * 3)
  .attr("fill", d => d.color)
  .append("svg:title")
  .text(d => d.name);
