// var demo24 = document.getElementById('demo24');
// var datepicker = new HotelDatepicker(input, {
//     inline: true,
//     clearButton: true
// });


const today = new Date();


let demo24 = new HotelDatepicker(document.getElementById('demo24'), {
    inline: true,
    clearButton: true,
    moveBothMonths: true,
    selectForward: true,
    onSelectRange: function() {
        // console.log('Date range selected!');
        getDates = demo24.getValue();
        console.log(getDates)
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
        'day-names-short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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


let 
function splitRange(){
    datesArray = getDates.split(" - ")
    // console.log(datesArray)
}

