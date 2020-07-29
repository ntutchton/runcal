import Training from '../enums/training'

export default class TrainingDay {
    
    constructor(type = Training.OFF, percent = 0){
        this.type = type
        this.percent = percent //percent of weekly milage
    }
    
}