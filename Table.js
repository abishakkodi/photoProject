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
            <TableEntry picture={picture}
            changeBackGroundOnClick={this.props.changeBackGroundOnClick}
            key={picture.key}/>
          )}
        </table>
       </div>
    );
  }
}

export default Tble;