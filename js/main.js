d3.json('home/data/data.geojson').then(function(globe) {
  const { height, width } = document.getElementById("body").getBoundingClientRect()

  let projection = d3.geoStereographic();
  //projection.fitSize([width, height], globe);
  projection.fitExtent([[0, 0], [width, height]], globe);
  projection.scale(400);

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

  d3.geoZoom()
    .projection(projection)
    .onMove(render)
    (svg.node());

  function render() {
    svg.selectAll('path')
      .attr('d', geoGenerator);
  }
});

/*
const margin = 5;
const width = 100;
const height = 100;
const svg = d3.select('#world').append('svg')
.attr('width', width)
.attr('height', height);

const projection = d3.geoOrthographic()
.scale((Math.min(width, height)) / 2 - margin)
.translate([width / 2, height / 2]);

const path = d3.geoPath()
.projection(projection);

d3.geoZoom()
.projection(projection)
.onMove(render)
(svg.node());

d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json', world => {
svg.append('path').attr('class', 'geo-feature')
.datum({ type: 'Sphere' })
.attr('fill', 'aqua');

svg.append('path').attr('class', 'geo-feature')
.datum(topojson.feature(world, world.objects.land))
.attr('fill', 'maroon');

render();
});

//

function render() {
svg.selectAll('path.geo-feature').attr('d', path);
}
*/
