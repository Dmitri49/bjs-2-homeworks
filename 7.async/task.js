class AlarmClock {

    constructor(alarmCollection, id) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }


        for (const value of this.alarmCollection) {
            if (id === value.id) {
                console.error();
                return 'Такой будильник уже существует!'
            }
        }

        let alarm = {
            id,
            time,
            callback,
        }

        this.alarmCollection.push(alarm);
    }

    removeClock(id) {

        const search = this.alarmCollection.filter(item => item.id === id);

        if (search.length === 0) {
            return false;
        }

        this.alarmCollection.forEach(element => this.alarmCollection.splice((this.alarmCollection.findIndex(item => item.id === id)), 1));

        return true;
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start() {

        function checkClock(bell) {
            let date = new Date();
            if (`${date.getHours()}:${date.getMinutes()}` === bell.time) {
                bell.callback();
            }
    
            if(this.timerId === null) {
                let interval = setInterval(() => {
                    this.alarmCollection.forEach(element => checkClock());
                    this.timerId = interval;
                }, 1000);
                
            }
        }
    }

    stop() {

        if (this.timerId !== null) {
            clearInterval(interval);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник ${element.id} заведён на ${element.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
    

}


