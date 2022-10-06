// swiper carousel 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// hotel-datepicker on the room page
let demo24 = new HotelDatepicker(document.getElementById('demo24'), {
  inline: true,
  clearButton: true,
  moveBothMonths: true,
  selectForward: true,
  topbarPosition: 'bottom',
  onSelectRange: function() {
      // console.log('Date range selected!');
      getDates = demo24.getValue();
      // console.log(getDates)
      getNights = demo24.getNights();
      // console.log(getNights)
      splitRange()

      
  },
  i18n: {
      selected: 'Your stay:',
      night: 'Night',
      nights: 'Nights',
      button: 'Close',
      clearButton: '重新選取',
      submitButton: 'Submit',
      'checkin-disabled': 'Check-in disabled',
      'checkout-disabled': 'Check-out disabled',
      'day-names-short': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      'day-names': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'month-names-short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'error-more': 'Date range should not be more than 1 night',
      'error-more-plural': 'Date range should not be more than %d nights',
      'error-less': 'Date range should not be less than 1 night',
      'error-less-plural': 'Date range should not be less than %d nights',
      'info-more': 'Please select a date range of at least 1 night',
      'info-more-plural': 'Please select a date range of at least %d nights',
      'info-range': 'Please select a date range between %d and %d nights',
      'info-range-equal': 'Please select a date range of %d nights',
      'info-default': 'Please select a date range'
  }
});



// 預設關閉訂單頁 成功頁 失敗頁 
exitPage();
exitSuccess();
exitFailure();

function exitPage() {
  document.querySelector('.covered').classList.add('d-none');
}

// 如果日期為空值 則不能點選booking
// 點選訂房鈕，開啟訂單頁
function openPage() {

  if (inAndOut[0] == undefined) {
      alert('請先選擇入住時段')
      return
  }
  document.querySelector(".bookingDetail").classList.remove("d-none");
  document.getElementById("inDate").value = inAndOut[0];
  document.getElementById("outDate").value = inAndOut[1];
}

function exitSuccess(){
  document.querySelector('.success').classList.add('d-none');
}

function openSuccess(){
  document.querySelector(".success").classList.remove("d-none");
}

function exitFailure(){
  document.querySelector('.hideFailure').classList.add('d-none');
}

function openFailure(){
  document.querySelector(".failure").classList.remove("d-none");
}

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

fetchData()

