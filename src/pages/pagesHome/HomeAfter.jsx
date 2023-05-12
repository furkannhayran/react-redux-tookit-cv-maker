import React from 'react'

function HomeAfter() {
  const moons = [
    { moon: "Ocak" },
    { moon: "Şubat" },
    { moon: "Mart" },
    { moon: "Nisan" },
    { moon: "Mayıs" },
    { moon: "Haziran" },
    { moon: "Temmuz" },
    { moon: "Ağustos" },
    { moon: "Eylül" },
    { moon: "Ekim" },
    { moon: "Kasım" },
    { moon: "Aralık" }
  ]
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear - 50; i <= currentYear - 10; i++) {
    years.push(i);
  }
  const days = [];
  for (var i = 1; i < 32; i++) {
    days.push(i)
  }
  return (
    <div className='home-after-container'>
      <div className='home-after-date-navbar'>
        <div className='home-after-select'>
          <select >
            <option>Gün</option>
            {
              days.map(item => (
                <option value={item}>{item}</option>
              ))
            }
          </select>
          <select >{
            moons.map(item => (
              <option>{item.moon}</option>
            ))
          }
          </select>
          <select >
            {
              years.map(item =>
              (
                <option>{item}</option>
              ))

            }
          </select>
        </div>

        <div className='home-after-date'>
          <span>Doğum yeri</span>
          <input type='text' />
        </div>

      </div>

      <div className='home-after-driver-gender'>
        <div className='home-after-driver'>
          <span>Sürüçü Ehliyeri</span>
          <select >
            <option ></option>
            <option >A(Motosiklet)</option>
            <option >AM(Moped)</option>
            <option >B(Yolcu otomobili)</option>
            <option >BE(B + römork)</option>
          </select>
        </div>
        <div className='home-after-gender'>
          <span>Cinsiyer</span>
          <select >
            <option >Seç</option>
            <option>Kadın</option>
            <option>Erkek</option>
            <option>Belitmek İstemiyorum</option>
          </select>
        </div>
      </div>

      <div className='home-after-military-marital'>
        <div className='home-after-military'>
          <span>Askerlik Durumu</span>
          <input />
        </div>
        <div className='home-after-marital'>
          <span>Medeni Durumu</span>
          <input />
        </div>
      </div>

      <div className='home-after-link-web'>
        <div className='home-after-link'>
          <span>LinkedIn</span>
          <input />
        </div>
        <div className='home-after-web'>
          <span>İnternet Sitesi</span>
          <input />
        </div>
      </div>
    </div>
  )
}

export default HomeAfter