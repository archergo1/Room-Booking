// swiper carousel 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// API
const allTypes = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";

const token = "99Jy6qkztis6S5Yc4FosmkwvP3yqNnMEXleW6Z7UsOYabOn7GYZgFY6tNyyW";

const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}

// let ary = [];
// axios.get(allTypes, config)
//     .then((res) => {
//       //console.log(res.data.items)
//       ary = res.data.items;
//       console.log(ary);
//     });


async function fetchData(){
  
  let ary = [];
  try{
  await axios.get(allTypes, config)
    .then((res) => {
      //console.log(res.data.items)
      ary = res.data.items;
    });
    // console.log(ary[1])
    const room1 = document.querySelector(".single")
    let singlePic = 
        `<img src="${ary[0].imageUrl}" alt=""></img>
        <a href="./1roomPage/room.html" >
        <div class="mask">
        <h3 id = "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu">${ary[0].name}</h3>
        </div>
        </a>`
    room1.innerHTML = singlePic;
    // room1.setAttribute("style", `backgroundImage:url(${ary[0].imageUrl})`)

    const room2 = document.querySelector(".double")
    let doublePic = 
        `<img src="${ary[2].imageUrl}" alt=""></img>
        <a href="../1roomPage/room.html">
        <div class="mask">
        <h3 id = "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg">${ary[2].name}</h3>
        </div>
        </a>`
    room2.innerHTML = doublePic;

    const room3 = document.querySelector(".twin")
    let twinPic = 
        `<img src="${ary[4].imageUrl}" alt=""></img>
        <a href="../1roomPage/room.html">
        <div class="mask">
        <h3 id = "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz">${ary[4].name}</h3>
        </div>
        </a>`
    room3.innerHTML = twinPic;

    const room4 = document.querySelector(".deluxeSingle")
    let deluxeSinglePic = 
        `<img src="${ary[1].imageUrl}" alt=""></img>
        <a href="../1roomPage/room.html">
        <div class="mask">
        <h3 id = "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ">${ary[1].name}</h3>
        </div>
        </a>`
    room4.innerHTML = deluxeSinglePic;

    const room5 = document.querySelector(".deluxeDouble")
    let deluxeDoublePic = 
        `<img src="${ary[3].imageUrl}" alt=""></img>
        <a href="../1roomPage/room.html">
        <div class="mask">
        <h3 id = "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ">${ary[3].name}</h3>
        </div>
        </a>`
    room5.innerHTML = deluxeDoublePic;

    const room6 = document.querySelector(".deluxeTwin")
    let deluxeTwinPic = 
        `<img src="${ary[5].imageUrl}" alt=""></img>
        <a href="../1roomPage/room.html">
        <div class="mask">
        <h3 id = "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb">${ary[5].name}</h3>
        </div>
        </a>`
    room6.innerHTML = deluxeTwinPic;
    //...
    //...


  



  } catch(err){
    console.log(err)
  }

} 
fetchData()

//點擊房型 儲存點擊資料的id在localStorage
let roomType = document.querySelector(".roomType")
roomType.addEventListener('click', saveData, false)

function saveData(e) {
  localStorage.setItem("roomId", JSON.stringify(e.target.id));
  console.log(e.target)
}
