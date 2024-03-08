// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const inputField = document.querySelector("#datetime-picker");
const button = document.querySelector("[data-start]");
const day = document.querySelector("[data-days]")
const hour = document.querySelector("[data-hours]")
const minute = document.querySelector("[data-minutes]")
const second = document.querySelector("[data-seconds]")
button.disabled = true;
let userSelectedDate;
let intervalNumber;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(Date.now() > selectedDates[0].getTime()) 
      {return iziToast.warning({
        message: 'Please choose a date in the future'
    }),
    button.disabled = true
    }else{
     button.disabled = false
    }
    userSelectedDate = selectedDates[0].getTime()
    },
  };

  flatpickr(inputField, options);
  button.addEventListener("click", startTime);

function startTime(){
  inputField.disabled = true
  button.disabled = true
  intervalNumber = setInterval(() =>
  {const diff = userSelectedDate - Date.now();
    if (diff < 1000) stopTimer();
    updateTimer(convertMs(diff))
}, 1000)}

function stopTimer(){
  clearInterval(intervalNumber)
}

function addZero(num) {
    return num.toString().padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  day.innerHTML = addZero(days);
  hour.innerHTML = addZero(hours);
  minute.innerHTML = addZero(minutes);
  second.innerHTML = addZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

