import React from 'react'
import { MdOutlineLightbulb, MdSave, MdDelete } from 'react-icons/md'
import './propertyCss/property.scss'
function Button() {
  return (
    <div className='property-button-container'>
      <div className='property-button-info'>
        <MdOutlineLightbulb className='property-button-info-icon' />
        <span className='property-button-info-span'>İpuçları</span>
      </div>
      <div className='property-button-delete-save'>
        <div className='property-button-delete'>
          <MdDelete className='property-button-delete-icon' />
          <span className='property-button-delete-span'>Sil</span>
        </div>
        <div className='property-button-save'>
          <MdSave className='property-button-save-icon' />
          <span className='property-button-save-span'>Kaydet</span>
        </div>
      </div>
    </div>
  )
}

export default Button