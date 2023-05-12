import React, { useState } from 'react'
import '../../../css/pastContent.scss'
import ProfileContent from '../../components/ProfileContent'
import EducationContent from '../../components/EducationContent'
import InterestContent from '../../components/InterestContent'
import ReferanceContent from '../../components/ReferanceContent'
import SkillsContent from '../../components/SkillsContent'
import WorkExpContent from '../../components/WorkExpContent'

import Language from '../../componentSelect/Language'
import Courses from '../../componentSelect/Courses'
import CustomSelection from '../../componentSelect/CustomSelection'
import Publication from '../../componentSelect/Publication'
import Success from '../../componentSelect/Success'
function PastContent({ data, index }) {
    const [education, setEducation] = useState(false)
    const [interest, setInterest] = useState(false)
    const [profile, setProfile] = useState(false)
    const [referance, setReferance] = useState(false)
    const [skills, setSkills] = useState(false)
    const [workexp, setWorkexp] = useState(false)

    const [language, setLanguage] = useState(false)
    const [success, setSuccess] = useState(false)
    const [publication, setPublication] = useState(false)
    const [courses, setCourses] = useState(false)
    const [customSelection, setCustomSelection] = useState(false)

    return (
        <div key={index} className='past-content-container'>
            <div className='past-content-navbar'>
                <div className='past-content-navbar-container'>
                    <div className='past-content-header' onClick={() => {
                        if (data.nameSpace === "Profile") {
                            setProfile(!profile)
                        }
                        if (data.nameSpace === "WorkExp") {
                            setWorkexp(!workexp)
                        }
                        if (data.nameSpace === "Education") {
                            setEducation(!education)
                        }
                        if (data.nameSpace === "Interest") {
                            setInterest(!interest)
                        }
                        if (data.nameSpace === "Referances") {
                            setReferance(!referance)
                        }
                        if (data.nameSpace === "Skills") {
                            setSkills(!skills)
                        }
                        if (data.nameSpace === "Language") {
                            setLanguage(!language)
                        }
                        if (data.nameSpace === "Success") {
                            setSuccess(!success)
                        }
                        if (data.nameSpace === "Publication") {
                            setPublication(!publication)
                        }
                        if (data.nameSpace === "Courses") {
                            setCourses(!courses)
                        }
                        if (data.nameSpace === "CustomSelection") {
                            setCustomSelection(!customSelection)
                        }

                    }}>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d={data.iconUser} />
                        </svg>
                        <span>{data.name}</span>
                    </div>
                    <div className='past-content-icons'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="svg--keyboard-arrow-up" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d={data.iconUp} />
                        </svg>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="svg--keyboard-arrow-down" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d={data.iconDown} />
                        </svg>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="svg--settings" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d={data.iconSetting} />
                        </svg>
                    </div>
                </div>
                {
                    profile ? <ProfileContent /> :
                        education ? <EducationContent /> :
                            interest ? <InterestContent /> :
                                referance ? <ReferanceContent /> :
                                    skills ? <SkillsContent /> :
                                        workexp ? <WorkExpContent /> :
                                            language ? <Language /> :
                                                success ? <Success /> :
                                                    publication ? <Publication /> :
                                                        courses ? <Courses /> :
                                                            customSelection ? <CustomSelection /> : ""
                }
            </div>
        </div>
    )
}

export default PastContent