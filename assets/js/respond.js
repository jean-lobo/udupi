jQuery(document).ready(function() {
      	App.init();
        App.initSliders();
        Index.initRevolutionSlider();    
        $(".subscribe").on("click",function(e){alert("Hello"); $.ajax({type:"POST",url:'subscribe.php',data:{q:$("#sub_email").val()},success:function(data){alert(data);$("#sub_email").val('');}});});       
    });
  
$(".circuits").on("click",function(e){location.href=this.id;});
$(".infolink").on('click',function(e){google.maps.event.trigger(gmarkers[this.id],'click');});
 function initialize() {
var locations = [
    [
    "1","Shri Krishna Temple","krishna",
    "Sri Krishna Temple Udupi is first among the seven places of pilgrimages.",
    "13.3322081378011","74.746105670929","Udupi-Sri-Krishna-Matt"],
    [
    "2","Shri Mookambika Temple","kolluru",
    "Shri Mookambika Devi Temple is one of the Seven Mukthi Sthala's of Karnataka.",
    "13.8638304150521","74.8143517971039","Udupi-Sri-Mookambika-Devi-Temple-Kollur"],
    [
    "3","Anegudde Vinayaka Temple","anegudde",
    "Anegudde is one of the seven places of pilgrimage in the region called 'Parashurama Srishti'.",
    "13.5693017099629","74.703962802887","Udupi-Annegude-Vinayaka-Temple-Kumbashi"],
    [
    "4","Chaturmukha Basadi","chaturmukha",
    "It has four symmetrical faces and is thus called chaturmukha basadi",
    "13.208237","75.004788","Udupi-Chaturmukha-Basadi-Karkala"],
    [
    "5","Gomateshwara","gomateshwar",
    "The single stone 42-foot (13 m) statue and is the second tallest in Karnataka.",
    "13.2037712061624","75.0056254863739","Udupi-Gomateshwara-Statue-Karkala"],
    [
    "6","St Lawrence Shrine","st-lawrence",
    "Is an oldest church since 1759,and is said to have a history of miracles.",
    "13.2054372110218","74.9722480773926","Udupi-Saint-Lawrence-Church-Attur"],
    [
    "7","Kaup Beach","kaup",
    "Kaup beach is widely known for its serene environment and cool atmosphere.",
    "13.2216475236191","74.738187789917","Udupi-Beach-Kaup"],
    [
    "8","Malpe Beach","beach1",
    "Malpe beach is known for its charming and attractive golden brown sand and turquoise blue waters.",
    "13.3611452184259","74.6973323822021","Udupi-Beach-Malpe"],
    [
    "9","Trasi Beach","beach2",
    "Trasi Maravanthe beach is one of the most beautiful location.",
    "13.7020302299378","74.6376800537109","Udupi-Beach-Trasi-Maravanthe"],
    [
    "10","St. Marys Island","beach3",
    "St. Mary's Islands has a basaltic rock formation the only one of its type in India.",
    "13.3791404116709","74.6733427047729","Udupi-Island-Saint-Marrys-Malpe"],
    [
    "11","Anejari Butterfly Camp","butterfly",
    "Amidst the undisturbed natural and lush green setting of the Mookambika Wildlife Sanctuary",
    "13.832889","74.801162","Anejari-Butterfly-Camp"],
    [
    "12","Kodachadri Hills","kodachadri",
    "Kodachadri is a picturesque hill is located such that it overlooks the vast Western Ghats.",
    "13.8364131404838","74.8632431030273","Udupi-Kodachadri-Hills-Kollur"],
    [
    "13","Wildlife Sanctuary","wildlife",
    "A beautiful Wildlife Sanctuary in Kollur.",
    "13.8342462879093","74.8973178863525","Udupi-Mookambika-Wildlife-Sanctuary"],
    [
    "14","DC Office Complex","dcoffice",
    "DC office complex 'Rajathadri' situated at Manipal. The complex was constructed by Karnataka Housing Board.",
    "13.365070038673","74.7853088378906","Udupi-DC-Office-Manipal"],
    [
    "15","KMC Manipal","kmc",
    "Established by Dr. T.M.A. Pai on 30 June 1953,KMC is one of the most prestigious and premier medical colleges in India.",
    "13.354208","74.787090","KMC-Manipal"],
    [
    "16","Sita River","sita",
    "Sitanadi or the Sita river has gained quite a good name for its rafting activities in the previous decade",
    "13.4760658162324","74.9831914815748","Udupi-Sita-River-Hebri"]
    ];

    gmarkers = [];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        scrollwheel: false,
        center: new google.maps.LatLng(13.342079, 74.747304),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var iconBase="img/marker/";
    var icon=".png";
    var image=".jpg";

    function createMarker(latlng,html,myicon,tips) {
    
    var marker = new google.maps.Marker(
    {
        position: latlng,
        map: map, 
        icon: myicon,
        title: tips
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
        });
    return marker;
}

var html=""; 
  
for (var i = 0; i < locations.length; i++) {

html='<div style="width: 175px; text-align:center;"><b>'+locations[i][1]+'</b><br /><img src="img/marker/'+locations[i][2]+'.jpg" /><p>'+locations[i][3]+' <a href="Explore?'+locations[i][6]+'">more..</a></p></div>';
       
    gmarkers[locations[i][0]]=createMarker(
            new google.maps.LatLng(locations[i][4],locations[i][5]),
        html,
        'img/marker/'+locations[i][2]+'.png',
        locations[i][1]);
    
    /*gmarkers[locations[i][0]]=createMarker(
        new google.maps.LatLng(locations[i][4], 
        locations[i][5]),
        locations[i][3],
        'img/marker/'+locations[i][2]+'.png',
        locations[i][1]); */
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
