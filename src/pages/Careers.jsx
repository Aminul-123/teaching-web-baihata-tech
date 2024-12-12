import React from 'react'

function Careers() {
  const data = [
    {
      id : 1 ,
      jobName : 'Teachers',
      responsibility : `Day to day responsibility includes teaching students in smart board, as a teacher your work will be 
      started from 9AM to 4PM. `
    },
    {
      id : 2,
      jobName : 'Assistant Manager',
      responsibility : `We need a manager to manage , who will work with all our management team.`
    },
    {
      id : '3',
      jobName : 'Video Editor',
      responsibility : 'As a video editor , you work collaboratively with our team , your day to day work include editing all the recorded lectures'
    }
  ]
  return (
   <>
    <section className="careers">
        <h2>* Explore latest jobs</h2>
        <div className="job-cont">
          {
            data.map((job) => (
              <div key={job.id} className='jobs'>
                    <p className='post-name'>Post : {job.jobName} </p>
                    <p>* Description : {job.responsibility}</p>
                    <button className='apply-btn'>Apply Now</button>
              </div>
            ))
          }
        </div>
    </section>
   </>
  )
}

export default Careers;