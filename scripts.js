




//declare map object

var map = L.map('map', {
center: [0, 0],
zoom: 2});


L.tileLayer('maps/mapping_smartue/{z}/{x}/{y}.png',{
minZoom:1 ,
maxZoom:4,
continuousWorld: false,
noWrap: true
}).addTo(map);



var route1 = L.icon ({
    iconUrl:'images/red_route.png',
    iconSize: [10,10]});
    
    
        var cas = L.icon ({
        iconUrl:'images/cas_acc-1.png',
        iconSize: [70,70]}
        );
    
        var cfad = L.icon ({
            iconUrl:'images/cfad_acc-2.png',
            iconSize: [70,70]}
            );
        
            var ceng = L.icon ({
                iconUrl:'images/ceng_acc-3.png',
                iconSize: [70,70]}
                );
            
                var cba = L.icon ({
                    iconUrl:'images/cba_acc-4.png',
                    iconSize: [70,70]}
                    );
                   
                    var bed = L.icon ({
                        iconUrl:'images/bed_acc-5.png',
                        iconSize: [70,70]}
                        );
    
                        var start_point = L.icon ({
                            iconUrl:'images/you_are_here.png',
                            iconSize: [200,100]}
                            );
                            var end_point = L.icon ({
                                iconUrl:'images/your_dest.png',
                                iconSize: [250,150]}
                                );



    function spline(latLngs) {
       var mySpline = L.spline(latLngs);mySpline.addTo(map);
    }
function show_markers() {
    
    var cas = L.icon ({
        iconUrl:'images/cas_acc-1.png',
        iconSize: [50,50]
       
        
    }
        
        );
    
        var cfad = L.icon ({
            iconUrl:'images/cfad_acc-2.png',
            iconSize: [50,50]
            
        }
            );
        
            var ceng = L.icon ({
                iconUrl:'images/ceng_acc-3.png',
                iconSize: [50,50]
               
            }
                );
            
                var cba = L.icon ({
                    iconUrl:'images/cba_acc-4.png',
                    iconSize: [50,50]
                   
                }
                    );
                   
                    var bed = L.icon ({
                        iconUrl:'images/bed_acc-5.png',
                        iconSize: [50,50]
                        
                    }
                        );
    
    var path_0 = L.marker ([-18.812718, -85.12207], {icon:route1}).addTo(map); //INTEGRATION OF PHP IN JAVASCRIPT USING THE LATITUDE AND LONGTITUDE
    var path_0a = L.marker ([10.487812, -75.014648], {icon:route1}).addTo(map);
    var path_1 = L.marker ([15.623037, -65.126953], {icon:route1}).addTo(map);
    var path_2 = L.marker ([21.043491, -55.019531], {icon:route1}).addTo(map);
    var path_3 = L.marker ([30.977609, -33.398438], {icon:route1}).addTo(map);
    var path_3a = L.marker ([33.28462, -33.134766], {icon:route1}).addTo(map);
    var path_3b = L.marker ([31.203405, 0.834961], {icon:route1}).addTo(map);
    var path_4 = L.marker ([34.646488, 1.237365], {icon:route1}).addTo(map);
    var path_4a = L.marker ([33.986641, 11.206055], {icon:route1}).addTo(map);
    var path_4b = L.marker ([30.038189, 11.030273], {icon:route1}).addTo(map);
    //lct
    var path_4c = L.marker ([28.427609, 38.364124], {icon:route1}).addTo(map);
    
    //GOING TO COE
    var path_4d = L.marker ([26.635184, 64.555664], {icon:route1}).addTo(map);
    var path_4e = L.marker ([29.657029, 64.819336], {icon:route1}).addTo(map);
    var path_5 = L.marker ([28.659261, 79.40918], {icon:route1}).addTo(map);
    
    
    
    
    //GOING TO ADMIN BUILDING
    var admin_a = L.marker ([-3.461333, -50.537109], {icon:route1}).addTo(map);
    var admin_b = L.marker ([-13.445719, -42.802716], {icon:route1}).addTo(map);
    var admin_c = L.marker ([-18.92967, -39.638672], {icon:route1}).addTo(map);
    var admin_d = L.marker ([-23.998799, -34.277344], {icon:route1}).addTo(map);
    var admin_e = L.marker ([-28.798953, -28.300781], {icon:route1}).addTo(map);
    //tyk
    var admin_f = L.marker ([-30.09999, 16.171875], {icon:route1}).addTo(map);
    var admin_g = L.marker ([-29.106576, -13.974609], {icon:route1}).addTo(map);
    //to engineering 
    var hrm = L.marker ([-29.871611, 48.427734], {icon:route1}).addTo(map);
    var engineering1 = L.marker ([-29.795368, 66.357422], {icon:route1}).addTo(map);
    //ENGINEEERING
    var engineering2 = L.marker ([-29.413283, 79.628906], {icon:route1}).addTo(map);
    
    
    //location markers
    
    
    var marker_1 = L.marker ([-15.792276, -98.744214]).addTo(map);
    marker_1.bindPopup('BACK ENTRANCE'); //UE ENTRANCE
    
    var marker_2 = L.marker ([9.709057, -77.211914]).addTo(map); //UE GYMNASIUM
    marker_2.bindPopup('UE GYMNASIUM');
    
    var marker_3 = L.marker ([28.767659, -58.491211]).addTo(map); //FINE ARTS
    marker_3.bindPopup('OLD FINE ARTS BUILDING');
    
    var marker_4 = L.marker ([14.008696, -55.415039]).addTo(map); // GAZEEBO
    marker_4.bindPopup('GAZEEBO');
    
    var marker_5 = L.marker ([32.916485, -26.938477]).addTo(map); // SAO
    marker_5.bindPopup('SAO');
    
    var marker_6 = L.marker ([32.916485, -19.731445]).addTo(map); // IT DEPARTMENT
    marker_6.bindPopup('IT DEPARTMENT');
    
    var marker_7 = L.marker ([32.10119, -12.436452]).addTo(map); // GUIDANCE
    marker_7.bindPopup('GUIDANCE');
    
    var marker_8 = L.marker ([31.802893, -4.96582]).addTo(map); // WAY POINT 1
    marker_8.bindPopup('WAY POINT 1');
    
    var marker_9 = L.marker ([-8.35554, -54.316406]).addTo(map); // WAY POINT 1
    marker_9.bindPopup('ADMINSTRATION BUILDING');
    
    var marker_10 = L.marker ([6.367164, 79.365234],{icon:ceng}).addTo(map); // WAY POINT 1
    marker_10.bindPopup('COLLEGE OF ENGINEERING OFFICE');
    
    var marker_11 = L.marker ([33.033996, 38.979492],{icon:bed}).addTo(map); // WAY POINT 1
    marker_11.bindPopup('LUCIO C. TAN BUILDING');
    
    
    
    var marker_12 = L.marker ([-27.658954, -38.603757],{icon:cfad}).addTo(map); // WAY POINT 1
    marker_12.bindPopup('COLLEGE OF FINE ARTS, ARCHITECTURE AND DESIGNS');
    
    var marker_13 = L.marker ([-32.798819, -14.194336],{icon:cba}).addTo(map); // WAY POINT 1
    marker_13.bindPopup('COLLEGE OF BUSINESS ADMINISTRATION');
    
    var marker_14 = L.marker ([-33.240985, 16.655273] ,{icon:cas}).addTo(map); // WAY POINT 1
    marker_14.bindPopup('COLLEGE OF ARTS AND SCIENCES');

    var marker_15 = L.marker ([-38.32873, -51.679688]).addTo(map); // WAY POINT 1
    marker_15.bindPopup('FRONT GATE ENTRANCE');
    

    
var marker_16 = L.marker ([-32.798819, 48.647461]).addTo(map); // WAY POINT 1
marker_16.bindPopup('HRM');
}

