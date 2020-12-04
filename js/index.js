d3.json('/resources/home/data/data.geojson').then(function(globe) {
  const { height, width } = document.body.getBoundingClientRect();

  let projection = d3.geoStereographic();
  projection.fitExtent([[0, 0], [width, height]], globe);
  projection.scale(450);

  let geoGenerator = d3.geoPath().projection(projection);
  let gridGenerator = d3.geoGraticule();

  let svg = d3.select("body")
  .append('svg')
  .attr("width", width)
  .attr("height", height);

  svg.append('g')
  .append('path')
  .datum(gridGenerator)
  .attr('d', geoGenerator)
  .attr('stroke-width', '1px')
  .attr('stroke', '#E2DBD0')
  .attr('fill', "none");

  svg.append('g')
  .selectAll('path')
  .data(globe.features)
  .join('path')
  .attr('d', geoGenerator)
  .attr('fill', '#212121')
  .attr('stroke', '#212121');

  function render() {
    svg.selectAll('path')
    .attr('d', geoGenerator);
  }

  d3.geoZoom()
  .projection(projection)
  .onMove(render)
  (svg.node());
});