import React from 'react';
import './SampleAppBio.css';

function SampleAppBio(props) {
  return (
    <div className="sample-app-bio">
      <div className="bio-profile">
        <div className="profile-one">
          <div className="profile-one-foto"> <span><img src={props.fotoProfile} alt="" width="100%" /></span> </div>
          <div className="profile-one-top">
            <p>{props.username}</p>
            <button> <svg aria-label="Options" fill="#262626" viewBox="0 0 48 48" height="100%"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg> </button>
          </div>
          <div className="profile-one-bottom">
            <p> <strong style={{fontWeight:"bold"}}>{props.countPost}</strong> posts </p>
            <p> <strong style={{fontWeight:"bold"}}>{props.countFollowers}</strong> followers </p>
            <p> <strong style={{fontWeight:"bold"}}>{props.countFollowing}</strong> following </p>
          </div>
        </div>
        <br/>
        <p className="bio-info-name">{props.name}</p> <br/> 
        {props.bio.split("\n").map(text => <p className="bio-info-bio">{text}</p>)}
      </div>
      <div className="bio-highlights">
        {
          props.highlights.map((h, i) => {
            return (
              <div key={i}>
                <span> <img src={h.icon} alt="" height="100%" /> </span>
                <p> {h.name} </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SampleAppBio