import moment from 'moment'
import Week from '../classes/week'
import { TrainingWeekService } from '../services/trainingWeek'

export default function getInitialState() {
    let trainingWeek = TrainingWeekService.createDefaultTrainingWeek()
    return {
        user: {
            name: 'user'
        },
        system: {
            units: 'km',
            theme: 'light',
            activePlan: 0, //index of selected, active plan
        },
        plans: [{
            start: moment().format(),
            end: null,
            id: 1,
            name: 'Plan 1',
            recovery: true,
            goal: {
                distance: 1000,
                weeklyDistance : 50,
            },
            current: {
                weeklyDistance: 0,
            }, 
            weeks: [new Week(trainingWeek, 15)], //temp for testing
            trainingWeek: trainingWeek
        }],
    }
}