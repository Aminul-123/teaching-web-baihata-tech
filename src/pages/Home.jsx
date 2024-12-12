import React from 'react'

function Home() {
  return (
    <>
    <section className='sect--1'>

      <div className="img-banner">
        <img src="https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/v1/OnlineSchools.org/media/uploads/2013/12/middle-school-header2.jpg"
         alt="img" className='first-img' />
      </div>

      <div>
        <h1 className='welcome-msg'>WELCOME TO <span>BAIHATA TECH
          </span>  <br />
         OPPORTIONATIES FOR LEARNING AND GROWTH </h1>
        <button className='explore-btn'>Explore Courses</button>
      </div>
      
     </section>

     <section className='sect--2'>

        <div>
          <h1 className='msg-2'>WE PROVIDE GUIDANCE TO <br />
           <span>EACH STUDENTS</span> TO ENHANCE THEIR <br /> <span>SKILLS</span></h1>
        </div>

        <div>
          <img src="https://www.class.com/wp-content/uploads/2021/06/shutterstock_1696197565-1-900x600-1.jpg"
           alt="sec-img" className='sec-img' />
        </div>

     </section>

     <section className='sect--3'>
          <h1>COURSES - WE OFFER</h1>
          <div className='course-cont'>
                <div>10TH GRADE</div>
                <div>9TH GRADE</div>
                <div>8TH GRADE</div>
                <div>7TH GRADE</div>
                <div>6TH GRADE</div>
                <div>5TH GRADE</div>
                <div>4TH GRADE</div>
                <div>3RD GRADE</div>
                <div>2ND GRADE</div>
                <div>1ST GRADE</div>
          </div>
     </section>

     <footer>
          <p>&copy; Copyright &lt;&lt; Made by Aminul Ali &gt;&gt;</p>
     </footer>
    </>
  )
}

export default Home