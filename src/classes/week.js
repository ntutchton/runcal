import Day from './day'

export default class Week {
    constructor(trainingWeek, intensity){
        this.intensity = intensity
        this.days = Array.from(trainingWeek.days, trainingDay => {
            return new Day(trainingDay.type, intensity * (trainingDay.intensityFactor/100))//need to convert factor to percent
        })
        this.distance = this.days.reduce((sum, day) => {
            return sum + day.distance
        }, 0)
    }
}