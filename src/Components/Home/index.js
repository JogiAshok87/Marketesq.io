import React from 'react';
import { Slide } from 'react-slideshow-image';



import 'react-slideshow-image/dist/styles.css'
import './index.css'

const slideImages = [
    {
      url: 'https://res.cloudinary.com/dhtdkkae1/image/upload/v1712766386/img3_vzo1yr.jpg',
      
    },
    {
      url: 'https://res.cloudinary.com/dhtdkkae1/image/upload/v1712766387/img2_ajm7mo.jpg',
      
    },
    {
      url: 'https://res.cloudinary.com/dhtdkkae1/image/upload/v1712766370/img1_pfwv18.jpg',
      
    },
  ];

  const topStudents = [
    {
      id : 1,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070151/student1_zp8u1s.webp",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    {
      id : 2,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070440/student5_ncjrjz.jpg",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    {
      id : 3,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070456/student6_khfbbx.jpg",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    {
      id : 4,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070406/student3_mrwida.webp",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    {
      id : 5,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070404/student4_emmg9h.jpg",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    {
      id : 6,
      title :"Joe",
      imgUrl :"https://res.cloudinary.com/dhtdkkae1/image/upload/v1713070406/student3_mrwida.webp",
      discription:"One of the aspects that impressed me the most about XYZ Company was their commitment to fostering a learning environment",
    },
    
  ]

  
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  

const Home = () =>{
    return(
        <div className="slide-container">
          <Slide>
          {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  
                </div>
              </div>
            ))} 
          </Slide>
          <div className='top_students_container'>
            <h1>Top Students</h1>
            <div className='student-card-container'>
            {topStudents.map(each =>(
              <div className='card'>
                <img  className="card-image" src={each.imgUrl} alt=""/>

                <div className='card-content'>
                  <h1 className='card-title'>{each.title}</h1>
                  <p className='card-description'>{each.discription}</p>
                  
                </div>
            </div>

            ))}
            
            </div>

          </div>
          <h1 className='review-heading'>Reviews</h1>
          <div className='reviews-container'>
           
          <div className="review-card">
            <h3 className="review-title">Anthony</h3>
            <hr  className='horizontal-line'/>
            <p className="review-text">Another highlight of my internship was the exposure to cutting-edge technologies and tools</p>
          </div>
          <div className="review-card">
            <h3 className="review-title">Rahul</h3>
            <hr className='horizontal-line'/>
            <p className="review-text">my time at XYZ Company was incredibly rewarding. I gained practical experience, expanded my professional network, and grew both personally and technically</p>
          </div>
          <div className="review-card">
            <h3 className="review-title">srinivas</h3>
            <hr className='horizontal-line'/>
            <p className="review-text">This exposure not only enhanced my technical skills but also broadened my understanding of industry best practices</p>
          </div>
          <div className="review-card">
            <h3 className="review-title">Vishnu</h3>
            <hr className='horizontal-line'/>
            <p className="review-text">Team members are approachable and always willing to lend a helping hand, which made it easier for me to integrate into the team and contribute effectively to ongoing projects</p>
          </div>
          <div className="review-card">
            <h3 className="review-title">siddu</h3>
            <hr className='horizontal-line'/>
            <p className="review-text">Another highlight of my internship was the exposure to cutting-edge technologies and tools</p>
          </div>
          <div className="review-card">
            <h3 className="review-title">geroge</h3>
            <hr className='horizontal-line'/>
            <p className="review-text">Another highlight of my internship was the exposure to cutting-edge technologies and tools</p>
          </div>

          </div>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Menu</h3>
                <ul>
                  <li>Chico State Home</li>
                  <li>Academics</li>
                  <li>Admissions</li>
                  <li>Campus Life</li>
                  {/* Add other menu items here */}
                </ul>
              </div>
              <div className="footer-section">
                <h3>Information For</h3>
                <ul>
                  <li>Prospective Students</li>
                  <li>Current Students</li>
                  <li>Faculty & Staff</li>
                  {/* Add other information links here */}
                </ul>
              </div>
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li>Health & Safety</li>
                  <li>Library</li>
                  <li>Career Center</li>
                  {/* Add other resource links here */}
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="contact-info">
                <span><i className="fas fa-phone"></i> Contact Us</span>
                <span><i className="fas fa-question-circle"></i> Need Help?</span>
              </div>
              <div className="social-media">
                {/* Add social media icons and links here */}
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <div className="copyright">
                <p>&copy; 2024 California State University, Chico</p>
              </div>
            </div>
          </footer>

        </div>
    )
}

export default Home