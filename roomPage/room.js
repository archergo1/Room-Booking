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


// APIurl
const singleRoom = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu";

const deluxeSingle = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ";

const doubleRoom = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg";

const deluxeDouble = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ";

const twinRoom = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz";

const deluxeTwin = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb";

// token
const token = "99Jy6qkztis6S5Yc4FosmkwvP3yqNnMEXleW6Z7UsOYabOn7GYZgFY6tNyyW";


const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}

async function fetchData(){
  
  let ary = [];
  try{
  await axios.get(singleRoom, config)
    .then((res) => {
      ary = res.data.room;
    });
    // console.log(ary[0].imageUrl[0]);
    console.log(ary[0].name);
    const slide1 = document.querySelector(".slide1")
    let pic1 = 
        `<img src="${ary[0].imageUrl[0]}" alt=""></img>
        `
    slide1.innerHTML = pic1;

    const slide2 = document.querySelector(".slide2")
    let pic2 = 
        `<img src="${ary[0].imageUrl[1]}" alt=""></img>
        `
    slide2.innerHTML = pic2;

    const slide3 = document.querySelector(".slide3")
    let pic3 = 
        `<img src="${ary[0].imageUrl[2]}" alt=""></img>
        `
    slide3.innerHTML = pic3;

  // inject data into DOM element from API
    // room name
    function roomDetail(){
      const roomName = document.querySelector(".roomName");
      let a = 
            `<h2>${ary[0].name}</h2>
            `
      roomName.innerHTML = a;
    // room basic info
      const basicInfo = document.querySelector(".basicInfo");
      let b = 
            `
            GuestMin & GuestMax : ${ary[0].descriptionShort.GuestMin}; 
            ${ary[0].descriptionShort.GuestMax},
            Bed(s): ${ary[0].descriptionShort.Bed[0]},<br>
            Private-bath(s): ${ary[0].descriptionShort["Private-Bath"]},
            Footage: ${ary[0].descriptionShort.Footage} sq. meters
            `
      basicInfo.innerHTML = b;
    
    // time and price
      const timeAndPrice = document.querySelector(".timeAndPrice");
      let c = 
            `
            平日（ㄧ～四）價格 : ${ary[0].normalDayPrice} / 
            假日（五～日）價格 : ${ary[0].holidayPrice} (Fri-Sun)<br>
            入住時間 : ${ary[0].checkInAndOut.checkInEarly} (最早) /
            ${ary[0].checkInAndOut.checkInLate} (最晚)<br>
            退房時間 : ${ary[0].checkInAndOut.checkOut}
            `
      timeAndPrice.innerHTML = c;


// description
// split the string of description
      const des = ary[0].description;
      console.log(des);
      let split1 = des.split(".")
      console.log(split1);

      const desList = document.querySelector(".desList");
      let d = 
            `
            <li>${split1[0]}.</li>
            <li>${split1[1]}.</li>
            <li>${split1[2]}.</li>
            <li>${split1[3]}.</li>
            `
      desList.innerHTML = d;

// User amenity status to decide which to show
    const breakfastY = document.querySelector(".breakfastY")
    const breakfastN = document.querySelector(".breakfastN")    
    const breakfastBL = ary[0].amenities.Breakfast
    console.log(breakfastBL);
    if ( breakfastBL === true ){
      breakfastN.setAttribute( "style", "display : none" )
    }
    else{
      breakfastY.setAttribute( "style", "display : none" )
    };

    const barY = document.querySelector(".barY")
    const barN = document.querySelector(".barN")
    const barBL = ary[0].amenities["Mini-Bar"]
    console.log(barBL);
    if ( barBL === true ){
      barN.setAttribute( "style", "display : none")
    }
    else{
      barY.setAttribute( "style", "display : none" )
    }
  
  const serviceY = document.querySelector(".serviceY")
  const serviceN = document.querySelector(".serviceN")    
  const serviceBL = ary[0].amenities["Room-Service"]
    console.log(serviceBL);
    if ( serviceBL === true ){
      serviceN.setAttribute( "style", "display : none" )
    }
    else{
      serviceY.setAttribute( "style", "display : none" )
    };

  const childY = document.querySelector(".childY")
  const childN = document.querySelector(".childN")    
  const childBL = ary[0].amenities["Child-Friendly"]
    console.log(childBL);
    if ( childBL === true ){
      childN.setAttribute( "style", "display : none" )
    }
    else{
      childY.setAttribute( "style", "display : none" )
    };
  
  const wifiY = document.querySelector(".wifiY")
  const wifiN = document.querySelector(".wifiN")    
  const wifiBL = ary[0].amenities["Wi-Fi"]
    console.log(wifiBL);
    if ( wifiBL === true ){
      wifiN.setAttribute( "style", "display : none" )
    }
    else{
      wifiY.setAttribute( "style", "display : none" )
    };
  
  const phoneY = document.querySelector(".phoneY")
  const phoneN = document.querySelector(".phoneN")    
  const phoneBL = ary[0].amenities["Television"]
    console.log(wifiBL);
    if ( wifiBL === true ){
      phoneN.setAttribute( "style", "display : none" )
    }
    else{
      phoneY.setAttribute( "style", "display : none" )
    };
  
  const beautifulY = document.querySelector(".beautifulY")
  const beautifulN = document.querySelector(".beautifulN")    
  const beautifulBL = ary[0].amenities["Great-View"]
    console.log(wifiBL);
    if ( wifiBL === true ){
      beautifulN.setAttribute( "style", "display : none" )
    }
    else{
      beautifulY.setAttribute( "style", "display : none" )
    };

  const fridgeY = document.querySelector(".fridgeY")
  const fridgeN = document.querySelector(".fridgeN")    
  const fridgeBL = ary[0].amenities["Refrigerator"]
    console.log(wifiBL);
    if ( fridgeBL === true ){
      fridgeN.setAttribute( "style", "display : none" )
    }
    else{
      fridgeY.setAttribute( "style", "display : none" )
    };
  
  const sofaY = document.querySelector(".sofaY")
  const sofaN = document.querySelector(".sofaN")    
  const sofaBL = ary[0].amenities["Sofa"]
    console.log(wifiBL);
    if ( sofaBL === true ){
      sofaN.setAttribute( "style", "display : none" )
    }
    else{
      sofaY.setAttribute( "style", "display : none" )
    };
  
  const petY = document.querySelector(".petY")
  const petN = document.querySelector(".petN")    
  const petBL = ary[0].amenities["Pet-Friendly"]
      // console.log(wifiBL);
    if ( petBL === true ){
      petN.setAttribute( "style", "display : none" )
    }
    else{
      petY.setAttribute( "style", "display : none" )
    };
  
  const smokingY = document.querySelector(".smokingY")
  const smokingN = document.querySelector(".smokingN")    
  const smokingBL = ary[0].amenities["Smoke-Free"]
      // console.log(wifiBL);
    if ( smokingBL === true ){
      smokingY.setAttribute( "style", "display : none" )
    }
    else{
      smokingN.setAttribute( "style", "display : none" )
    };

  const acY = document.querySelector(".acY")
  const acN = document.querySelector(".acN")    
  const acBL = ary[0].amenities["Air-Conditioner"]
      // console.log(wifiBL);
    if ( acBL === true ){
      acN.setAttribute( "style", "display : none" )
    }
    else{
      acY.setAttribute( "style", "display : none" )
    };





  }

    roomDetail()

    //...
    //...
  } catch(err){
    console.log(err)
  }

} 
fetchData()


