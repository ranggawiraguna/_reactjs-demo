import React from 'react';
import './TabpaneTable.css';

function TabpaneTable(props) {
  return (
    <section id={props.id} className="tab-pane fade" role="tabpanel" aria-labelledby={props.label}>
      <div name={props.id}>
        <table className="table">
          {props.children}
        </table>
      </div>
    </section>
  )
}

export default TabpaneTable