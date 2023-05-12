import React from 'react'
import { HiOutlineUser ,HiDocumentText ,HiPencil} from 'react-icons/hi'
function CvProgress() {
  return (
    <div className='cvProgress-container'>
      <div className='cvProgress-user-navbar'>
        <div className='cvProgress-user-icon'>
          <HiOutlineUser />
        </div>
        <span className='cvProgress-user-span'>Kişisel</span>
      </div>
      <div className='cvProgress-deneyim-navbar'>
        <div className='cvProgress-deneyim-icon'>
          <HiDocumentText />
        </div>
        <span className='cvProgress-deneyim-span'>Deneyimler  </span>
      </div>
      <div className='cvProgress-sablon-navbar'>
        <div className='cvProgress-soblon-icon'>
          <HiPencil />
        </div>
        <span className='cvProgress-soblon-span'>Şablon</span>
      </div>
    </div>
  )
}

export default CvProgress