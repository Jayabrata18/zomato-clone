import React from 'react'
import Explorecart from './explorecart/Explorecart'
import './exploresection.css'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
            {list.map((restaurant) => {
                return <Explorecart restaurant={restaurant} />;
            })}
        </div>

    </div>
  )
}

export default ExploreSection