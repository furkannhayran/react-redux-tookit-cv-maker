import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const data = []
function RickText({ span, setProfil, compName }) {
  const [content, setContent] = useState('');
  // const [data, setData] = useState([])
  var RickTextObj = {};
  const handleChange = (value) => {
    RickTextObj[compName] = value
    data.push(RickTextObj)
    // console.log(data)
    setContent(value);

    if (data.length > 1) {
      const groupedData = data.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];

        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(value);
        return acc;
      }, {});
      setProfil(groupedData);
    }
  };
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline',],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ]
  };
  const rickStyle = {
    height: '100px'
  }
  return (

    <div className='rickText-container'>
      <span className='rickText-container-span'>{span}</span>
      <ReactQuill
        style={rickStyle}
        value={content}
        onChange={handleChange}
        modules={modules}
        theme="snow"
      />
    </div>
  );
}

export default RickText