import React from 'react';
import Tble from './Table.js';
import PhotoImage from './PhotoImage.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [{ something: true

      },
      {

      },
      {

      }],
      currentPhoto: this.photos
    }
  }


   render() {
      return (
         <div>
          <h1> APP </h1>
          <br/>
            <Tble/>
            <PhotoImage/>
         </div>
      );
   }
}
export default App;