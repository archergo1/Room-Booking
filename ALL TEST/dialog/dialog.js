let btn=document.querySelector("#show");
let infoModal=document.querySelector("#infoModal");
let close=document.querySelector("#close");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})


/*
$("#basicDate").flatpickr({
    enableTime: true, 
    dateFormat: "Y-m-d"

});
*/

const calenderInput = window.document.querySelector("#basicDate") 
  fp2 = new flatpickr(calenderInput, {
    enableTime: true, 
    dateFormat: "Y-m-d",
    appendTo: window.document.querySelector('.calender')
  });