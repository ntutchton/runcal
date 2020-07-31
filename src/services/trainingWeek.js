import TrainingWeek from '../classes/trainingWeek'
import TrainingDay from '../classes/trainingDay'
import Training from '../enums/training'

export const TrainingWeekService = {
   
    createDefaultTrainingWeek(){
        let trainingWeek = new TrainingWeek()
        trainingWeek.days[1] = new TrainingDay(Training.CROSSTRAIN, 20)
        trainingWeek.days[2] = new TrainingDay(Training.RECOVERY, 20)
        trainingWeek.days[3] = new TrainingDay(Training.PACE, 27)
        trainingWeek.days[4] = new TrainingDay(Training.RECOVERY , 20)
        trainingWeek.days[6] = new TrainingDay(Training.DISTANCE, 40)
        return trainingWeek
    }
}