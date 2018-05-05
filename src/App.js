import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";
import "./App.css"


class App extends Component {
//Setting this.state.friends to the friends.json array and declaring the score variables
  state = {
    toonFriends: friends,
    score: 0,
    topScore: 0,
    navStatement: "Click an image to begin"
  };

  handleClick = (id) => {
    const targetFriend = this.state.toonFriends.filter(function(friend) {
      if(friend.id === id) {
        return friend;
      }
    });
    
    // console.log(targetFriend[0]);
    if(!targetFriend[0].clicked){
      const newScore = this.state.score + 1;
      let newTopScore = this.state.topScore;
      if(newScore > newTopScore){
       newTopScore = newScore;
      }
      this.state.toonFriends.forEach(function(friend) {
        if(friend.id === targetFriend[0].id) {
          // console.log(friend);
          friend.clicked = true;
        }
      });
      this.shufflePictures(this.state.toonFriends);
      // console.log(this.state.toonFriends);
      return this.setState({ score: newScore, navStatement: "You picked correctly!", topScore: newTopScore, toonFriends: this.state.toonFriends}); 
     } else {
       this.state.toonFriends.forEach(function(friend){
         friend.clicked = false;
       });
       return this.setState({ score: 0, navStatement: "You picked incorrectly!", toonFriends: this.state.toonFriends});
     }
    
  };

  shufflePictures = array => {
    for(let i = 0; i < array.length; i++){
      const j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  render() {
    return (
      <div>
        <Navbar 
          currentScore={this.state.score}
          topScore={this.state.topScore}
          statement={this.state.navStatement}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.toonFriends.map(friend => (          
              <div className="card">
                <button className="img-container" onClick={() => this.handleClick(friend.id)}  data-clicked={friend.clicked} data-id={friend.id}>
                    <img alt="FriendCard"  src={friend.image}  />
                </button>
              </div>
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}


export default App;
