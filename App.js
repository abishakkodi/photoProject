import React from 'react';
import Tble from './Table.js';
import PhotoImage from './PhotoImage.js';

var data = [{ url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
  title: 'Cosmic Background',
  rating: 5


}]


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [{ something: true

      },
      {
        //some data
      },
      {
        //some other data
      }],
      currentPhoto: this.photos
    }
  }


   render() {
      return (
         <div>
          <h1> PhotoApp </h1>
          <br/>
            <Tble/>
            <PhotoImage/>
         </div>
      );
   }
}

export default App;