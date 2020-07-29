import Training from '../enums/training'
import TrainingDay from '../classes/trainingDay'

export default class TrainingWeek {
    constructor(){
        this.days = new Array(7).fill(new TrainingDay())
    }
}