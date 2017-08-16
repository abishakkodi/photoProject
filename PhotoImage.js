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
            <h3>{(this.props.img.title)} </h3>
            <h3>{(this.props.img.rating)} </h3>

          </div>
         </div>
      );
   }
}
export default PhotoImage;