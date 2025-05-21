import { Slider } from '@mui/material'
import React from 'react'

import AutoPlay from '../Services/Slider/Slider'
import SimpleSlider from '../Services/Slider/Slider'
import Responsive from '../Services/Slider/Slider'
import FocusOnSelect from '../Services/Slider/Slider'
import { useParams } from 'react-router-dom'
import { data } from '../../data'

export default function ItemDetails(props) {
  const {id} = useParams();
  console.log(id);
  const unit = data.find(unit => unit.id === parseInt(id));
  return <>
  
  
  <FocusOnSelect images={unit.images}/>
  
  
  
  
  
  
  
  
  
  
  
  </>
}
