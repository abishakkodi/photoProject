import React from 'react';


class PhotoImage extends React.Component {
  constructor(props){
    super(props);
  }

   render() {
      return (
         <div>
          <img className='photoImage'src={this.props.img.url}/ >
          <div>
            <h1>{(this.props.img.url)} </h1>
          </div>
         </div>
      );
   }
}
export default PhotoImage;