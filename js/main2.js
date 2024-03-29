const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map',  {
  scrollWheelZoom: false,
  zoomControl: false,

} ).setView([28.545751, 77.272683], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  id: 'mapbox/streets-v11',

  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);


//routing


// const routing = L.polygon([


  // [28.547108892347637, 77.27230485227025],
  // [28.547228744691754, 77.27218205608638],
  // [28.547204774233844, 77.27200923182757],
  // [28.547084921862425, 77.27199558780714],
  // [28.5470289907091, 77.27219115209999],
  // [28.547108892347637, 77.27230485227025]

// ], {
//   color: 'blue',

// }).addTo(mymap)

var arrowhead1 = L.icon({
  iconUrl: 'img/Map/arrowhead.png',
  iconSize: [30,30], // size of the icon
  iconAnchor: [-10, 20], // point of the icon which will correspond to marker's location
  popupAnchor: [10, -46], // point from which the popup should open relative to the iconAnchor
  
});

const arrowheadmarker = L.marker([28.547084921862425, 77.27199558780714], { icon: arrowhead1 }).addTo(mymap);
// routing ends

var location1 = L.icon({
  iconUrl: 'img/Map/location_1.png',
  iconSize: [25.6,40], // size of the icon
   // point of the icon which will correspond to marker's location
  popupAnchor: [10, -46] // point from which the popup should open relative to the iconAnchor
  
});

const locationmarker = L.marker([28.546034, 77.272888], { icon: location1 }).addTo(mymap);
// routing ends


//Sports Block

var sportsBlock = L.icon({
  iconUrl: 'img/Map/sportsBlockIcon.png',
  iconSize: [124, 90], // size of the icon
  iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [10, -46] // point from which the popup should open relative to the iconAnchor
});

const sportsBlockMarker = L.marker([28.547539, 77.272337], { icon: sportsBlock }).addTo(mymap);
// Popup
let sportsBlock1 = `<h3>Sports Complex</h3>
<div style="text-align:center">
    <img width="150" height="150"src="img/Map/sportsBlock.jpg"/>
</div>
`
sportsBlockMarker.bindPopup(sportsBlock1);

sportsBlockMarker.on('mouseover', function (e) {
  this.openPopup();
});
sportsBlockMarker.on('mouseout', function (e) {
  this.closePopup();
});
sportsBlockMarker.on('click', function (e) {
  this.openPopup();
});

// New Boys Hostel

var newBoysHostel = L.icon({
  iconUrl: 'img/Map/hostel.png',

  iconSize: [160, 160], // size of the icon
  iconAnchor: [50, 100], // point of the icon which will correspond to marker's location
  popupAnchor: [10, -56] // point from which the popup should open relative to the iconAnchor
});

const newBoysHostelMarker = L.marker([28.548098, 77.273685], { icon: newBoysHostel }).addTo(mymap);

// Popup
let newBoysHostel1 = `
<h3>New Boys Hostel</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/newBoysHostel.jpg"/>
</div>
`
newBoysHostelMarker.bindPopup(newBoysHostel1);

newBoysHostelMarker.on('mouseover', function (e) {
  this.openPopup();
});
newBoysHostelMarker.on('mouseout', function (e) {
  this.closePopup();
});
newBoysHostelMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});

// Old Boys Hostel

var oldBoysHostel = L.icon({
  iconUrl: 'img/Map/hostel.png',

  iconSize: [160, 160], // size of the icon
  iconAnchor: [85, 95], // point of the icon which will correspond to marker's location
  popupAnchor: [-30, -15] // point from which the popup should open relative to the iconAnchor
});

const oldBoysHostelMarker = L.marker([28.547418551856236, 77.2737823769367], { icon: oldBoysHostel }).addTo(mymap);

// Popup
let oldBoysHostel1 = `
<h3>Old Boys Hostel</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/oldBoysHostel.jpg"/>
</div>
`
oldBoysHostelMarker.bindPopup(oldBoysHostel1);

oldBoysHostelMarker.on('mouseover', function (e) {
  this.openPopup();
});
oldBoysHostelMarker.on('mouseout', function (e) {
  this.closePopup();
});
oldBoysHostelMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// Old Girls Hostel


var oldGirlsHostel = L.icon({
  iconUrl: 'img/Map/hostel.png',

  iconSize: [160, 160], // size of the icon
  iconAnchor: [80, 80], // point of the icon which will correspond to marker's location
  popupAnchor: [-15,-15] // point from which the popup should open relative to the iconAnchor
});

const oldGirlsHostelMarker = L.marker([28.54694732857778, 77.27348196952032], { icon: oldGirlsHostel }).addTo(mymap);


// Popup
let oldGirlsHostel1 = `
<h3>Old Girls Hostel</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/oldGirlsHostel.jpg"/>
</div>
`
oldGirlsHostelMarker.bindPopup(oldGirlsHostel1);

oldGirlsHostelMarker.on('mouseover', function (e) {
  this.openPopup();
});
oldGirlsHostelMarker.on('mouseout', function (e) {
  this.closePopup();
});
oldGirlsHostelMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// Old Academic Block

