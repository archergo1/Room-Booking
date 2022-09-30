jQuery.validator.methods.matches = function (value, element, params) {
    var re = new RegExp(params);
    return this.optional(element) || re.test(value);
  };
var re = new RegExp("^09\\d{8}$");
$( "#myform" ).validate({
  rules: {
    mobile: {
      required: true,
      matches: re, // <-- no such method called "matches"!
    },
    os: {
      required: true,
    }
  },
  messages: {
    phone: {
      required: "請填寫您的手機號碼",
      matches: "您的手機號碼格式錯誤，需為10位的正確數字手機格式",
    },
     os: {
      required: "請填寫您的手機系統",
    },
  },
  submitHandler: function (form) {
    alert('成功送出！');
  }
});






// API ID
// retrieve the roomId in localstorage
let roomId = JSON.parse(localStorage.getItem("roomId"));

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
  await axios.get( `https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu`, config)
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
      console.log(ary[0])
      let a = 
            `<p>${ary[0].name}</p>
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
