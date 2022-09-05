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
        <a href="../roomPage/room.html">
        <div class="mask">
        <h3>${ary[0].name}</h3>
        </div>
        </a>`
    room1.innerHTML = singlePic;

    const room2 = document.querySelector(".double")
    let doublePic = 
        `<img src="${ary[2].imageUrl}" alt=""></img>
        <a href="../doubleRoom/room.html">
        <div class="mask">
        <h3>${ary[2].name}</h3>
        </div>
        </a>`
    room2.innerHTML = doublePic;

    const room3 = document.querySelector(".twin")
    let twinPic = 
        `<img src="${ary[4].imageUrl}" alt=""></img>
        <a href="../twinRoom/room.html">
        <div class="mask">
        <h3>${ary[4].name}</h3>
        </div>
        </a>`
    room3.innerHTML = twinPic;

    const room4 = document.querySelector(".deluxeSingle")
    let deluxeSinglePic = 
        `<img src="${ary[1].imageUrl}" alt=""></img>
        <a href="../deluxeSingle/room.html">
        <div class="mask">
        <h3>${ary[1].name}</h3>
        </div>
        </a>`
    room4.innerHTML = deluxeSinglePic;

    const room5 = document.querySelector(".deluxeDouble")
    let deluxeDoublePic = 
        `<img src="${ary[3].imageUrl}" alt=""></img>
        <a href="../deluxeDouble/room.html">
        <div class="mask">
        <h3>${ary[3].name}</h3>
        </div>
        </a>`
    room5.innerHTML = deluxeDoublePic;

    const room6 = document.querySelector(".deluxeTwin")
    let deluxeTwinPic = 
        `<img src="${ary[5].imageUrl}" alt=""></img>
        <a href="../deluxeTwin/room.html">
        <div class="mask">
        <h3>${ary[5].name}</h3>
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