async function fetchData(){
  
  let ary = [];
  try{
  await axios.get( `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`, config)
    .then((res) => { ary = res.data.room;
                    bookedInfo = res.data.booking      
                   });

    console.log(bookedInfo);
    showCarousel()
    showAmenities()
    roomDetail()
    getDatedOccupied()
  
  
  function getDatedOccupied(){
    let dateBooked = []
    
    bookedInfo.forEach ((item) =>{
      dateBooked.push(item.date);
    })
    console.log(dateBooked);
  
    // renderOccupiedDate();

    // function renderOccupiedDate(){
    // demo24.disabledDates = dateBooked;
    // }

  }
  
  

  // 房間內部照片輪播
  function showCarousel(){

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
  
  }

  // inject data into DOM element from API
  // Render the room information 
    function roomDetail(){
      const roomName = document.querySelector(".roomName");
      let a = 
            `<h2>${ary[0].name}</h2>
            `
      roomName.innerHTML = a;

      const inRoomName = document.querySelector(".inRoomName");
      let a1 = 
            `${ary[0].name}
            `
      inRoomName.innerHTML = a1


     // 將床型轉換成中文
          let bedType = {};
          // single
          if (ary[0].descriptionShort.Bed[0] == 'Single') {
            bedType.type = '單人床'
          }
          // single deluxe
          else if(ary[0].descriptionShort.Bed[0] == 'Small Double') {
            bedType.type = '豪華單人床'
          }
          // twin
          else if(ary[0].descriptionShort.Bed[0] == 'Double' && !ary[0].descriptionShort.Bed[1]) {
            bedType.type = '雙人大床'
          }
          // twin deluxe
          else if(ary[0].descriptionShort.Bed[0] == 'Queen' && !ary[0].descriptionShort.Bed[1]) {
            bedType.type = '豪華雙人大床'
          }
          // double 
          else if(ary[0].descriptionShort.Bed[0] == 'Double' && ary[0].descriptionShort.Bed[1]) {
            bedType.type = '雙床房'
          }
          // deluxe double
          else if(ary[0].descriptionShort.Bed[0] == 'Queen' && ary[0].descriptionShort.Bed[1]) {
            bedType.type = '豪華雙床房'
          }

          
    // room basic info
      const basicInfo = document.querySelector(".basicInfo");
      let b = 
            `
            ${ary[0].descriptionShort.GuestMax} 人・
            ${bedType.type}・
            衛浴 ${ary[0].descriptionShort["Private-Bath"]} 間・
            ${ary[0].descriptionShort.Footage} 平方公尺
            `
            // GuestMin & GuestMax : ${ary[0].descriptionShort.GuestMin}; 
            // ${ary[0].descriptionShort.GuestMax},
            // Bed(s): ${ary[0].descriptionShort.Bed[0]},<br>
            // Private-bath(s): ${ary[0].descriptionShort["Private-Bath"]},
            // Footage: ${ary[0].descriptionShort.Footage} sq. meters
      basicInfo.innerHTML = b;

      const inBasicInfo = document.querySelector(".inBasicInfo");
      let b1 = 
            `
            ${ary[0].descriptionShort.GuestMax} 人・
            ${bedType.type}・
            衛浴 ${ary[0].descriptionShort["Private-Bath"]} 間・
            ${ary[0].descriptionShort.Footage} 平方公尺
            `
      inBasicInfo.innerHTML = b1;
    
    // date and price
      const dateAndPrice = document.querySelector(".dateAndPrice");
      let c = 
            `
            平日（ㄧ～四）價格 : ${ary[0].normalDayPrice} / 
            假日（五～日）價格 : ${ary[0].holidayPrice}<br>
            入住時間 : ${ary[0].checkInAndOut.checkInEarly} (最早) /
            ${ary[0].checkInAndOut.checkInLate} (最晚)<br>
            退房時間 : ${ary[0].checkInAndOut.checkOut}
            `
      dateAndPrice.innerHTML = c;

      const dateAndPriceSimple = document.querySelector(".dateAndPriceSimple");
      let c1 = 
            `
            平日（ㄧ～四）價格 : ${ary[0].normalDayPrice} / 
            假日（五～日）價格 : ${ary[0].holidayPrice} 
            `
      
      dateAndPriceSimple.innerHTML = c1;
    

// description
// split the string of description
      const des = ary[0].description;
      
      let split1 = des.split(".")
      

      const desList = document.querySelector(".desList");
      let d = 
            `
            <li>${split1[0]}.</li>
            <li>${split1[1]}.</li>
            <li>${split1[2]}.</li>
            <li>${split1[3]}.</li>
            `
      desList.innerHTML = d;
  }

  // User amenity status to decide which to show
  function showAmenities() {

    const breakfastY = document.querySelector(".breakfastY")
    const breakfastN = document.querySelector(".breakfastN")    
    const breakfastBL = ary[0].amenities.Breakfast
    
    const inBreakfastY = document.querySelector(".inBreakfastY")

    if ( breakfastBL === true ){
      breakfastN.setAttribute( "style", "display : none" )
    }
    else{
      breakfastY.setAttribute( "style", "display : none" )
      inBreakfastY.setAttribute( "style", "display : none" ) 
    };

    const barY = document.querySelector(".barY")
    const barN = document.querySelector(".barN")
    const barBL = ary[0].amenities["Mini-Bar"]
    
    const inBarY = document.querySelector(".inBarY")

    if ( barBL === true ){
      barN.setAttribute( "style", "display : none")
    }
    else{
      barY.setAttribute( "style", "display : none" )
      inBarY.setAttribute( "style", "display : none" )
    }
  
    const serviceY = document.querySelector(".serviceY")
    const serviceN = document.querySelector(".serviceN")    
    const serviceBL = ary[0].amenities["Room-Service"]
    
    const inServiceY = document.querySelector(".inServiceY")

    if ( serviceBL === true ){
      serviceN.setAttribute( "style", "display : none" )
    }
    else{
      serviceY.setAttribute( "style", "display : none" )
      inServiceY.setAttribute( "style", "display : none" )
    };

  const childY = document.querySelector(".childY")
  const childN = document.querySelector(".childN")    
  const childBL = ary[0].amenities["Child-Friendly"]

  const inChildY = document.querySelector(".inChildY")
    
    if ( childBL === true ){
      childN.setAttribute( "style", "display : none" )
    }
    else{
      childY.setAttribute( "style", "display : none" )
      inChildY.setAttribute( "style", "display : none" )
    };
  
  const wifiY = document.querySelector(".wifiY")
  const wifiN = document.querySelector(".wifiN")    
  const wifiBL = ary[0].amenities["Wi-Fi"]
  
  const inWifiY = document.querySelector(".inWifiY")

    if ( wifiBL === true ){
      wifiN.setAttribute( "style", "display : none" )
    }
    else{
      wifiY.setAttribute( "style", "display : none" )
      inWifiY.setAttribute( "style", "display : none" ) 
    };
  
  const phoneY = document.querySelector(".phoneY")
  const phoneN = document.querySelector(".phoneN")    
  const phoneBL = ary[0].amenities["Television"]
  
  const inPhoneY = document.querySelector(".inPhoneY")

    if ( wifiBL === true ){
      phoneN.setAttribute( "style", "display : none" )
    }
    else{
      phoneY.setAttribute( "style", "display : none" )
      inPhoneY.setAttribute( "style", "display : none" )
    };
  
  const beautifulY = document.querySelector(".beautifulY")
  const beautifulN = document.querySelector(".beautifulN")    
  const beautifulBL = ary[0].amenities["Great-View"]
  
  const inBeautifulY = document.querySelector(".inBeautifulY")

    if ( wifiBL === true ){
      beautifulN.setAttribute( "style", "display : none" )
    }
    else{
      beautifulY.setAttribute( "style", "display : none" )
      inBeautifulY.setAttribute( "style", "display : none" ) 
    };

  const fridgeY = document.querySelector(".fridgeY")
  const fridgeN = document.querySelector(".fridgeN")    
  const fridgeBL = ary[0].amenities["Refrigerator"]
  
  const inFridgeY = document.querySelector(".inFridgeY")

    if ( fridgeBL === true ){
      fridgeN.setAttribute( "style", "display : none" )
    }
    else{
      fridgeY.setAttribute( "style", "display : none" )
      inFridgeY.setAttribute( "style", "display : none" )
    };
  
  const sofaY = document.querySelector(".sofaY")
  const sofaN = document.querySelector(".sofaN")    
  const sofaBL = ary[0].amenities["Sofa"]
  
  const inSofaY = document.querySelector(".inSofaY")

    if ( sofaBL === true ){
      sofaN.setAttribute( "style", "display : none" )
    }
    else{
      sofaY.setAttribute( "style", "display : none" )
      inSofaY.setAttribute( "style", "display : none" ) 
    };
  
  const petY = document.querySelector(".petY")
  const petN = document.querySelector(".petN")    
  const petBL = ary[0].amenities["Pet-Friendly"]
  
  const inPetY = document.querySelector(".inPetY")

    if ( petBL === true ){
      petN.setAttribute( "style", "display : none" )
    }
    else{
      petY.setAttribute( "style", "display : none" )
      inPetY.setAttribute( "style", "display : none" )
    };
  
  const smokingY = document.querySelector(".smokingY")
  const smokingN = document.querySelector(".smokingN")    
  const smokingBL = ary[0].amenities["Smoke-Free"]
  
  const inSmokingY = document.querySelector(".inSmokingY")

    if ( smokingBL === true ){
      smokingY.setAttribute( "style", "display : none" )
      inSmokingY.setAttribute( "style", "display : none" )
    }
    else{
      smokingN.setAttribute( "style", "display : none" )
    };

  const acY = document.querySelector(".acY")
  const acN = document.querySelector(".acN")    
  const acBL = ary[0].amenities["Air-Conditioner"]
  
  const inAcY = document.querySelector(".inAcY")

    if ( acBL === true ){
      acN.setAttribute( "style", "display : none" )
    }
    else{
      acY.setAttribute( "style", "display : none" )
      inAcY.setAttribute( "style", "display : none" )
    };
  }

    //...
    //...
  } 
  catch(err){
    console.log(err)
  }

} 