var path_0 = L.marker ([-18.812718, -85.12207], {icon:route1}).addTo(map); //INTEGRATION OF PHP IN JAVASCRIPT USING THE LATITUDE AND LONGTITUDE
var path_0a = L.marker ([10.487812, -75.014648], {icon:route1}).addTo(map);
var path_1 = L.marker ([15.623037, -65.126953], {icon:route1}).addTo(map);
var path_2 = L.marker ([21.043491, -55.019531], {icon:route1}).addTo(map);
var path_3 = L.marker ([30.977609, -33.398438], {icon:route1}).addTo(map);
var path_3a = L.marker ([33.28462, -33.134766], {icon:route1}).addTo(map);
var path_3b = L.marker ([31.203405, 0.834961], {icon:route1}).addTo(map);
var path_4 = L.marker ([34.646488, 1.237365], {icon:route1}).addTo(map);
var path_4a = L.marker ([33.986641, 11.206055], {icon:route1}).addTo(map);
var path_4b = L.marker ([30.038189, 11.030273], {icon:route1}).addTo(map);
//lct
var path_4c = L.marker ([28.427609, 38.364124], {icon:route1}).addTo(map);

//GOING TO COE
var path_4d = L.marker ([26.635184, 64.555664], {icon:route1}).addTo(map);
var path_4e = L.marker ([29.657029, 64.819336], {icon:route1}).addTo(map);
var path_5 = L.marker ([28.659261, 79.40918], {icon:route1}).addTo(map);




//GOING TO ADMIN BUILDING
var admin_a = L.marker ([-3.461333, -50.537109], {icon:route1}).addTo(map);
var admin_b = L.marker ([-13.445719, -42.802716], {icon:route1}).addTo(map);
var admin_c = L.marker ([-18.92967, -39.638672], {icon:route1}).addTo(map);
var admin_d = L.marker ([-23.998799, -34.277344], {icon:route1}).addTo(map);
var admin_e = L.marker ([-28.798953, -28.300781], {icon:route1}).addTo(map);
//tyk
var admin_f = L.marker ([-29.106576, -13.974609], {icon:route1}).addTo(map);
var admin_g = L.marker ([-30.09999, 16.171875], {icon:route1}).addTo(map);
//to engineering 
var hrm = L.marker ([-29.871611, 48.427734], {icon:route1}).addTo(map);
var engineering1 = L.marker ([-29.795368, 66.357422], {icon:route1}).addTo(map);
//ENGINEEERING
var engineering2 = L.marker ([-29.413283, 79.628906], {icon:route1}).addTo(map);


//location markers


var marker_1 = L.marker ([-15.792276, -98.744214]).addTo(map);
marker_1.bindPopup('BACK ENTRANCE'); //UE ENTRANCE

var marker_2 = L.marker ([9.709057, -77.211914]).addTo(map); //UE GYMNASIUM
marker_2.bindPopup('UE GYMNASIUM');

var marker_3 = L.marker ([28.767659, -58.491211]).addTo(map); //FINE ARTS
marker_3.bindPopup('OLD FINE ARTS BUILDING');

var marker_4 = L.marker ([14.008696, -55.415039]).addTo(map); // GAZEEBO
marker_4.bindPopup('GAZEEBO');

var marker_5 = L.marker ([32.916485, -26.938477]).addTo(map); // SAO
marker_5.bindPopup('STUDENT AFFAIRS OFFICE');

var marker_6 = L.marker ([32.916485, -19.731445]).addTo(map); // IT DEPARTMENT
marker_6.bindPopup('IT DEPARTMENT');

var marker_7 = L.marker ([32.10119, -12.436452]).addTo(map); // GUIDANCE
marker_7.bindPopup('GUIDANCE');

var marker_8 = L.marker ([31.802893, -4.96582]).addTo(map); // WAY POINT 1
marker_8.bindPopup('WAY POINT 1');

var marker_9 = L.marker ([-8.35554, -54.316406]).addTo(map); // WAY POINT 1
marker_9.bindPopup('ADMINSTRATION BUILDING');

var marker_10 = L.marker ([6.367164, 79.365234],{icon:ceng }).addTo(map); // WAY POINT 1
marker_10.bindPopup('COLLEGE OF ENGINEERING OFFICE');

var marker_11 = L.marker ([33.033996, 38.979492],{icon:bed}).addTo(map); // WAY POINT 1
marker_11.bindPopup('LUCIO C. TAN BUILDING');



var marker_12 = L.marker ([-27.658954, -38.603757],{icon:cfad}).addTo(map); // WAY POINT 1
marker_12.bindPopup('COLLEGE OF FINE ARTS, ARCHITECTURE AND DESIGNS');

var marker_13 = L.marker ([-32.798819, -14.194336],{icon:cba}).addTo(map); // WAY POINT 1
marker_13.bindPopup('COLLEGE OF BUSINESS ADMINISTRATION');

var marker_14 = L.marker ([-33.240985, 16.655273] ,{icon:cas}).addTo(map); // WAY POINT 1
marker_14.bindPopup('COLLEGE OF ARTS AND SCIENCES');


