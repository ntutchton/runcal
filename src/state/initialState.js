import moment from 'moment'
import Week from '../classes/week'
import TrainingWeek from '../classes/trainingWeek'

export default function getInitialState() {
    return {
        user: {
            name: 'user'
        },
        settings: {
            units: 'km'
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
            weeks: [new Week(new TrainingWeek(), 10)], //temp for testing
            trainingWeek: new TrainingWeek()
        }],
    }
}