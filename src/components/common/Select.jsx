import React from 'react'

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) => {
  return (
   <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select