// var fp = flatpickr("#id", option);  // id選擇器也可以改爲Dom對象, option爲配置對象

// // 如果創建實例時未保存實例變量，可通過以下方式獲取到實例對象。
// var fp = document.querySelector("#id").flatpickr;

$("#basicDate").flatpickr({
    enableTime: true, 
    dateFormat: "Y-m-d"

});

