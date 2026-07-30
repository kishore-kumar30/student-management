import React from 'react'

const FormSection = ({title, children}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {title}
      </h2>

      {children}
    </div>
  )
}

export default FormSection