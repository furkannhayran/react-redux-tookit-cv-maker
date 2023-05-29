import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import jsPDF from 'jspdf'
import { rickTextProfile } from '../../redux/property'
import { inputChangeValue } from '../../redux/property';

function Template() {
  useSelector((state) =>{debugger})
  debugger
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Hello, World!', 10, 10);
    doc.save('my-document.pdf');
  };
  
  return (
    <div>
            <button onClick={generatePDF}>Generate PDF</button>

    </div>
  )
}

export default Template