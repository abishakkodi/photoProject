import React from 'react';
import Tble from './Table.js';
import PhotoImage from './PhotoImage.js';


 var data = [{ url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
                  title: 'Cosmic Background',
                  rating: 5,
                  photographer: 'Guy1'},
            { url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
              title: 'Jungle Background',
              rating: 4,
              photographer: 'Guy2'},
               { url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
              title: 'Desert Background',
              rating: 3,
              photographer: 'Guy3'},
               { url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
              title: 'Ocean Background',
              rating: 2,
              photographer: 'Guy4'}
                  ]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: data[0]
    }
  }

   render() {


      return (
         <div>
          <h1> PhotoApp </h1>
          <br/>
            <Tble data={data} />
            <PhotoImage img={this.state.currentVideo}/>
         </div>
      );
   }
}

export default App;