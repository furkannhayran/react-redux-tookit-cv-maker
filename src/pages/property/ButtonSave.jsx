import React from 'react'
import { MdSave, MdDelete } from 'react-icons/md'

function ButtonSave({ span }) {
    return (
        <div className='buttonSave-container'>
            {
                span === "Custom" ?
                    <div className='buttonSave-delete-navbar'>
                        <MdDelete className='buttonSave-delete-icon'/>
                        <span className='buttonSave-delete-span'>Sil</span>
                    </div>
                    : ""
            }
            <div className='buttonSave-save-navbar'>
                <MdSave className='buttonSave-sace-icon'/>
                <span className='buttonSave-sace-span'>Kaydet</span>
            </div>
        </div>
    )
}

export default ButtonSave