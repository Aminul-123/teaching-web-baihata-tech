import React, { useState } from 'react'

function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: null
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      alert('All fields are required');
      return
    }
    if (Number(data.phone.length) !== 10) {
      alert('please enter correct phone number');
      return
    }

    alert('Submission successfull || We will contact you soon.')
    setData({
      name: '',
      email: '',
      phone: null
    })
  }
  return (
    <>
   
    <section className='contact-page'>
      <h1>CONTACT US</h1>
      <p>To engage with us fill the form below -</p>
      <form>
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" id='name' placeholder='Enter your name' required
            onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' required placeholder='Enter email'
            onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id='phone' placeholder='Enter phone number' required
            onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </div>
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </form>
    </section>
      <div className='map-cont'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28603.913573839047!2d91.70116393076754!3d26.343034977405626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a53b6dc84bf05%3A0x236d17e194c4a533!2sBaihata%20Chariali%2C%20Assam!5e0!3m2!1sen!2sin!4v1733978391103!5m2!1sen!2sin"
         width="600" height="450"  allowFullScreen=""
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Contact