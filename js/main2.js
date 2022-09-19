const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map',  {
  scrollWheelZoom: false
} ).setView([28.546363551502406, 77.2731512073101], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);



// Adding Marker




// const marker = L.marker([28.545177883897512, 77.27286506374088] ).addTo(mymap);

// // Add popup message
// let template = `

// <h3>Lecture Hall Complex</h3>
// <div style="text-align:center">
//     <img width="150" height="150"src="lhc.jpeg"/>
// </div>
// `
// marker.bindPopup(template);

// marker.on('mouseover', function (e) {
//     this.openPopup();
//   });
//   marker.on('mouseout', function (e) {
//     this.closePopup();
//   });
//   marker.on('click', function (e) {
//     this.openPopup();
//     //disable mouseout behavior here?
//   });



// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

// canteen


var greenIconcanteen = L.icon({
  iconUrl: 'img/canteenillu.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [200, 200], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [80, 120], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const lhc22 = L.marker([28.546228807001228, 77.27330796689755], { icon: greenIconcanteen }).addTo(mymap);

// Add popup message
let lhc2 = `

<h3>canteen</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/dinning-1.JPG"/>
</div>
`
lhc22.bindPopup(lhc2);


lhc22.on('mouseover', function (e) {
  this.openPopup();
});
lhc22.on('mouseout', function (e) {
  this.closePopup();
});
lhc22.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


var greenIconsport = L.icon({
  iconUrl: 'img/sportsill.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [200, 200], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [80, 100], // point of the icon which will correspond to marker's location
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
  iconUrl: 'img/OldAcadIcon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [60, 60], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
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


// pathinfront of old acad

// const marker4 = L.marker([28.544886, 77.272191]).addTo(mymap);

// // Add popup message
// let template4 = `

// <h3>locate</h3>
// <div style="text-align:center">
//     <img width="150" height="150"src="pathfrontofoldaca.jpg"/>
// </div>
// `
// marker4.bindPopup(template4);


// marker4.on('mouseover', function (e) {
//     this.openPopup();
//   });
//   marker4.on('mouseout', function (e) {
//     this.closePopup();
//   });
//   marker4.on('click', function (e) {
//     this.openPopup();
//     //disable mouseout behavior here?
//   });

// recidensy


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

// rnd


var greenIcon1 = L.icon({
  iconUrl: 'img/rndillu.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [200, 200], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [120, 100], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

const marker6 = L.marker([28.544016182854115, 77.27164268068114], { icon: greenIcon1 }).addTo(mymap);

// Add popup message
let template6 = `

<h3>R&D</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/rnd.jpg"/>
</div>
`
marker6.bindPopup(template6);


marker6.on('mouseover', function (e) {
  this.openPopup();
});
marker6.on('mouseout', function (e) {
  this.closePopup();
});
marker6.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});

// capzone


var greenIconcapz = L.icon({
  iconUrl: 'img/gradcap.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [60, 60], // size of the icon
  // iconSize:     [150, 150], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
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
  radius: 50,
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

