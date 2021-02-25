import React from 'react';
import './DropdownData.css';

function DropdownData() {
  return (
    <nav>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pilih Kategori Data</button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" data-toggle="tab" href="#programming" role="tab" aria-controls="programming" aria-selected="false">Programming Skills</a>
          <a className="dropdown-item" data-toggle="tab" href="#software" role="tab" aria-controls="software" aria-selected="false">Software Skills</a>
          <a className="dropdown-item" data-toggle="tab" href="#educations" role="tab" aria-controls="educations" aria-selected="false">Educations</a>
          <a className="dropdown-item" data-toggle="tab" href="#workExperiences" role="tab" aria-controls="workExperiences" aria-selected="false">Work Experiences</a>
          <a className="dropdown-item" data-toggle="tab" href="#certificateSeminar" role="tab" aria-controls="certificateSeminar" aria-selected="false">Certificate Seminar</a>
          <a className="dropdown-item" data-toggle="tab" href="#hobbies" role="tab" aria-controls="hobbies" aria-selected="false">Hobbies</a>
          <a className="dropdown-item" data-toggle="tab" href="#socialMedia" role="tab" aria-controls="socialMedia" aria-selected="false">Social Media</a>
        </div>
      </div>
    </nav>
  )
}

export default DropdownData