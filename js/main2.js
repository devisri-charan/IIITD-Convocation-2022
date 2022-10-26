const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map',  {
  scrollWheelZoom: false
} ).setView([28.545751, 77.272683], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);

//sports

var greenIconsport = L.icon({
  iconUrl: 'img/sports_3dicon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [124, 90], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [10, -46] // point from which the popup should open relative to the iconAnchor
});


const marker1 = L.marker([28.547539, 77.272337], { icon: greenIconsport }).addTo(mymap);

// Add popup message
let template1 = `

<h3>Sports Complex</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/sports.jpg"/>
</div>
`
marker1.bindPopup(template1);


marker1.on('mouseover', function (e) {
  this.openPopup();
});
marker1.on('mouseout', function (e) {
  this.closePopup();
});
marker1.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});

//sports end


// h2


var greenIconh2 = L.icon({
  iconUrl: 'img/h2illu.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [160, 160], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [50, 100], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [10, -56] // point from which the popup should open relative to the iconAnchor
});



const marker2 = L.marker([28.548098, 77.273685], { icon: greenIconh2 }).addTo(mymap);

// Add popup message
let template2 = `

<h3>New boys hostel H2</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/h2.jpg"/>
</div>
`
marker2.bindPopup(template2);


marker2.on('mouseover', function (e) {
  this.openPopup();
});
marker2.on('mouseout', function (e) {
  this.closePopup();
});
marker2.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// oldacad


var greenIcon = L.icon({
  iconUrl: 'img/oldacad_3dicon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [195, 220], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [85, 105], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const marker3 = L.marker([28.544689383780405, 77.27242155338143], { icon: greenIcon }).addTo(mymap);

// Add popup message
let template3 = `

<h3>Academic Block</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/oldaca.jpg"/>
</div>
`
marker3.bindPopup(template3);


marker3.on('mouseover', function (e) {
  this.openPopup();
});
marker3.on('mouseout', function (e) {
  this.closePopup();
});
marker3.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});



var greenIconresi = L.icon({
  iconUrl: 'img/resiillu.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [160, 160], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [90, 100], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});


const marker5 = L.marker([28.544221, 77.270510], { icon: greenIconresi }).addTo(mymap);

// Add popup message
let template5 = `

<h3>Faculty Residency</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/recidensy.jpg"/>
</div>
`
marker5.bindPopup(template5);


marker5.on('mouseover', function (e) {
  this.openPopup();
});
marker5.on('mouseout', function (e) {
  this.closePopup();
});
marker5.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});

// // rnd


// var greenIcon1 = L.icon({
//   iconUrl: 'img/rndillu.png',
//   // shadowUrl: 'leaf-shadow.png',

//   iconSize: [200, 200], // size of the icon
//   // iconSize:     [150, 150], // size of the icon
//   // shadowSize:   [50, 64], // size of the shadow
//   iconAnchor: [120, 100], // point of the icon which will correspond to marker's location
//   // shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
// });

// const marker6 = L.marker([28.544016182854115, 77.27164268068114], { icon: greenIcon1 }).addTo(mymap);

// // Add popup message
// let template6 = `

// <h3>R&D</h3>
// <div style="text-align:center">
//     <img width="150" height="150"src="img/rnd.jpg"/>
// </div>
// `
// marker6.bindPopup(template6);


// marker6.on('mouseover', function (e) {
//   this.openPopup();
// });
// marker6.on('mouseout', function (e) {
//   this.closePopup();
// });
// marker6.on('click', function (e) {
//   this.openPopup();
//   //disable mouseout behavior here?
// });

//library

var greenIconlib = L.icon({
  iconUrl: 'img/library_3dicon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [87.5, 70], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [50, 20], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const markerl = L.marker([28.543974621298453, 77.27246179147589], { icon: greenIconlib }).addTo(mymap);

// Add popup message
let templatel = `
<h3>Library</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/lib.jpg"/>
</div>
`
markerl.bindPopup(templatel);


markerl.on('mouseover', function (e) {
  this.openPopup();
});
markerl.on('mouseout', function (e) {
  this.closePopup();
});
markerl.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


//library end



//oT

var greenIconot = L.icon({
  iconUrl: 'img/ot_3dicon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [60, 60], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [40, 40], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const markerot = L.marker([28.544119, 77.272147], { icon: greenIconot }).addTo(mymap);

// Add popup message
let templateot = `
<h3>Library</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/lib.jpg"/>
</div>
`
markerot.bindPopup(templateot);


markerot.on('mouseover', function (e) {
  this.openPopup();
});
markerot.on('mouseout', function (e) {
  this.closePopup();
});
markerot.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


//OT end

// capzone


var greenIconcapz = L.icon({
  iconUrl: 'img/lhc_3dicon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [154, 110], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [60, 80], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const markercap = L.marker([28.545527806449364, 77.2730568583655], { icon: greenIconcapz }).addTo(mymap);

// Add popup message
let templatecap = `

<h3>Convocation Location</h3>
<div style="text-align:center">
    <img width="150" height="150"src="https://img.freepik.com/premium-vector/graduation-congratulations-senior-school-badge-emblem-illustration-isolated-symbol_7087-2122.jpg?w=2000"/>
</div>
`
markercap.bindPopup(templatecap);


markercap.on('mouseover', function (e) {
  this.openPopup();
});
markercap.on('mouseout', function (e) {
  this.closePopup();
});
markercap.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// Add circle 


const circle = L.circle([28.545679, 77.272984], {
  radius: 60,
  color: 'green',
  fillColor: 'red',
  fillOpacity: 0.2
}).addTo(mymap);

// let template7 = `

// <h3>Convocation</h3>
// <div style="text-align:center">
//     <img width="150" height="150"src="https://img.freepik.com/premium-vector/graduation-congratulations-senior-school-badge-emblem-illustration-isolated-symbol_7087-2122.jpg?w=2000"/>
// </div>
// `
// circle.bindPopup(template7);



// circle.on('mouseover', function (e) {
//     this.openPopup();
//   });
//   circle.on('mouseout', function (e) {
//     this.closePopup();
//   });
//   circle.on('click', function (e) {
//     this.openPopup();
//     //disable mouseout behavior here?
//   });



// Add Polygon

const polygon = L.polygon([

  [28.544965, 77.270039],
  [28.544921, 77.271080],
  [28.544943, 77.272088],
  [28.545243, 77.272771],

  [28.546034, 77.272888],
  [28.546823, 77.272833],
  [28.547173, 77.272249],
  [28.547568, 77.271971],

  [28.548673, 77.274031],

  [28.548175, 77.274444],

  [28.543510, 77.272463],

  [28.544167, 77.269901],



], {
  color: 'maroon',
  fillColor: 'red',
  fillOpacity: 0.2
}).addTo(mymap)

// polygon.bindPopup(' I am a polygon')

