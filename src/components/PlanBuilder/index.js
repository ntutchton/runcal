import TrainingWeek from "../../classes/trainingWeek";
import React from 'react'
import TrainingWeekBuilder from '../TrainingWeekBuilder'
import TrainingGoalsBuilder from '../TrainingGoalsBuilder'

export function PlanBuilder() {
    return (
      <React.Fragment>
        <TrainingGoalsBuilder />
        <TrainingWeekBuilder />
      </React.Fragment>
    );
  }