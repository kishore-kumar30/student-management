import React from 'react'

const StatCard = ({title, value, icon, color}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${color}`}
      >
        {icon}
      </div>
    </div>
  )
}

export default StatCard