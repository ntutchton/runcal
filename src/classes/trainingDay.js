import Training from '../enums/training'

export default class TrainingDay {  
    constructor(type = Training.OFF, intensityFactor = 0){
        this.type = type
        this.intensityFactor = intensityFactor //more-or-less a percent of weekly milage
    }
}