// Javascript for the Sidebar Navigation
function openNav() {
              document.getElementById("mySidebar").style.width = "500px";
              document.getElementById("main").style.marginLeft = "250px";
}
            
            function closeNav() {
              document.getElementById("mySidebar").style.width = "0";
              document.getElementById("main").style.marginLeft= "0";
}


// Initialize and add the map
function initMap() {
  // The location 
  const peninsula = { lat: 1.2919, lng: 103.8501 };
  // The Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 1.2919, lng: 103.8501 }
  });
  // The marker, positioned
  const marker = new google.maps.Marker({
    position: peninsula,
    map: map,
  });
}



window.initMap = initMap;


