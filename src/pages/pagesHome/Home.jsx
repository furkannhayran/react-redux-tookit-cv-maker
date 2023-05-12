import React, { useCallback, useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { useDropzone } from 'react-dropzone';

function Home() {
  // const [cvLanguage, setcvLanguage] = useState("")
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // Seçilen dosyaları işleme
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [userName, setUserName] = useState("")
  const [userSurName, setUserSurName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [adress, setAdress] = useState("")
  const [posta, setPosta] = useState("")
  const [city, setCity] = useState("")
  const data = [
    // { cvLanguage: cvLanguage },
    { userName: userName },
    { userSurName: userSurName },
    { email: email },
    { number: number },
    { adress: adress },
    { posta: posta },
    { city: city }
  ]
  console.log(data)
  return (
    <div className='home-container'>
      <div className='home-header'>
        <b>Kişisel Bilgiler</b>
        <div className='home-cv'>
          <span>CV dili</span>
          <select
          // onChange={(e) => setcvLanguage(e.target.value)}
          >
            <option value="turk">Türkçe</option>
            <option value="ing">İngilizce</option>
            <option value="frank">Fransızca</option>
          </select>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className='home-photo-container'>
        <div className='home-photo'>
          <AiFillCamera className='home-photo-icon' />
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Dosyaları bırakın...</p> :
                <p>Fotograf ekle</p>
            }
            {files.map(file => (
              <div key={file.name}>
                <p>{file.name}</p>
                <p>{file.size} bytes</p>
                <img src={URL.createObjectURL(file)} alt={file.name} />
              </div>
            ))}
          </div>
        </div>
        <div className='home-navbar'>
          <div className='home-navbar-name'>
            <span>İsim</span>
            <input onChange={(e) => setUserName(e.target.value)} type='text' />
          </div>

          <div className='home-navbar-name'>
            <span>Soy İsim</span>
            <input onChange={(e) => setUserSurName(e.target.value)} type='text' />
          </div>
        </div>

      </div>

      <div className='home-mail-container'>
        <div className='home-mail'>
          <span>E-posta Adresi</span>
          <input onChange={(e) => setEmail(e.target.value)} type='text' />
        </div>

        <div className='home-phone'>
          <span>Telefon Numarası</span>
          <input onChange={(e) => setNumber(e.target.value)} type='text' />
        </div>
      </div>

      <div className='home-adress'>
        <span>Adres</span>
        <input onChange={(e) => setAdress(e.target.value)} type='text' />
      </div>

      <div className='home-city-post-container'>
        <div className='home-posta'>
          <span>Posta Kodu</span>
          <input onChange={(e) => setPosta(e.target.value)} type='text' />
        </div>

        <div className='home-city'>
          <span>Şehir/ilçe</span>
          <input onChange={(e) => setCity(e.target.value)} placeholder='örn. İStanbul' type='text' />
        </div>
      </div>
    </div>
  )
}

export default Home