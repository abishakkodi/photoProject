import React from 'react';
import Tble from './Table.js';
import PhotoImage from './PhotoImage.js';


 var data = [{ url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
                  title: 'Cosmic Background',
                  rating: 5,
                  photographer: 'Guy1',
                  key:1},
            { url:'http://wallpapercave.com/wp/OxZ3YGU.jpg',
              title: 'Jungle Background',
              rating: 4,
              photographer: 'Guy2',
              key:2},
               { url:'http://wallpapercave.com/wp/JthAGYd.jpg',
              title: 'Desert Background',
              rating: 3,
              photographer: 'Guy3',
              key:3},
               { url:'https://regmedia.co.uk/2013/10/25/cosmos07.jpg',
              title: 'Ocean Background',
              rating: 2,
              photographer: 'Guy4',
              key:4}
                  ]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: data[0]
    }
  }

  changeBackGroundOnClick(imageObj){
    this.setState({
      currentImage: imageObj
    });
  }

   render() {
      return (
         <div>
          <h1> PhotoApp </h1>
          <br/>
            <Tble data={data}
            changeBackGroundOnClick={this.changeBackGroundOnClick.bind(this)} />
            <PhotoImage img={this.state.currentImage}/>
         </div>
      );
   }
}

export default App;