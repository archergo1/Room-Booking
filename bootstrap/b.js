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