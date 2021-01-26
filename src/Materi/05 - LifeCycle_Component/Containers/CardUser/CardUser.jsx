import React from 'react';
import './CardUser.css';

class CardUser extends React.Component {
  state = { editable : false }

  handleDisableEditing = ()=>{ document.querySelectorAll(`#LifeCycleComponent .card-user:nth-child(${this.props.index+1}) > div > p`).forEach((e)=>e.style.backgroundColor = "transparent"); }
  handleEnableEditing = ()=>{ document.querySelectorAll(`#LifeCycleComponent .card-user:nth-child(${this.props.index+1}) > div > p`).forEach((e)=>e.style.backgroundColor = "white"); }

  render() {
    return (
      <div className="card-user" onClick={()=>console.log(this.props)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="80%" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" /> </svg>
        <div>
          <p contentEditable={this.state.editable} suppressContentEditableWarning={true} onKeyDown={e => {if (e.keyCode === 13) e.preventDefault();}}>{this.props.name}</p>
          <p contentEditable={this.state.editable} suppressContentEditableWarning={true} onKeyDown={e => {if (e.keyCode === 13) e.preventDefault();}}>{this.props.nim}</p>
        </div>
        <button title={!this.state.editable ? "Edit":"Save"} onClick={()=> this.setState({editable:this.props.handleButtonAction(this.state.editable,this.props.index,this.handleEnableEditing,this.handleDisableEditing)})}>
          { 
            !this.state.editable ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" /> </svg> 
              :
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/> </svg>
          }          
        </button>
      </div>
    )
  }
}

export default CardUser