import React from 'react'
import StudentGrowthChart from './StudentGrowthChart'
import AttendancePieChart from './AttendancePieChart'

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <StudentGrowthChart />
      </div>

      <AttendancePieChart />
    </div>
  )
}

export default ChartSection