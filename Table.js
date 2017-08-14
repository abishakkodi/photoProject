import React from 'react';
import TableEntry from './TableEntry.js';


class Tble extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
       <div>
        <table>
          {this.props.data.map((picture)=>
            <TableEntry picture={picture}/>
          )}
        </table>
       </div>
    );
  }
}

export default Tble;