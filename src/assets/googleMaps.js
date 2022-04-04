// alert("HEllo testing")

// function Hello() {
//   alert("FUNCTION WORKS!")
// }

function initMap() {
        //Map options
        var options = {
          zoom: 10,
          center: { lat: -6.2615, lng: 106.8106 },
        };
        //New Map
        var map = new google.maps.Map(document.getElementById("map"), options);

        var icon = {
          url: "https://www.pngall.com/wp-content/uploads/2018/04/School-PNG-Picture.png", // url
          scaledSize: new google.maps.Size(30, 30), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0), // anchor
        };

        var iconhome = {
          url: "http://cdn.onlinewebfonts.com/svg/img_416829.png", // url
          scaledSize: new google.maps.Size(30, 30), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0), // anchor
        }

        var iconwork = {
          url: "http://cdn.onlinewebfonts.com/svg/img_65517.png", // url
          scaledSize: new google.maps.Size(30, 30), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0), // anchor
        };

        // BINUS SIMPRUG
        addMarker({
          coords: { lat: -6.2340918, lng: 106.7853172 },
          iconImage: icon,
          content:
            "<section><h3>Binus School Simprug</h3><style>img{height:120px;width:120px;display:flex;displjustify-content:center;}</><img src=http://simprug.binus.sch.id/wp-content/themes/binus-2014-58-core/assets/school/site-logo/simprug/site-logo.png></section>",
        });

        // JIS
        addMarker({
          coords: { lat: -6.2523, lng: 106.847336 },
          iconImage: icon,
          content:
            "<section><h3>Jakarta International School</h3><style>img{height:100px;display:flex;displjustify-content:center;}</style><img src=http://www.clipartbest.com/cliparts/McL/n6y/McLn6yEqi.png></section>",
        });

        // SIS
        addMarker({
          coords: { lat: -6.2883, lng: 106.78566 },
          iconImage: icon,
          content:
            "<section><h3>SIS School International</h3><style>img{height:120px;width:120px;display:flex;displjustify-content:center;}</style><img src=https://cdn.international-schools-database.com/system/facility_pictures/images/000/004/838/large/Front_Exterior.jpg?1616073727></section>",
        });

        // HOME
        addMarker({
          coords: { lat: -6.2624, lng: 106.8141 },
          iconImage: iconhome,
          content:
            "<section><h3>Home:Kemang Six Residence</h3><style>img{height:120px;width:120px;display:flex;displjustify-content:center;}</style></section>",
        });

        // BUKALAPAK
        addMarker({
          coords: { lat: -6.0888, lng: 106.346 },
          iconImage: iconwork,
          content:
            "<section><h3>Bukalapak</h3><style>img{height:120px;width:120px;display:flex;justify-content:center;}</style><img src=https://cdn.dealstreetasia.com/uploads/2019/08/64601948_2450394718350341_5517879407273836544_n-e1622724471683.jpg?fit=960,506></section>",
        });

        // APPLE STORE
        addMarker({
          coords: { lat: -6.6011, lng: 106.8076 },
          iconImage: iconwork,
          content:
            "<section><h3>Apple Car Engineer</h3><style>img{height:120px;width:120px;display:flex;justify-content:center;}</style><img src=https://cloudfront.gotomalls.com/uploads/retailers/pictures/LQy1Hct5IJtetzzm-ibox-1557117170_1.jpg></section>",
        });

        // Microsof
        addMarker({
          coords: { lat: -6.2766, lng: 106.9247 },
          iconImage: iconwork,
          content:
            "<section><h3>Microsoft Internship</h3><style>img{height:120px;width:120px;display:flex;align-items:ceneter;} background-color:black;</style><img src=https://aspek.id/wp-content/uploads/2020/04/microsoft-building.jpg></section>",
        });
        function addMarker(props) {
          var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage,
          });

          if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
              content: props.content,
            });

            marker.addListener("mouseover", function () {
              infoWindow.open(map, marker);
            });

            marker.addListener("mouseout", function () {
              infoWindow.close();
            });
          }
        }
}

function hello() {
  alert("HELLO")
}

const btn=document.getElementById('form-btn');

btn.addEventListener('click', () => {
    localStorage.email=document.getElementById('email').value;
    localStorage.name=document.getElementById('name').value;
    localStorage.address=document.getElementById('address').value;
    localStorage.city=document.getElementById('city').value;
    localStorage.job=document.getElementById('job').value;
    localStorage.interest=document.getElementById('field').value;
})

window.onload = () => {
    // alert(localStorage.name)
    const name=document.getElementById('name');
    name.innerHTML = localStorage.name;
    const email=document.getElementById('email');
    email.innerHTML = localStorage.email;
    const job=document.getElementById('job');
    job.innerHTML = localStorage.job;
    const address=document.getElementById('address');
    address.innerHTML = localStorage.address;
    const city=document.getElementById('city');
    city.innerHTML = localStorage.city;
    const interest=document.getElementById('interest');
    interest.innerHTML = localStorage.interest;
};


function search() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("jobs-list")
  const product = document.querySelectorAll(".jobs")
  const pname = document.getElementsByTagName("h2")

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}

