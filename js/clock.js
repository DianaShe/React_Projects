'use strict';

class Clock {
    constructor(offset) {
        this.offset = offset;
        this.intervalId = null;
    }

    getTime() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc =  localTime + localOffset;
        return new Date(utc + 3600000 * this.offset);
    }

    padZero(value) {
        return value.toString().padStart(2, '0')
    }

    getCurrentDate() {
        const zone = this.getTime();
        const date = this.padZero(zone.getDate());
        const month = +this.padZero(zone.getMonth());
        const year = zone.getFullYear();
        return `${date}.${month +1}.${year}`
    }

    getCurrentDateTime() {
        const zone = this.getTime();
        const hours = this.padZero(zone.getHours());
        const min = this.padZero(zone.getMinutes());
        const sec = this.padZero(zone.getSeconds());
        
        return `${hours}:${min}:${sec}`;
    }

    startUpdate(output) {
        output.textContent = this.getCurrentDateTime();

        this.intervalId = setInterval(() => {
            output.textContent = this.getCurrentDateTime();
        }, 1000);
    }

    stopUpdate() {
        clearInterval(this.intervalId);
    }

    deleteClock(el) {
        this.stopUpdate()
        el.remove();
    }

    render(value) {
        const markup = `<div class='clock'><h2>${value}</h2><div class='face'><p class='output'></p></div><div class='buttons'><button class='btn btn_date' type='button'>Date</button><button class='btn btn_time' type='button'>Time</button><button class='btn btn_del' type='button'>Delete</button></div>`;
        document.querySelector('.clocks').insertAdjacentHTML('beforeend', markup)
    }
}

document.querySelector('.btn_add').addEventListener('click', function (e) {
    const selectEl = document.querySelector('#country')
    const val = Number(selectEl.value);
    const country = new Clock(val);
    
    const selectedText = selectEl.options[selectEl.selectedIndex].text;

    country.render(selectedText);
    const clockElement = document.querySelector('.clocks .clock:last-child');
    const output = clockElement.querySelector('.output');
    const btnDate = clockElement.querySelector('.btn_date');
    const btnTime = clockElement.querySelector('.btn_time');
    const btnDelete = clockElement.querySelector('.btn_del');

    country.startUpdate(output);

    btnDate.addEventListener('click', () => {
        country.stopUpdate();
        output.textContent = country.getCurrentDate()
        
    });

    btnTime.addEventListener('click', () => {
        country.startUpdate(output);
        output.textContent = country.getCurrentDateTime();
    });

    btnDelete.addEventListener('click', () => country.deleteClock(clockElement));
})



