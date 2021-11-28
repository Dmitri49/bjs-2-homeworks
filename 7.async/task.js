class AlarmClock {

    constructor(alarmCollection, id) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }

        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('Такой будильник уже существует!');
            return;
        }

        let alarm = {
            id,
            time,
            callback,
        }

        this.alarmCollection.push(alarm);
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex(item => item.id === id);

        if (index === -1) {
            return false;
        }

        this.alarmCollection.splice(index, 1);

        return true;
    }

    getCurrentFormattedTime() {
        let date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return date;
    }

    start() {

        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            };
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(element => checkClock(element));
            }, 1000);
        }

    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник ${element.id} заведён на ${element.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
    

};



