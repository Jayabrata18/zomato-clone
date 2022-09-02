import React from 'react'
import './delivery.css'
import  Filter from'../common/filters/Filter'
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';
import ExploreSection from '../common/exploreSection/ExploreSection';
import { restaurants } from '../../data/restaurants';

const deliverFilters = [
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters',

  },
  {
    id:2,
    title: 'Rating: 4.0+',
  },
  {
    id:3,
    title: 'Save and Hygienic',
  },
  {
    id:4,
    title: 'pure Veg',
  },
  {
    id:5,
    title: 'Delivery Time',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id:6,
    title: 'Great Offers',
  },
];
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
       <div className="max-width">
        <Filter  filterList={deliverFilters}/>
       </div>
       <DeliveryCollections />
       <TopBrands/>
       <ExploreSection list={restaurantList} collectionName='Delivery Restaurents in Lucknow'/>
    </div>
  )
}

export default Delivery