var oldAcademicBlock = L.icon({
  iconUrl: 'img/Map/oldAcademicBlock.png',
  iconSize: [195, 220], // size of the icon
  iconAnchor: [75, 140], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -26] // point from which the popup should open relative to the iconAnchor
});

const oldAcademicBlockMarker = L.marker([28.544689383780405, 77.27242155338143], { icon: oldAcademicBlock }).addTo(mymap);

// Add popup message
let oldAcademicBlock1 = `<h3>Old Academic Block</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/oldAcademicBlock.jpeg"/>
</div>
`
oldAcademicBlockMarker.bindPopup(oldAcademicBlock1);
oldAcademicBlockMarker.on('mouseover', function (e) {
  this.openPopup();
});
oldAcademicBlockMarker.on('mouseout', function (e) {
  this.closePopup();
});
oldAcademicBlockMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// Faculty Residence
var facultyResidence = L.icon({
  iconUrl: 'img/Map/factultyResidence.png',
  iconSize: [160, 160], // size of the icon
  iconAnchor: [90, 100], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});


const facultyResidenceMarker = L.marker([28.544221, 77.270510], { icon: facultyResidence }).addTo(mymap);

// Add popup message
let facultyResidence1 = `
<h3>Faculty Residency</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/factultyResidence.jpg"/>
</div>
`
facultyResidenceMarker.bindPopup(facultyResidence1);
facultyResidenceMarker.on('mouseover', function (e) {
  this.openPopup();
});
facultyResidenceMarker.on('mouseout', function (e) {
  this.closePopup();
});
facultyResidenceMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// RnD Block
var RnDBlock = L.icon({
  iconUrl: 'img/Map/RnD.png',
  iconSize: [120,90], // size of the icon
  iconAnchor: [50, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-30, -15] // point from which the popup should open relative to the iconAnchor
});

const RnDBlockMarker = L.marker([28.544016182854115, 77.27164268068114], { icon: RnDBlock }).addTo(mymap);

// Add popup message
let RnDBlock1 = `
<h3>R&D Block</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/RnD.jpg"/>
</div>
`
RnDBlockMarker.bindPopup(RnDBlock1);

RnDBlockMarker.on('mouseover', function (e) {
  this.openPopup();
});
RnDBlockMarker.on('mouseout', function (e) {
  this.closePopup();
});
RnDBlockMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


//Library
var library = L.icon({
  iconUrl: 'img/Map/library.png',
  iconSize: [87.5, 70], // size of the icon
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [25, -10] // point from which the popup should open relative to the iconAnchor
});

const libraryMarker = L.marker([28.543974621298453, 77.27246179147589], { icon: library }).addTo(mymap);

// Add popup message
let library1 = `
<h3>Library</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/library.jpg"/>
</div>
`
libraryMarker.bindPopup(library1);


libraryMarker.on('mouseover', function (e) {
  this.openPopup();
});
libraryMarker.on('mouseout', function (e) {
  this.closePopup();
});
libraryMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});

//Amphitheatre

var openAmphitheatre = L.icon({
  iconUrl: 'img/Map/openAmphitheatre.png',
  iconSize: [80,45], // size of the icon
  iconAnchor: [50, 35], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
});

const openAmphitheatreMarker = L.marker([28.544119, 77.272147], { icon: openAmphitheatre }).addTo(mymap);

// Add popup message
let openAmphitheatre1 = `
<h3>Open Amphitheatre</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/openAmphitheatre.jpg"/>
</div>
`
openAmphitheatreMarker.bindPopup(openAmphitheatre1);

openAmphitheatreMarker.on('mouseover', function (e) {
  this.openPopup();
});
openAmphitheatreMarker.on('mouseout', function (e) {
  this.closePopup();
});
openAmphitheatreMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// LHC
var LHC = L.icon({
  iconUrl: 'img/Map/LHC.png',
  iconSize: [157, 110], // size of the icon
  iconAnchor: [20, 80], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});

const LHCMarker = L.marker([28.545527806449364, 77.2730568583655], { icon: LHC }).addTo(mymap);

// Add popup message
let LHC1 = `
<h3>Convocation Location</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/convocationEmblem.webp"/>
</div>
`
LHCMarker.bindPopup(LHC1);


LHCMarker.on('mouseover', function (e) {
  this.openPopup();
});
LHCMarker.on('mouseout', function (e) {
  this.closePopup();
});
LHCMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});


// Add circle 

const circle = L.circle([28.5458350116291, 77.273132389721], {
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
  [28.544167, 77.269901]
], {
  color: 'maroon',
  fillColor: 'red',
  fillOpacity: 0.2
}).addTo(mymap)




var line_points = [

  [28.546034, 77.272888],
  [28.546823, 77.272833],
  [28.547173, 77.272249]


];

// Define polyline options
// http://leafletjs.com/reference.html#polyline
var polyline_options = {
  color: '#4a89f3',
  weight : 6
};

// Defining a polygon here instead of a polyline will connect the
// endpoints and fill the path.
// http://leafletjs.com/reference.html#polygon
var polyline = L.polyline(line_points, polyline_options).addTo(mymap);

//map routing
