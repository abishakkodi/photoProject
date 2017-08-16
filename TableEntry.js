import React from 'react';

class TableEntry extends React.Component {
  constructor(props){
    super(props);
  }

   render() {
      return (
         <div onClick={()=> this.props.changeBackGroundOnClick(this.props.picture)}>
            <h3>Title: {this.props.picture.title}</h3>
         </div>
      );
   }
}
export default TableEntry;


