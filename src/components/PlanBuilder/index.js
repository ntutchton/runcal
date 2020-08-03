import TrainingWeek from "../../classes/trainingWeek";
import React from 'react'
import TrainingWeekBuilder from '../TrainingWeekBuilder'
import TrainingGoalsBuilder from '../TrainingGoalsBuilder'
import PresetPlanLoader from '../PresetPlanLoader'

export function PlanBuilder() {
    return (
      <React.Fragment>
        <PresetPlanLoader />
        <TrainingGoalsBuilder />
        <TrainingWeekBuilder />
      </React.Fragment>
    );
  }