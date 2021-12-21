import { useState } from 'react'
import DayPicker from 'react-day-picker'
import type { DayModifiers } from 'react-day-picker'
import './date-picker.css'

export function DatePicker() {
  const [selectedDay, setSelectedDay] = useState<Date>()

  const handleDayClick = (day: Date, { selected }: DayModifiers) => {
    setSelectedDay(selected ? undefined : day)
  }

  return <DayPicker showOutsideDays selectedDays={selectedDay} onDayClick={handleDayClick} />
}
