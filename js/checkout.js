const date_picker2_element = document.querySelector('.date-picker.checkout');
const selected_date2_element = document.querySelector('.date-picker.checkout .selected-date');
const dates2_element = document.querySelector('.date-picker.checkout .dates');
const mth2_element = document.querySelector('.date-picker.checkout .dates .month .mth');
const next_mth2_element = document.querySelector('.date-picker.checkout .dates .month .arrow.next');
const prev_mth2_element = document.querySelector('.date-picker.checkout .dates .month .arrow.prev');
const days2_element = document.querySelector('.date-picker.checkout .dates .days');

const months2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date2 = new Date();
let day2 = date.getDate();
let month2 = date.getMonth();
let year2 = date.getFullYear();

let selectedDate2 = date2;
let selectedDay2 = day2;
let selectedMonth2 = month2;
let selectedYear2 = year2;

mth2_element.textContent = months2[month2] + ' ' + year2;

populateDates2();

// Event Listener
date_picker2_element.addEventListener('click', toggleDatePicker2);
next_mth2_element.addEventListener('click', goToNextMonth2);
prev_mth2_element.addEventListener('click', goToPrevMonth2);

// Functions
function toggleDatePicker2 (x) {
  console.log(x.path);
  if(checkEventPathForCLass2(x.path, 'month')) {
    dates2_element.classList.toggle('active');
  }
  dates2_element.classList.toggle('active');
}

function goToNextMonth2 (e) {
  month2++;
  if(month2 > 11) {
    month2 = 0;
    year2++;
  }
  mth2_element.textContent = months2[month2] + ' ' + year2;
  populateDates2();
}

function goToPrevMonth2 (e) {
  month2--;
  if(month2 < 0) {
    month2 = 11;
    year2--;
  }
  mth2_element.textContent = months2[month2] + ' ' + year2;
  populateDates2();
}

function populateDates2 (e) {
  days2_element.innerHTML = '';
  let amount_days2 = 31;

  if(month2 == 1) {
    amount_days2 = 28;
  }

  for(let i=0; i<amount_days2; i++) {
    const day2_element = document.createElement('div');
    day2_element.classList.add('day2');
    day2_element.textContent= i + 1;

    if(selectedDay2 == (i + 1) && selectedYear2 == year2 && selectedMonth2 == month2) {
      day2_element.classList.add('selected2');
    }

    day2_element.addEventListener('click', function() {
      selectedDate2 = new Date(year2 + '-' + (month2 + 1) + '-' + ( i + 1 ));
      selectedDay2 = (i + 1);
      selectedMonth2 = month2;
      selectedYear2 = year2;

      selected_date2_element.textContent = formatDate2(selectedDate2);
      selected_date2_element.dataset.value = selectedDate2;

      populateDates2();
    });

    days2_element.appendChild(day2_element);
  }
}

// Helper Functions
function checkEventPathForCLass2(path, selector) {
  for(let j=0; j < path.length; j++) {
    if(path[j].classList && path[j].classList.contains(selector)) {
      return true;
    }
  }
  return false;
}

function formatDate2 (d) {
    let day2 = d.getDate();
    if(day2 < 10) {
      day2 = '0' + day2;
    }

    let month2 = d.getMonth() + 1;
    if(month2 < 10) {
      month2 = '0' + month2;
    }
    let year2 = d.getFullYear();
    return day2 + ' / ' + month2 + ' / ' + year2;
}