var marker_15 = L.marker ([-38.32873, -51.679688]).addTo(map); // WAY POINT 1
marker_15.bindPopup('FRONT GATE ENTRANCE');

var marker_16 = L.marker ([-32.798819, 48.647461]).addTo(map); // WAY POINT 1
marker_16.bindPopup('HRM');



function getSelectedOption() {
    
var dropdown = document.querySelector('.StartPoint');
var dropdown1 = document.querySelector('.EndPoint');
var selectedOption = dropdown.options[dropdown.selectedIndex].text;
var selectedOption1 = dropdown1.options[dropdown1.selectedIndex].text;




var latlngs = null;
var polyline = null;
var redMarker = null;
function clearMapAndAddPolyline(latlngs) {
// Clear existing polylines and markers
map.eachLayer(function (layer) {
if (layer instanceof L.Polyline || layer instanceof L.Marker ) {
map.removeLayer(layer);

}
});

var polyline = L.polyline(latlngs).addTo(map);
var startMarker = L.marker(polyline.getLatLngs()[0],{icon:start_point}).addTo(map);
var endMarker = L.marker(polyline.getLatLngs()[polyline.getLatLngs().length - 1],{icon:end_point}).addTo(map);

// Remove the old redMarker if it exists
if (redMarker !== null) {
redMarker.remove();
redMarker = null;
}else{
    show_markers();
redMarker = L.Marker.movingMarker(polyline.getLatLngs(), 9000, {
    autostart: true,
    loop: true,
    icon: walk_man
    }).addTo(map);
}
spline(latLngs);}





if (selectedOption === 'SELECT YOUR LOCATION' && selectedOption1 == 'SELECT YOUR END POINT LOCATION' ) {

} else if (selectedOption === 'UE GYM' && selectedOption1 == 'BACK ENTRANCE' ) { //BACK ENTRANCE TO UE GYM

latlngs = [
marker_1.getLatLng(),
path_0.getLatLng(),
path_0a.getLatLng(),
marker_2.getLatLng()];

alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
clearMapAndAddPolyline(latlngs);


}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'BACK ENTRANCE' ) {

latlngs = [
marker_1.getLatLng(),
path_0.getLatLng(),
path_0a.getLatLng(),
path_1.getLatLng(),
path_2.getLatLng(),
marker_3.getLatLng()
];

alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
clearMapAndAddPolyline(latlngs);



}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'BACK ENTRANCE' ) {

latlngs = [
marker_1.getLatLng(),
path_0.getLatLng(),
path_0a.getLatLng(),
path_1.getLatLng(),
admin_a.getLatLng(),
marker_9.getLatLng()
];
alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
clearMapAndAddPolyline(latlngs);


}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'BACK ENTRANCE' ) {
    latlngs = [
        marker_1.getLatLng(),
        path_0.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        path_2.getLatLng(),
        path_3.getLatLng(),
        path_3a.getLatLng(),
        marker_5.getLatLng()
        ];
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        

}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'BACK ENTRANCE') {
    latlngs = [
        marker_1.getLatLng(),
        path_0.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        path_2.getLatLng(),
        path_3.getLatLng(),
        path_3a.getLatLng(),
        marker_6.getLatLng()
        ];
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        

}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'BACK ENTRANCE') {
    latlngs = [
        marker_1.getLatLng(),
        path_0.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        path_2.getLatLng(),
        path_3.getLatLng(),
        path_3a.getLatLng(),
        marker_7.getLatLng()
        ];
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        

}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'BACK ENTRANCE') {
    latlngs = [
        marker_1.getLatLng(),
        path_0.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        path_2.getLatLng(),
        path_3.getLatLng(),
        path_3a.getLatLng(),
        path_3b.getLatLng(),
        path_4.getLatLng(),
        path_4a.getLatLng(),
        path_4b.getLatLng(),
        path_4c.getLatLng(),
        marker_11.getLatLng()
        ];
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        

}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'BACK ENTRANCE' ) {

    latlngs = [
    marker_1.getLatLng(),
    path_0.getLatLng(),
    path_0a.getLatLng(),
    path_1.getLatLng(),
    admin_a.getLatLng(),
    admin_b.getLatLng(),
    admin_c.getLatLng(),
    admin_d.getLatLng(),
    marker_12.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
    
    
}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'BACK ENTRANCE' ) {

    latlngs = [
    marker_1.getLatLng(),
    path_0.getLatLng(),
    path_0a.getLatLng(),
    path_1.getLatLng(),
    admin_a.getLatLng(),
    admin_b.getLatLng(),
    admin_c.getLatLng(),
    admin_d.getLatLng(),
    admin_e.getLatLng(),
    admin_f.getLatLng(),
    marker_13.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
    
    
}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'BACK ENTRANCE' ) {

        latlngs = [
        marker_1.getLatLng(),
        path_0.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        admin_a.getLatLng(),
        admin_b.getLatLng(),
        admin_c.getLatLng(),
        admin_d.getLatLng(),
        admin_e.getLatLng(),
        admin_f.getLatLng(),
       admin_g.getLatLng(),
       marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        
        
}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'BACK ENTRANCE' ) {

            latlngs = [
            marker_1.getLatLng(),
            path_0.getLatLng(),
            path_0a.getLatLng(),
            path_1.getLatLng(),
            admin_a.getLatLng(),
            admin_b.getLatLng(),
            admin_c.getLatLng(),
            admin_d.getLatLng(),
            admin_e.getLatLng(),
            admin_f.getLatLng(),
           admin_g.getLatLng(),
            hrm.getLatLng(),
            engineering1.getLatLng(),
            engineering2.getLatLng()
            ];
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);
            
            
}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'BACK ENTRANCE' ) {

                latlngs = [
                marker_1.getLatLng(),
                path_0.getLatLng(),
                path_0a.getLatLng(),
                path_1.getLatLng(),
                admin_a.getLatLng(),
                admin_b.getLatLng(),
                admin_c.getLatLng(),
                admin_d.getLatLng(),
                admin_e.getLatLng(),
                admin_f.getLatLng(),
               admin_g.getLatLng(),
                hrm.getLatLng(),
                engineering1.getLatLng(),
                engineering2.getLatLng(),
                marker_10.getLatLng()
                ];
                alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
                clearMapAndAddPolyline(latlngs);
                
                
}else if (selectedOption === 'UE GYM' && selectedOption1 == 'FRONT ENTRANCE' ){
    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [15.673288, -64.907227],
        [10.366257, -74.926758],
        marker_2.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if(selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'FRONT ENTRANCE' ){
    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [15.673288, -64.907227],
       [21.092188, -54.931641],
       marker_3.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if(selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'FRONT ENTRANCE' ){
    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [-3.777991, -50.490164],
        marker_9.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
 }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'FRONT ENTRANCE') {
  

    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [16.095959, -65.214844],
        [30.796115, -33.222656],
        [33.181238, -33.134766],
        marker_6.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'FRONT ENTRANCE') {
  

    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [16.095959, -65.214844],
        [30.796115, -33.222656],
        [33.181238, -33.134766],
        marker_6.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'FRONT ENTRANCE') {
  

    latlngs = [
        marker_15.getLatLng(),
        [-24.238406, -34.222798],
        admin_c.getLatLng(),
        admin_b.getLatLng(),
        [16.095959, -65.214844],
        [30.796115, -33.222656],
        [33.181238, -33.134766],
        marker_7.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'FRONT ENTRANCE') {
  

        latlngs = [
            marker_15.getLatLng(),
            [-24.238406, -34.222798],
            admin_c.getLatLng(),
            admin_b.getLatLng(),
            [16.095959, -65.214844],
            [30.796115, -33.222656],
            [33.181238, -33.134766],
            [30.871583, 0.74707],
            [34.784483, 1.186523],
            [33.913734, 11.293945],
            [30.038189, 11.030273],
            [28.118016, 38.540039],
            marker_11.getLatLng()
            ];
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'FRONT ENTRANCE' ){
 
    latlngs = [
        marker_15.getLatLng(),
        
        marker_12.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'FRONT ENTRANCE' ){
 
    latlngs = [
        marker_15.getLatLng(),
        marker_12.getLatLng(),
        [-23.918481, -34.321289],
        [-28.798953, -28.344727],
        [-29.260045, -14.018555],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'FRONT ENTRANCE' ){
 
    latlngs = [
        marker_15.getLatLng(),
        marker_12.getLatLng(),
        [-23.918481, -34.321289],
        [-28.798953, -28.344727],
        [-29.260045, -14.018555],
       [-29.947795, 16.12793],
       marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'FRONT ENTRANCE' ){
 
    latlngs = [
        marker_15.getLatLng(),
        marker_12.getLatLng(),
        [-23.918481, -34.321289],
        [-28.798953, -28.344727],
        [-29.260045, -14.018555],
       [-29.947795, 16.12793],
        [-29.871611, 66.137695],
        [-29.719067, 79.848633]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'FRONT ENTRANCE' ){
 
    latlngs = [
        marker_15.getLatLng(),
        marker_12.getLatLng(),
        [-23.918481, -34.321289],
        [-28.798953, -28.344727],
        [-29.260045, -14.018555],
         [-29.947795, 16.12793],
        [-29.871611, 66.137695],
        [-29.719067, 79.848633],
        marker_10.getLatLng()
        ];

        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
 }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'FRONT ENTRANCE' ){
 
        latlngs = [
            marker_15.getLatLng(),
            marker_12.getLatLng(),
            [-23.918481, -34.321289],
            [-28.798953, -28.344727],
            [-29.260045, -14.018555],
             [-29.947795, 16.12793],
            [-29.413283, 48.383789],
            marker_16.getLatLng()
          
            ];
    
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);
        
 }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'BACK ENTRANCE' ){
 
            latlngs = [
                marker_1.getLatLng(),
                path_0.getLatLng(),
                path_0a.getLatLng(),
                path_1.getLatLng(),
                admin_a.getLatLng(),
                admin_b.getLatLng(),
                admin_c.getLatLng(),
                admin_d.getLatLng(),
                admin_e.getLatLng(),
                admin_f.getLatLng(),
               admin_g.getLatLng(),
                hrm.getLatLng(),
                marker_16.getLatLng()
                ];
        
                alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
                clearMapAndAddPolyline(latlngs);
            
 }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'UE GYM' ){
 
    latlngs = [
       
        marker_2.getLatLng(),
        path_0a.getLatLng(),
        path_1.getLatLng(),
        path_2.getLatLng(),
        marker_3.getLatLng()
        ];
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
        
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
           
            marker_2.getLatLng(),
            path_0a.getLatLng(),
            path_1.getLatLng(),
            [-3.549059, -50.405273],
            marker_9.getLatLng()
            ];
            
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);
            
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
           
            marker_2.getLatLng(),
            path_0a.getLatLng(),
            [30.946991, -33.354492],
            [33.328233, -33.178711],
            marker_5.getLatLng()
            ];
            
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);
            
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'UE GYM' ){
     
            latlngs = [
               
                marker_2.getLatLng(),
                path_0a.getLatLng(),
                [30.946991, -33.354492],
                [33.328233, -33.178711],
                marker_6.getLatLng()
                ];
                
                alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
                clearMapAndAddPolyline(latlngs);
                
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'UE GYM' ){
     
                latlngs = [
                   
                    marker_2.getLatLng(),
                    path_0a.getLatLng(),
                    [30.946991, -33.354492],
                    [33.328233, -33.178711],
                    marker_7.getLatLng()
                    ];
                    
                    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
                    clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'UE GYM' ){
     
            latlngs = [
                       
            marker_2.getLatLng(),
            [30.946991, -33.354492],
            [33.328233, -33.178711],
    
            [31.24803, 0.834961],
            [34.712267, 1.186523],
            [34.132268, 11.206055],
            [30.190244, 10.942383],
            [28.504902, 38.452148],
            marker_11.getLatLng()
            ];
                        
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'UE GYM' ){
     
            latlngs = [
            marker_2.getLatLng(),
            [15.926997, -65.258789],
            [-13.616625, -42.495117],
            [-19.095862, -39.594727],
            [-23.998799, -34.40918],
            marker_12.getLatLng()
            ];
            alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
            clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
        marker_2.getLatLng(),
        [15.926997, -65.258789],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
        marker_2.getLatLng(),
        [15.926997, -65.258789],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
        marker_2.getLatLng(),
        [15.926997, -65.258789],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.642708, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
        marker_2.getLatLng(),
        [15.926997, -65.258789],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.642708, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'UE GYM' ){
     
        latlngs = [
        marker_2.getLatLng(),
        [15.926997, -65.258789],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.175999, 16.391602],
        [-29.489816, 48.383789],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [10.366257, -75.102539],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [15.419263, -65.43457],
        [-3.724486, -50.668945],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [31.24803, -33.266602],
        [33.328233, -33.178711],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [31.24803, -33.266602],
        [33.328233, -33.178711],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [31.24803, -33.266602],
        [33.328233, -33.178711],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [31.24803, -33.266602],
        [33.328233, -33.178711],
    
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [15.503972, -65.258789],
        [-3.724486, -50.668945],
        [-13.360227, -42.758789],
        [-18.92967, -39.506836],
        [-23.838113, -34.233398],
        marker_12.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [15.503972, -65.258789],
        [-3.724486, -50.668945],
        [-13.360227, -42.758789],
        [-18.92967, -39.506836],
        [-23.838113, -34.233398],
        [-28.6448, -28.256836],
        [-29.106576, -14.018555],
        marker_13.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [15.503972, -65.258789],
        [-3.724486, -50.668945],
        [-13.360227, -42.758789],
        [-18.92967, -39.506836],
        [-23.838113, -34.233398],
        [-28.6448, -28.256836],
        [-29.106576, -14.018555],
        [-29.947795, 16.12793],
        marker_14.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [21.174168, -54.975586],
        [30.946991, -33.354492],
        [33.328233, -33.178711],
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.350317, 38.452148],
        [26.870631, 64.467773],
        [29.733377, 64.731445],
        [28.890374, 79.49707]
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [21.174168, -54.975586],
        [30.946991, -33.354492],
        [33.328233, -33.178711],
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.350317, 38.452148],
        [26.870631, 64.467773],
        [29.733377, 64.731445],
        [28.890374, 79.49707],
        marker_10.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
     
        latlngs = [
                   
        marker_3.getLatLng(),
        [20.928093, -55.063477],
        [15.503972, -65.258789],
        [-3.724486, -50.668945],
        [-13.360227, -42.758789],
        [-18.92967, -39.506836],
        [-23.838113, -34.233398],
        [-28.6448, -28.256836],
        [-29.106576, -14.018555],
        [-29.947795, 16.12793],
        [-29.566291, 48.383789],
        marker_16.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [10.366257, -75.102539],
        [10.539121, -75.102539],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [21.010163, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [31.09763, -33.530273],
        [33.254767, -33.00293],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [31.09763, -33.530273],
        [33.254767, -33.00293],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [31.09763, -33.530273],
        [33.254767, -33.00293],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
                   
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [15.588648, -65.083008],
        [31.09763, -33.530273],
        [33.328233, -33.178711],
    
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        marker_12.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.642708, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.581055],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.642708, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
     
        latlngs = [
        marker_9.getLatLng(),
        [-3.373598, -50.493164],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.442383],
        [10.625517, -75.19043],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.442383],
        [21.174168, -55.151367],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.442383],
        [21.174168, -55.151367],
        [15.673288, -65.258789],
        [-3.636777, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        marker_12.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        marker_13.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        marker_14.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289]
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
                   
        marker_5.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        marker_10.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
     
        latlngs = [
        marker_5.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [10.452701, -75.014648],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [21.092188, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [21.092188, -55.063477],
        [15.588648, -64.995117],
        [-3.549059, -50.756836],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        marker_12.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        marker_13.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        marker_14.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289]
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
                   
        marker_6.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        marker_10.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'IT DEPARTMENT' ){
     
        latlngs = [
        marker_6.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [10.452701, -75.014648],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [21.092188, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.107648, -33.178711],
        [30.946991, -33.354492],
        [21.092188, -55.063477],
        [15.588648, -64.995117],
        [-3.549059, -50.756836],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        marker_12.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        marker_13.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        marker_14.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289]
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
                   
        marker_7.getLatLng(),
        [31.24803, 0.922852],
        [34.856637, 1.274414],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        marker_10.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'GUIDANCE' ){
     
        latlngs = [
        marker_7.getLatLng(),
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        [-28.721905, -28.168945],
        [-28.952879, -14.018555],
        [-30.09999, 16.303711],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        [33.328233, -33.178711],
        [30.946991, -33.354492],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        [33.328233, -33.178711],
        [30.946991, -33.354492],
        [21.092188, -55.151367],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        [33.328233, -33.178711],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-3.549059, -50.668945],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [29.962073, 10.678711],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.712267, 1.186523],
        [31.32314, 0.834961],
        [33.328233, -33.09082],
        [30.946991, -33.354492],
        [15.673288, -65.170898],
        [-13.616625, -42.495117],
        [-19.095862, -39.594727],
        [-23.998799, -34.40918],
        marker_12.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        [-29.336693, 79.672852],
        [-29.871611, 16.040039],
        [-28.875945, -14.018555],
        marker_13.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        [-29.336693, 79.672852],
        [-29.871611, 16.040039],
        marker_14.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289]
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        marker_10.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
     
        latlngs = [
                   
        marker_11.getLatLng(),
        [28.350317, 38.452148],
        [26.71372, 64.555664],
        [29.809668, 64.907227],
        [28.813393, 79.321289],
        [-29.336693, 79.672852],
        [-29.566291, 48.383789],
        marker_16.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [10.539121, -74.926758],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        [15.673288, -65.170898],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        [15.673288, -65.170898],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        [15.673288, -65.170898],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
                   
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.844727],
        [15.588648, -65.083008],
        [31.09763, -33.530273],
        [33.328233, -33.266602],
    
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-28.567638, -28.344727],
        [-29.106576, -13.930664],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-28.567638, -28.344727],
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-28.567638, -28.344727],
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.413283, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-28.567638, -28.344727],
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     
        latlngs = [
        marker_12.getLatLng(),
        [-23.838113, -34.321289],
        [-28.567638, -28.344727],
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [10.539121, -74.926758],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
                   
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.413283, 79.672852],
        [28.813393, 79.40918],
        [29.733377, 64.819336],
        [26.71372, 64.467773],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        marker_12.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        marker_14.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.413283, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION' ){
     
        latlngs = [
        marker_13.getLatLng(),
        [-29.106576, -13.930664],
        [-29.947795, 16.21582],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [10.539121, -74.926758],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
                   
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.413283, 79.672852],
        [28.813393, 79.40918],
        [29.733377, 64.819336],
        [26.71372, 64.467773],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        marker_12.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.413283, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES' ){
     
        latlngs = [
        marker_14.getLatLng(),
        [-29.947795, 16.21582],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.642708, 79.672852],
        [-30.09999, 16.303711],
        [-28.952879, -14.018555],
        [-28.721905, -28.168945],
        [-23.998799, -34.40918],
        [-19.095862, -39.594727],
        [-13.616625, -42.495117],
        [15.926997, -65.258789],
        marker_2.getLatLng(),
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
               
        [28.890374, 79.49707],
        [29.733377, 64.731445],
        [26.870631, 64.467773],
        [28.350317, 38.452148],
        [30.190244, 10.942383],
        [34.132268, 11.206055],   
        [34.856637, 1.274414], 
        [31.24803, 0.922852], 
        [33.328233, -33.178711], 
        [30.946991, -33.354492], 
        [21.174168, -54.975586],
        marker_3.getLatLng(),
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
                   
        [-29.642708, 79.672852],
        [-30.09999, 16.303711],
        [-28.952879, -14.018555],
        [-28.721905, -28.168945],
        [-23.998799, -34.40918],
        [-19.095862, -39.594727],
        [-13.616625, -42.495117],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
                   
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_5.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
                   
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_6.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
                   
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_7.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
                   
        [28.813393, 79.321289],
        [29.809668, 64.907227],
        [26.71372, 64.555664],
        [28.350317, 38.452148],
        marker_11.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        marker_12.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        marker_13.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        marker_14.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF ENGINEERING' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        marker_10.getLatLng(),
        [-29.642708, 79.672852],
        [-30.09999, 16.303711],
        [-28.952879, -14.018555],
        [-28.721905, -28.168945],
        [-23.998799, -34.40918],
        [-19.095862, -39.594727],
        [-13.616625, -42.495117],
        [15.926997, -65.258789],
        marker_2.getLatLng(),
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        
        marker_10.getLatLng(),
        [28.890374, 79.49707],
        [29.733377, 64.731445],
        [26.870631, 64.467773],
        [28.350317, 38.452148],
        [30.190244, 10.942383],
        [34.132268, 11.206055],   
        [34.856637, 1.274414], 
        [31.24803, 0.922852], 
        [33.328233, -33.178711], 
        [30.946991, -33.354492], 
        [21.174168, -54.975586],
        marker_3.getLatLng(),
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
                   
        marker_10.getLatLng(),
        [-29.642708, 79.672852],
        [-30.09999, 16.303711],
        [-28.952879, -14.018555],
        [-28.721905, -28.168945],
        [-23.998799, -34.40918],
        [-19.095862, -39.594727],
        [-13.616625, -42.495117],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
                   
        marker_10.getLatLng(),
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_5.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
                   
        marker_10.getLatLng(),
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_6.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
                   
        marker_10.getLatLng(),
        [28.813393, 79.321289],
        [29.809668, 64.907227],    
        [26.71372, 64.555664],
        [30.190244, 10.942383],
        [34.132268, 11.206055],
        [34.856637, 1.274414],
        [31.24803, 0.922852],
        marker_7.getLatLng()
        ];    
        
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
                   
        marker_10.getLatLng(),
        [28.813393, 79.321289],
        [29.809668, 64.907227],
        [26.71372, 64.555664],
        [28.350317, 38.452148],
        marker_11.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
                    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        marker_10.getLatLng(),
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        marker_12.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        marker_10.getLatLng(),
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        marker_13.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        marker_10.getLatLng(),
        [-29.413283, 79.672852],
        [-29.947795, 16.21582],
        marker_14.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF ENGINEERING(OFFICE)' ){
     
        latlngs = [
        marker_10.getLatLng(),
        [-29.413283, 79.672852],
        [-29.566291, 48.47168],
        marker_16.getLatLng()
        ];
    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'UE GYM' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [10.539121, -74.926758],
        marker_2.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        marker_3.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [-3.373598, -50.581055],
        marker_9.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_5.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_6.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        [-18.763313, -39.682617],
        [-13.2747, -42.758789],
        [15.673288, -65.170898],
        [21.174168, -55.063477],
        [31.09763, -33.442383],
        [33.401638, -33.178711],
        marker_7.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);
    
    }else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
                   
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.413283, 79.672852],
        [28.813393, 79.40918],
        [29.733377, 64.819336],
        [26.71372, 64.467773],
        [28.504902, 38.452148],
        marker_11.getLatLng()
        ];
                    
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
    
    }else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        [-28.567638, -28.344727],
        [-23.838113, -34.321289],
        marker_12.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.947795, 16.21582],
        [-29.106576, -13.930664],
        marker_13.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.413283, 79.672852]
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'HOTEL AND RESTAURANT MANAGEMENT' ){
     
        latlngs = [
        marker_16.getLatLng(),
        [-29.566291, 48.47168],
        [-29.413283, 79.672852],
        marker_10.getLatLng()
        ];
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);    
    
    }
    
    else if (selectedOption === 'UE GYM' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [10.366257, -75.102539],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [15.419263, -65.43457],
    [-3.724486, -50.668945],
    marker_9.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [31.24803, -33.266602],
    [33.328233, -33.178711],
    marker_5.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [31.24803, -33.266602],
    [33.328233, -33.178711],
    marker_6.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [31.24803, -33.266602],
    [33.328233, -33.178711],
    marker_7.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [31.24803, -33.266602],
    [33.328233, -33.178711],

    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [29.962073, 10.678711],
    [28.350317, 38.452148],
    marker_11.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [15.503972, -65.258789],
    [-3.724486, -50.668945],
    [-13.360227, -42.758789],
    [-18.92967, -39.506836],
    [-23.838113, -34.233398],
    marker_12.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [15.503972, -65.258789],
    [-3.724486, -50.668945],
    [-13.360227, -42.758789],
    [-18.92967, -39.506836],
    [-23.838113, -34.233398],
    [-28.6448, -28.256836],
    [-29.106576, -14.018555],
    marker_13.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [15.503972, -65.258789],
    [-3.724486, -50.668945],
    [-13.360227, -42.758789],
    [-18.92967, -39.506836],
    [-23.838113, -34.233398],
    [-28.6448, -28.256836],
    [-29.106576, -14.018555],
    [-29.947795, 16.12793],
    marker_14.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [21.174168, -54.975586],
    [30.946991, -33.354492],
    [33.328233, -33.178711],
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [28.350317, 38.452148],
    [26.870631, 64.467773],
    [29.733377, 64.731445],
    [28.890374, 79.49707]
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [21.174168, -54.975586],
    [30.946991, -33.354492],
    [33.328233, -33.178711],
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [28.350317, 38.452148],
    [26.870631, 64.467773],
    [29.733377, 64.731445],
    [28.890374, 79.49707],
    marker_10.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'OLD FINE ARTS BUILDING' ){
 
    latlngs = [
               
    marker_3.getLatLng(),
    [20.928093, -55.063477],
    [15.503972, -65.258789],
    [-3.724486, -50.668945],
    [-13.360227, -42.758789],
    [-18.92967, -39.506836],
    [-23.838113, -34.233398],
    [-28.6448, -28.256836],
    [-29.106576, -14.018555],
    [-29.947795, 16.12793],
    [-29.566291, 48.383789],
    marker_16.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'UE GYM' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [10.366257, -75.102539],
    [10.539121, -75.102539],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [21.010163, -55.063477],
    marker_3.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [31.09763, -33.530273],
    [33.254767, -33.00293],
    marker_5.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [31.09763, -33.530273],
    [33.254767, -33.00293],
    marker_6.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [31.09763, -33.530273],
    [33.254767, -33.00293],
    marker_7.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
               
    marker_9.getLatLng(),
    [-3.373598, -50.844727],
    [15.588648, -65.083008],
    [31.09763, -33.530273],
    [33.254767, -33.00293],

    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [29.962073, 10.678711],
    [28.350317, 38.452148],
    marker_11.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    marker_12.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    marker_13.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    marker_14.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.642708, 79.672852]
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.642708, 79.672852],
    marker_10.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'ADMINISTRATION BUILDING' ){
 
    latlngs = [
    marker_9.getLatLng(),
    [-3.373598, -50.493164],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.566291, 48.47168],
    marker_16.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'UE GYM' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.442383],
    [10.625517, -75.19043],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.442383],
    [21.174168, -55.151367],
    marker_3.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.442383],
    [21.174168, -55.151367],
    [15.673288, -65.258789],
    [-3.636777, -50.581055],
    marker_9.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    marker_6.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    marker_7.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [29.962073, 10.678711],
    [28.350317, 38.452148],
    marker_11.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    marker_12.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    marker_13.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    marker_14.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289]
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
               
    marker_5.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    marker_10.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'STUDENT AFFAIRS OFFICE' ){
 
    latlngs = [
    marker_5.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.566291, 48.47168],
    marker_16.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'UE GYM' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [10.452701, -75.014648],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [21.092188, -55.063477],
    marker_3.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [21.092188, -55.063477],
    [15.588648, -64.995117],
    [-3.549059, -50.756836],
    marker_9.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    marker_5.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    marker_7.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [29.962073, 10.678711],
    [28.350317, 38.452148],
    marker_11.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    marker_12.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    marker_13.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    marker_14.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289]
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
               
    marker_6.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    marker_10.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'IT DEPARTMENT' ){
 
    latlngs = [
    marker_6.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.566291, 48.47168],
    marker_16.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'UE GYM' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [10.452701, -75.014648],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [21.092188, -55.063477],
    marker_3.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.107648, -33.178711],
    [30.946991, -33.354492],
    [21.092188, -55.063477],
    [15.588648, -64.995117],
    [-3.549059, -50.756836],
    marker_9.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    marker_5.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    marker_6.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [29.962073, 10.678711],
    [28.350317, 38.452148],
    marker_11.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    marker_12.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    marker_13.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    marker_14.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289]
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
               
    marker_7.getLatLng(),
    [31.24803, 0.922852],
    [34.856637, 1.274414],
    [34.132268, 11.206055],
    [30.190244, 10.942383],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    marker_10.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);

}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'GUIDANCE' ){
 
    latlngs = [
    marker_7.getLatLng(),
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    [-28.721905, -28.168945],
    [-28.952879, -14.018555],
    [-30.09999, 16.303711],
    [-29.566291, 48.47168],
    marker_16.getLatLng()
    ];
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);    

}else if (selectedOption === 'UE GYM' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    [33.328233, -33.178711],
    [30.946991, -33.354492],
    marker_2.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    [33.328233, -33.178711],
    [30.946991, -33.354492],
    [21.092188, -55.151367],
    marker_3.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    [33.328233, -33.178711],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-3.549059, -50.668945],
    marker_9.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    marker_5.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    marker_6.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [29.962073, 10.678711],
    [34.132268, 11.206055],
    [34.856637, 1.274414],
    [31.24803, 0.922852],
    marker_7.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [30.190244, 10.942383],
    [34.132268, 11.206055],
    [34.712267, 1.186523],
    [31.32314, 0.834961],
    [33.328233, -33.09082],
    [30.946991, -33.354492],
    [15.673288, -65.170898],
    [-13.616625, -42.495117],
    [-19.095862, -39.594727],
    [-23.998799, -34.40918],
    marker_12.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    [-29.336693, 79.672852],
    [-29.871611, 16.040039],
    [-28.875945, -14.018555],
    marker_13.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    [-29.336693, 79.672852],
    [-29.871611, 16.040039],
    marker_14.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289]
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    marker_10.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'LUCIO C. TAN BUILDING' ){
 
    latlngs = [
               
    marker_11.getLatLng(),
    [28.350317, 38.452148],
    [26.71372, 64.555664],
    [29.809668, 64.907227],
    [28.813393, 79.321289],
    [-29.336693, 79.672852],
    [-29.566291, 48.383789],
    marker_16.getLatLng()
    ];
                
    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
    clearMapAndAddPolyline(latlngs);
                
}

