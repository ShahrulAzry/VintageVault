// Javascript for the sidebar navigation
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
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

// // Javascript for lottie animation
// const buttons = document.querySelectorAll('.nav-button');

// // Add a click event listener to each button
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // Prevent the default behavior of the link
//     event.preventDefault();
    
//     // Play the Lottie animation
//     const animation = bodymovin.loadAnimation({
//       container: document.getElementById('lottie-animation'),
//       renderer: 'svg',
//       loop: false,
//       autoplay: true,
//       path: "https://assets10.lottiefiles.com/packages/lf20_mnbhbf9n.json"
//     });
    
//     // Wait for the animation to finish before navigating to the desired page
//     animation.addEventListener('readystatechange', () => {
//       if (animation.readyState === 4) {
//         window.location = event.target.href;
//       }
//     });
//   });
// });