// calendar on the room page
// datepicker
$(function() {
  $("#datepicker").datepicker({ numberOfMonths: 2, minDate: 0, maxDate: "1m" });
  console.log();
  let daynight = 0;

  let startDate = $("#startDate").datepicker({
      dateFormat: "yy-mm-dd",
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: 0,
      maxDate: "1m",
  });
  $("#startDate").on("change", function() {
      endDate.datepicker("option", "minDate", $(this).val());
      dayCount();
  });
  let endDate = $("#endDate").datepicker({
      dateFormat: "yy-mm-dd",
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      maxDate: "1m",
  });
  $("#endDate").on("change", function() {
      startDate.datepicker("option", "maxDate", $(this).val());
      dayCount();
  });

  let dayCount = function() {
      let startDate = $("#startDate").datepicker("getDate");
      let endDate = $("#endDate").datepicker("getDate");

      if (startDate != null && endDate != null) {
          daynight = Math.floor((endDate.getTime() - startDate.getTime()) / 86400000);
          $(".dayNight").text(`${daynight + 1}天，總共${daynight}晚`);
          $(".totalprice span").text(`$${(daynight + 1) * room.room[0].normalDayPrice}`);
      }
  };

  $("#startDate").on("change", function() {
      var startDate = $(this).val();
      console.log();
  });

  function getDate(element) {
      var date;
      try {
          date = $.datepicker.parseDate(dateFormat, element.value);
      } catch (error) {
          date = null;
      }

      return date;
  }
});


// booking modal
document.querySelectorAll(".bookingIcon").forEach(function(el) {
  let nowamenities = el.dataset.amenities;
  if (!room.room[0].amenities[nowamenities]) {
      el.classList.add("Amenitiesnone");
  }
});
document.querySelector(".checkBtn").addEventListener("click", function(el) {
  el.preventDefault();
  document.querySelector(".bookingNow").classList.remove("hidden");
});
document.querySelector(".bookingNowClose").addEventListener("click", function(el) {
  el.preventDefault();
  document.querySelector(".bookingNow").classList.add("hidden");
});
document.querySelector(".finishBtn").addEventListener("click", function(el) {
  el.preventDefault();
  document.querySelector(".bookingFinish").style.display = "flex";
  document.querySelector(".bookingNowClose").style.color = "#fff";
});