else if (selectedOption === 'UE GYM' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
     latlngs = [
                   
                    marker_12.getLatLng(),
                   [-23.998799, -34.321289],
                   [-18.846513, -39.682617],
                   [-13.360227, -42.670898],
                   [-13.360227, -42.670898],
                   [15.334518, -65.170898],
                   [10.539121, -75.014648],
                   marker_2.getLatLng()
                    ]; 
                    alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
                    clearMapAndAddPolyline(latlngs);
                    
 }else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
    latlngs = [
                   
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-13.360227, -42.670898],
       [15.334518, -65.170898],
       [21.010163, -54.975586],
       marker_3.getLatLng()
     
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
                
                   
}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
    latlngs = [
                   
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-3.549059, -50.493164],
       marker_9.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
                                 
}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
    latlngs = [
                   
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-13.360227, -42.670898],
       [15.334518, -65.170898],
       [16.095959, -65.214844],
       [30.796115, -33.222656],
       [33.181238, -33.134766],
       marker_5.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
                                 
}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
    latlngs = [
                   
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-13.360227, -42.670898],
       [15.334518, -65.170898],
       [16.095959, -65.214844],
       [30.796115, -33.222656],
       [33.181238, -33.134766],
       marker_6.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
                                 
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....' ){
    latlngs = [
                   
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-13.360227, -42.670898],
       [15.334518, -65.170898],
       [16.095959, -65.214844],
       [30.796115, -33.222656],
       [33.181238, -33.134766],
       marker_7.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);                                 
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
        marker_12.getLatLng(),
       [-23.998799, -34.321289],
       [-18.846513, -39.682617],
       [-13.360227, -42.670898],
       [-13.360227, -42.670898],
       [15.334518, -65.170898],
       [16.095959, -65.214844],
       [30.796115, -33.222656],
       [33.181238, -33.134766],
      [31.09763, 0.834961],
      [34.784483, 1.186523],
      [34.059486, 11.206055],
      [30.038189, 10.942383],
      [28.272939, 38.276367],
      marker_11.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
                                 
}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
     
        marker_12.getLatLng(),
        [-23.998799, -34.321289],
        [-28.721905, -28.212891],
        [-29.029756, -13.974609],
        marker_13.getLatLng()

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs); 
}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
     
        marker_12.getLatLng(),
        [-23.998799, -34.321289],
        [-28.721905, -28.212891],
        [-29.029756, -13.974609],
        [-30.023922, 16.171875],
        marker_14.getLatLng()

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
     
        marker_12.getLatLng(),
        [-23.998799, -34.321289],
        [-28.721905, -28.212891],
        [-29.029756, -13.974609],
        [-30.023922, 16.171875],
         [-29.489816, 79.628906]

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
     
        marker_12.getLatLng(),
        [-23.998799, -34.321289],
        [-28.721905, -28.212891],
        [-29.029756, -13.974609],
        [-30.023922, 16.171875],
         [-29.489816, 79.628906],
         marker_10.getLatLng()


        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == '(CFAD) COLLEGE OF FINE ARTS....'){
    latlngs = [            
     
        marker_12.getLatLng(),
        [-23.998799, -34.321289],
        [-28.721905, -28.212891],
        [-29.029756, -13.974609],
        [-30.023922, 16.171875],
        [-29.413283, 48.339844],
        marker_16.getLatLng()
        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.588648, -65.170898],
        [10.279789, -75.102539],
        marker_2.getLatLng()

        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.588648, -65.170898],
        [20.928093, -55.063477],
        marker_3.getLatLng()
        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [-3.461333, -50.493164],
        marker_9.getLatLng()
        
        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  



}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.673288, -65.083008],
        [31.02234, -33.442383],
        [33.107648, -33.09082],
        marker_5.getLatLng()

        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.673288, -65.083008],
        [31.02234, -33.442383],
        [33.107648, -33.09082],
        marker_6.getLatLng()

        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.673288, -65.083008],
        [31.02234, -33.442383],
        [33.107648, -33.09082],
        marker_7.getLatLng()

        

        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-18.763313, -39.682617],
        [-13.445723, -42.84668],
        [15.673288, -65.083008],
        [31.02234, -33.442383],
        [33.328233, -33.178711],
        [31.24803, 0.834961],
        [34.712267, 1.186523],
        [34.132268, 11.206055],
        [30.190244, 10.942383],
        [28.427638, 38.276367],
        marker_11.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
     
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-28.721905, -28.344727],
        [-24.159284, -34.321289],
        marker_12.getLatLng()
       
      
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF ARTS AND SCIENCES' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-30.09999, 16.12793],
        marker_14.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-30.09999, 16.12793],
        [-29.336693, 79.672852]
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-30.09999, 16.12793],
        [-29.336693, 79.672852],
        marker_10.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF BUSINESS ADMINISTRATION'){
    latlngs = [            
        marker_13.getLatLng(),
        [-29.106576, -14.106445],
        [-30.09999, 16.12793],
        [-29.489816, 48.383789],
        marker_16.getLatLng()
       
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'UE GYM' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [10.452701, -74.926758],
        marker_2.getLatLng()

       
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'OLD FINE ARTS BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [20.928093, -55.151367],
        marker_3.getLatLng()
       


       
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'ADMINISTRATION BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [-3.425692, -50.537109],
        marker_9.getLatLng()
        
       


       
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'STUDENT AFFAIRS OFFICE' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [20.928093, -55.151367],
        [31.052934, -33.486328],
        [33.431441, -33.222656],
        marker_5.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'IT DEPARTMENT' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [20.928093, -55.151367],
        [31.052934, -33.486328],
        [33.431441, -33.222656],
        marker_6.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'GUIDANCE' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [20.928093, -55.151367],
        [31.052934, -33.486328],
        [33.431441, -33.222656],
        marker_7.getLatLng()
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'LUCIO C. TAN BUILDING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-19.095862, -39.594727],
        [-13.2747, -42.758789],
        [15.503972, -65.083008],
        [20.928093, -55.151367],
        [31.052934, -33.486328],
        [33.431441, -33.222656],
        [31.203405, 0.791016],
        [34.524661, 1.054688],
        [33.94336, 11.25],
        [30.069094, 10.986328],
        [28.536275, 38.320313],
        marker_11.getLatLng()


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === '(CFAD) COLLEGE OF FINE ARTS....' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-28.567638, -28.256836],
        [-23.998799, -34.453125],
        marker_12.getLatLng()
        


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF BUSINESS ADMINISTRATION' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-29.183339, -13.974609],
        marker_13.getLatLng()
    
       


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF ENGINEERING' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-29.489816, 79.628906]
       


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'COLLEGE OF ENGINEERING(OFFICE)' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-29.489816, 79.628906],
        marker_10.getLatLng()
       


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}else if (selectedOption === 'HOTEL AND RESTAURANT MANAGEMENT' && selectedOption1 == 'COLLEGE OF ARTS AND SCIENCES'){
    latlngs = [            
        marker_14.getLatLng(),
        [-29.947795, 16.12793],
        [-29.566291, 48.076172],
        marker_16.getLatLng()
       


        
        ]; 
        alert(''+selectedOption1+' TO '+selectedOption+' HAS BEEN SET');
        clearMapAndAddPolyline(latlngs);  
}







}
var style = document.createElement('style');
var walk_man = L.icon ({
iconUrl:'images/red_route.png' ,
iconSize: [30,30]
});
document.head.appendChild(style);





