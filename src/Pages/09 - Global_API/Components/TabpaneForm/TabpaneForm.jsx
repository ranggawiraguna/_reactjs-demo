import React from 'react';
import './TabpaneForm.css';

function TabpaneForm(props) {
  return (
    <section id={props.id} className="tab-pane fade" role="tabpanel" aria-labelledby={`${props.id}-tab`}>
      <div name={props.id}>
        {props.children}
      </div>
    </section>
  )
}

export default TabpaneForm