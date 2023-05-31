import React from 'react'
import {   useSelector } from 'react-redux'
// import jsPDF from 'jspdf'
// import { rickTextProfile } from '../../redux/property'
// import { inputWorktitle } from '../../redux/property';
// import { inputCity } from '../../redux/property';
// import { inputChangeValue } from '../../redux/inputChange';

function Template() {
  // const dispatch = useDispatch()
  const property = useSelector((state) => state)

  console.log(property)
  debugger
  const generatePDF = () => {
    // const doc = new jsPDF();
    // doc.text('Hello, World!', 10, 10);
    // doc.save('my-document.pdf');
  };
  
  return (
    <div>
            <button onClick={generatePDF}>Generate PDF</button>

    </div>
  )
}

export default Template