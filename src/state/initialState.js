import moment from 'moment'
import Week from '../classes/week'
import convert from 'convert-units'
import { TrainingWeekService } from '../services/trainingWeek'

export default function getInitialState() {
    let trainingWeek = TrainingWeekService.createDefaultTrainingWeek()
    return {
        user: {
            name: 'user'
        },
        system: {
            /* looks like this:
            {
                abbr:"km"
                measure:"length"
                system:"metric"
                singular:"Kilometer"
                plural:"Kilometers"

            }
            */
            preferredUnit: convert().describe('mi'),
            theme: 'light',
            activePlan: 0, //index of selected, active plan
        },
        plans: [{
            term: {
                startDate: moment(),
                endDate: null,
            },
            id: 1,
            name: 'Plan 1',
            recoveryWeeks: true,
            tenPercentRule: true,
            goal: {
                distance: 50,
                // weeklyDistance : 10,
            },
            current: {
                distance: 6,
            }, 
            weeks: [new Week(trainingWeek, 15)], //temp for testing
            trainingWeek: trainingWeek
        }],
    }
}