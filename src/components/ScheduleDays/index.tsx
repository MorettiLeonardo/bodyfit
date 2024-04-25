import { useState } from 'react'

import ScheduleRow from '../ScheduleRow'
import {
  mondayData,
  tuesdayData,
  wednesdayData,
  thursdayData,
  fridayData,
  saturdayData
} from '../Data'
import ScheduleButton from '../ScheduleButton'

const ScheduleDays = () => {
  const [day, setDay] = useState(mondayData)
  const [active, setActive] = useState('monday')

  const renderDay = (dayData: DayData) => {
    return dayData.map((day) => (
      <ScheduleRow
        key={day.id}
        className={day.className}
        time={day.time}
        trainer={day.trainer}
      />
    ))
  }

  const activeButtonDay = (buttonDay: string) => {
    if (active === buttonDay) {
      return true
    }
    return false
  }

  return (
    <div className="container py-10 flex flex-col items-center">
      <div className="flex gap-4">
        <ScheduleButton
          active={activeButtonDay('monday')}
          text="Segunda"
          onClick={() => (setDay(mondayData), setActive('monday'))}
        />
        <ScheduleButton
          active={activeButtonDay('tuesday')}
          text="Terça"
          onClick={() => (setDay(tuesdayData), setActive('tuesday'))}
        />
        <ScheduleButton
          active={activeButtonDay('wednesday')}
          text="Quarta"
          onClick={() => (setDay(wednesdayData), setActive('wednesday'))}
        />
        <ScheduleButton
          active={activeButtonDay('thursday')}
          text="Quinta"
          onClick={() => (setDay(thursdayData), setActive('thursday'))}
        />
        <ScheduleButton
          active={activeButtonDay('friday')}
          text="Sexta"
          onClick={() => (setDay(fridayData), setActive('friday'))}
        />
        <ScheduleButton
          active={activeButtonDay('saturday')}
          text="Sábado"
          onClick={() => (setDay(saturdayData), setActive('saturday'))}
        />
      </div>
      {renderDay(day)}
    </div>
  )
}

export default ScheduleDays
