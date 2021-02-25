import React from 'react';
import data from './../local-data/local-api.json';
import { Frame, Container, Header2 } from '../../../../App/Components';
import ContainerContext from './../../Components/ContainerContext/ContainerContext';
import SampleAppHeader from './../../Components/SampleAppHeader/SampleAppHeader';
import SampleAppBody from './../../Components/SampleAppBody/SampleAppBody';
import SampleAppBio from './../../Components/SampleAppBio/SampleAppBio';
import SampleAppPosts from './../../Components/SampleAppPosts/SampleAppPosts';

class Backend_LocalApi extends React.Component{
  thisUser = "ranggapx_";

  state = {
    username : "",
    name : "",
    fotoProfile : "",
    countPost : 0,
    countFollowers : 0,
    countFollowing : 0,
    bio : "" ,
    highlights : [],
    posts : []
  }
  
  componentDidMount = async () => {
    const dataUser = data.users[this.thisUser];
    this.setState({
      username : dataUser.username,
      name : dataUser.name,
      fotoProfile : dataUser.fotoProfile,
      countPost : dataUser.countPost,
      countFollowers : dataUser.countFollowers,
      countFollowing : dataUser.countFollowing,
      bio : dataUser.bio,
      highlights : dataUser.highlights,
      posts : dataUser.posts
    });
  }

  render(){
    return (
      <Frame>
        <Container id="Backend_LocalApi">
          <Header2 innerValue="Backend - Local API" />
          <hr />
          <ContainerContext>
            <SampleAppHeader fotoProfile={this.state.fotoProfile}/>
            <SampleAppBody>
              <SampleAppBio fotoProfile={this.state.fotoProfile} username={this.state.username} name={this.state.name} bio={this.state.bio} countPost={this.state.countPost} countFollowers={this.state.countFollowers} countFollowing={this.state.countFollowing} highlights={this.state.highlights}/>
              <span style={{backgroundColor:"lightgray", width:2, height:"50%"}}></span>
              <SampleAppPosts posts={this.state.posts}/>
            </SampleAppBody>
          </ContainerContext>
        </Container>
      </Frame>
    )  
  }
}

export default Backend_LocalApi