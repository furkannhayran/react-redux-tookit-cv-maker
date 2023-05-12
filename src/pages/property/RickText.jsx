import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RickText({ span, setProfil, compName }) {
  const [content, setContent] = useState('');
  var RickTextObj = {};
  const handleChange = (value) => {
    RickTextObj[compName] = value
    setProfil(RickTextObj);
    setContent(value);
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline',], // metni biçimlendirme
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // liste seçenekleri
      // [{ 'indent': '-1' }, { 'indent': '+1' }], // girinti ayarları
      // [{ 'align': [] }], // hizalama seçenekleri
      // ['link', 'image'] // bağlantı ve resim ekleme
    ]
  };

  // const formats = [
  //   'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'indent', 'align', 'link', 'image'
  // ];
  const rickStyle = {
    height: '100px',
    // backgroundColor: '#f2f2f2',
    // border: '1px solid #ccc',
  }
  return (

    <div className='rickText-container'>
      <span className='rickText-container-span'>{span}</span>
      <ReactQuill

        style={rickStyle}
        value={content}
        onChange={handleChange}
        modules={modules}
        // formats={formats}
        theme="snow" // tema seçeneği
      />
    </div>
  );
}

export default RickText