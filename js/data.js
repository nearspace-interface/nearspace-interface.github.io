var options = {
  valueNames: [
    'name',
    'entity',
    'period',
    'about',
    'format',
    {attr: 'href', name: 'link'}
  ],
  item: '<li><a href="" class="name link link_normal link_data"></a><p class="entity"></p><br><p class="period"></p><br><p class="about"></p><br><p class="format"></p></li>'
};

var values = [
  {
    name: 'Red de Monitoreo de Calidad del aire de Bogotá',
    entity:'Secretaria Distrital de Ambiente de Bogotá',
    period:'2010 - 2020',
    about:'La RMCAB está conformada por 13 estaciones fijas de monitoreo y una estación móvil, ubicadas en diferentes sitios de la ciudad, dotadas con equipos de última tecnología que permiten realizar un monitoreo continuo de las concentraciones de material particulado (PM10, PST, PM2.5), de gases contaminantes (SO2, NO2, CO, O3) y de las variables meteorológicas de precipitación, velocidad y dirección del viento, temperatura, radiación solar, humedad relativa y presión barométrica.',
    format:'.xlsx',
    link:"#"
  }];

var datasets = new List('datasets', options, values);