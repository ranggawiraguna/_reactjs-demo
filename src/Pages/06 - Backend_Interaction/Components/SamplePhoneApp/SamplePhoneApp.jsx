import React from 'react';
import './SamplePhoneApp.css';
import CircleProgress from './../CircleProgress/CircleProgress';

function SamplePhoneApp(props) {
  return (
    <div className="sample-phone">
      <svg height="100%" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="9" height="16" fill="none" /> </svg>
      <div className="phone-container">
        <div className="phone-app">
          <div className="app-header">
            <span className="header-float-wrapper"></span>
            <div className="header-main-shape">
              <div className="main-shape-wrapper">
                <img src={props.dataUser["profile"]["foto"]} alt="" height="75%"/>
                <p>{props.dataUser["profile"]["name"]}</p>
              </div>
            </div>
            <div className="header-float-shape">
              <div> <p>{props.dataUser["profile"]["countFollowers"]}</p> <p>Followers</p></div>
              <span></span>
              <div> <p>{props.dataUser["profile"]["countPosts"]}</p> <p>Posts</p></div>
              <span></span>
              <div> <p>{props.dataUser["profile"]["countFollowing"]}</p> <p>Following</p></div>
            </div>
          </div>
          <div className="app-programming">
            <h3 className="app-title"> Programming Skills </h3>
            <div className="programming-container">
              <ul> 
                { 
                  props.dataUser["programming"].map((value,index) => {
                    return (
                      <li key={index}>
                        <span> <CircleProgress value={value.progress} icon={value.icon} /> </span>
                        <p>{value.name}</p>
                      </li>
                    ) 
                  })
                } 
                &nbsp; 
              </ul>
            </div>
          </div>
          <div className="app-software">
            <h3 className="app-title"> Software Skills </h3>
            <div className="software-container">
              <ul>
                { props.dataUser["software"].map((value,index) => <li key={index}><span><img src={value.icon} alt="" width="100%"/></span> <p>{value.name}</p></li>) }
              </ul>
            </div>
          </div>
          <div className="app-educations">
            <h3 className="app-title"> Educations </h3>
            <div className="educations-container">
              <ul>
                { 
                  props.dataUser["educations"].map((value,index) => {
                    return (
                      <li key={index}>
                        <span style={{backgroundImage:`url(${value.image})`}}> <svg height="100%" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="1" height="1" fill="none" /> </svg> </span> 
                        <div> <p>{value.name}</p> <p>{value.periode}</p> </div>
                      </li>
                    )
                  }) 
                }
              </ul>
            </div>
          </div>
          <div className="app-experiences">
            <h3 className="app-title"> Work Experiences </h3>
            <div className="experiences-container">
              <ul>
                {
                  props.dataUser["workExperiences"].map((value,index)=>{
                    return (
                      <li key={index}>
                      <span> <img src="https://img.icons8.com/clouds/452/work.png" alt="" width="100%"/> </span>
                      <div>
                        <span>
                          <p>{value.name}</p>
                          <p>{value.jobdesk}</p>
                        </span>
                        <p>{value.periode}</p>
                      </div>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="app-certificate">
            <h3 className="app-title"> Certificate / Seminar </h3>
            <div className="certificate-container">
              <ul>
                { 
                  props.dataUser["certificateSeminar"].map((value,index) => {
                    return (
                      <li key={index}>
                        <span> <img src="https://img.icons8.com/clouds/452/certificate.png" alt="" width="100%"/> </span> 
                        <div> <p>{value.name}</p> <p>{value.status} - {value.time}</p> </div>
                      </li>
                    )
                  }) 
                }
              </ul>
            </div>
          </div>
          <div className="app-hobbies">
            <h3 className="app-title"> Hobbies </h3>
            <div className="hobbies-container">
              <ul>
                { 
                  props.dataUser["hobbies"].map((value,index) => {
                    return (
                      <li key={index}>
                        <span> <img src={value.icon} alt="" width="100%"/> </span> 
                        <p>{value.name}</p>
                      </li>
                    )
                  }) 
                }
              </ul>
            </div>
          </div>
          <div className="app-social-media">
            <h3 className="app-title"> Social Media </h3>
            <div className="social-media-container">
              <ul>
                {
                  props.dataUser["socialMedia"].map((value,index)=>{
                    return (
                      <li key={index}>
                      <span> <img src={value.icon} alt="" width="100%"/> </span>
                      <p>{value.urlAccount}</p>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SamplePhoneApp 