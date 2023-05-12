import React, { useState } from 'react'
import data from '../../api/past.json'
import dataSelection from '../../api/pastSelection.json'
import PastContent from './pastcontent/PastContent'

function Past() {
    const [state, setState] = useState(data)
    const [option, setOption] = useState([
        { value: "", label: "+ kişiseş Bölüm oluştur" },
        { value: "Language", label: "Diller" },
        { value: "Success", label: "Başarılar" },
        { value: "Publication", label: "Yayınlar" },
        { value: "Courses", label: "Kurslar" },
        { value: "CustomSelection", label: "Kişisel bölüm oluştur" }
    ])
    const CustomPage = (e) => {
        dataSelection.map(element => {

            if (element.nameSpace === e.target.value) {
                if (element.nameSpace !== "CustomSelection") {
                    const index = e.target.selectedIndex;
                    const newOptions = [...option];
                    newOptions.splice(index, 1);
                    setOption(newOptions);
                }
                setState([...state, element])

            }
        })
    }
    return (
        <div className='past-container'>
            {/* başlık kısımlarını oluşturdugum alan */}
            {
                state.map((item, index) => <PastContent key={index} data={item} index={index} />)
            }
            {/* seçim kısmını yaptıgım alan */}
            <div className='past-select-container'>
                <div className='past-select-navbar'>
                    <select className='past-select' value="" onChange={(e) => { CustomPage(e) }} >
                        {
                            option.map((item, i) => (
                                <option key={i} value={item.value}>{item.label}</option>
                            ))
                        }

                    </select>
                </div>
            </div>
        </div>
    )
}

export default Past