import Day from './day'

export default class Week {
    constructor(trainingWeek, distance){
        this.days = Array.from(trainingWeek.days, trainingDay => {
            return new Day(trainingDay.type, distance * trainingDay.percent)
        })
    }
}