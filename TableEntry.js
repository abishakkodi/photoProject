import React from 'react';

class TableEntry extends React.Component {
  constructor(props){
    super(props);
  }

   render() {
      return (
         <div>
            <h3>Title: {this.props.picture.title}</h3>

            <h4> Photographer: {this.props.picture.photographer}</h4>

            <h4>Rating : {this.props.picture.rating}</h4>

         </div>
      );
   }
}
export default TableEntry;