// 準備訂單的空物件
const orderObj = {}
const stayDays = []
const detailTime = new Date()
// console.log(nowDate)
const detailYMD = detailTime.toISOString()
const nowYMD = detailYMD.split("T")[0]
console.log(nowYMD)

function submitOrder(){
  const orderName = document.getElementById("Name").value;
  const orderMobile = document.getElementById("Mobile").value;
  const inDate = document.getElementById("inDate").value;
  const outDate = document.getElementById("outDate").value;
  stayDays.push(inDate);
  stayDays.push(outDate);

  if ( orderName == ""){
    alert("姓名有誤，請重填")
    return false;  
  }
  // 手機號碼正則表達式
  else if(!(/^09[0-9]{8}$/.test(orderMobile))){ 
    alert("手機號碼有誤，請重填");  
    return false; 
  } 
  else if (inDate == "" || inDate < nowYMD){
    alert("請輸入有效入住日期")
    return false;
  }
  else if (outDate == "" || outDate < nowYMD){
    alert("請輸入有效退房日期")
    return false;
  }
  else if(inDate >= outDate){
    alert("退房日期必須大於入住日期")
    return false
  }
  else{
    orderObj.name = orderName;
    orderObj.tel = orderMobile;
    // orderObj.date = stayDays
    orderObj.date = datesAry
    console.log(orderObj)


    readyPost();
  }
  

  // 確認無誤送出訂單
  function readyPost(){
    axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`, orderObj, config)
       .then( (res) => {
          exitPage();
          openSuccess();
          alert(`您已成功預訂該房型`)
        })

       .catch( (err) => {
          exitPage();
          openFailure();
          console.log(err);
          alert(`預約失敗`)
        })
  }
}




const dollars = document.querySelector(".dollars");
const nights = document.querySelector(".nights");

// 將日曆選到的日期，處理成由入住和退房日期組成的陣列
let inAndOut =[];
function splitRange(){

    inAndOut = getDates.split(" - ")
    nights.textContent = getNights;

    calcAllPrice()  
}


// let dayNum = 0
// let datesAry = [];

// 計算住宿總金額
async function calcAllPrice(){

  let ary = [];
  try{
    await axios.get( `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`, config)
      .then((res) => { ary = res.data.room;      
      });
  
  let dayNum = 0;
  
  console.log(ary);
  let dayStart = new Date(inAndOut[0])
  let dayEnd = new Date(inAndOut[1])
  
  datesAry = getDateBetween(dayStart, dayEnd);
  dayNum = datesAry.length 

  // 扣掉最後一天，不算住宿
  datesAry.pop();
  
  // 入住天數
  

  console.log(datesAry);
  console.log(dayNum)
  

  let priceTotal = 0;
  let normalNum = 0;
  let holidayNum = 0;

  const howMuch = document.querySelector(".howMuch");
  const dayCount = document.querySelector(".dayCount");
  const normalCount = document.querySelector(".normalCount");
  const holidayCount = document.querySelector(".holidayCount");

  datesAry.forEach((item)=>{
    standardDate = new Date(item);
    whatDay = standardDate.getDay();
    console.log(whatDay);

  if (whatDay == 5 || whatDay ==6 || whatDay == 0){
    priceTotal += ary[0].holidayPrice
    holidayNum ++;
  }
  else if (whatDay == 1 || whatDay ==2 || whatDay ==3 || whatDay ==4){  
    priceTotal += ary[0].normalDayPrice;
    normalNum ++;
  }
  
  console.log(priceTotal)
  console.log(normalNum)
  console.log(holidayNum)
  })

  howMuch.textContent = priceTotal.toLocaleString('en-US');
  dollars.textContent = priceTotal.toLocaleString('en-US');

  dayCount.textContent = `${dayNum}天`
  normalCount.textContent = `，平日${normalNum}晚`
  holidayCount.textContent = `，假日${holidayNum}晚`

  
  } 
    catch(err){
      
      console.log(err)
    }

}


// 取得兩個日期間的所有日期，組成陣列
function getDateBetween(start, end) {
  let result = [];
  //使用传入参数的时间
  let startTime = new Date(start);
  let endTime = new Date(end);
  while (endTime - startTime >= 0) {
      let year = startTime.getFullYear();
      let month = startTime.getMonth();
      month = month < 9 ? '0' + (month + 1) : month + 1;
      let day = startTime.getDate().toString().length == 1 ? "0" + startTime.getDate() : startTime.getDate();
      //加入数组
      result.push(year + "-" + month + "-" + day);
      //更新日期
      startTime.setDate(startTime.getDate() + 1);
  }
  return result;
}



// const datepicker_clearBtn = document.querySelector("datepicker__clear-button")
// datepicker_clearBtn.addEventListener("click", splitRange());




// function a(){
//   let b = 2
//   return b
// }

// let c = a()