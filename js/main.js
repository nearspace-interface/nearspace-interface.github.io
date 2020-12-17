// PHONE MENU //
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mhead("#menu-phone");
  }
);

document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu("#menu-panel", {
      "navbar": {
        "add": true,
        "title": "Near Space Interface"
      },
      "onClick": {
        "close": true
      }
    });
  }
);

// TRANSITIONS //
const swup = new Swup({
  plugins: [
    new SwupScriptsPlugin(),
    new SwupScrollPlugin()
  ]
});

// DATA ARCHIVE //
const opciones = {
  valueNames: [
    'name',
    'entity',
    'period',
    'about',
    'format',
    {attr: 'href', name: 'descarga_español'},
    {attr: 'href', name: 'descarga_ingles'}
  ],
  /*item: '<li><h2 class="name"></h2><p class="entity"></p><br><p class="period"></p><br><p class="about"></p><br><p class="format"></p><br><br><a href="" class="descarga_español link_normal link_data" download>Español</a><a href="" class="descarga_ingles link_normal link_data">English</a><hr></li>'*/
  item: '<li><h2 class="name"></h2><p class="entity"></p><br><p class="period"></p><br><p class="about"></p><br><p class="format"></p><br><br><p>In development</p><hr></li>'
};

function load_data(){
  var datos = [];

  fetch('resources/data/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    datos.push(data);
    var datasets = new List('datasets', opciones, datos[0]);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

load_data();

swup.on('contentReplaced', function(){
  document.getElementsByClassName('datasets').innerHTML = "";
  load_data();
});