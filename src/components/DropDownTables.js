'use client'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const DropDown = () => {

  const colourOptions = [
    { value: 'sales', label: 'STG_Sales' },
    { value: 'reviews', label: 'STG_reviews' },
    { value: 'reviews', label: 'STG_reviews' },
    { value: 'transaction', label: 'transaction' },
  ]

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[3]]}
      isMulti
      options={colourOptions}
    />
  )
}

export default DropDown