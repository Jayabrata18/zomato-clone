import React from 'react'
import './filter.css'
import FilterItem from './filterItems/FilterItem'


const Filter = ({filterList}) => {
  return (
    <div className='filters'>
        {filterList && filterList.map((filter) =>{
            return <FilterItem filter={filter} key={filter.id} />
        })}
    </div>
  )
}

export default Filter