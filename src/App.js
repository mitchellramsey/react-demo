import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";


class App extends Component {
//Setting this.state.friends to the friends.json array and declaring the score variables
  state = {
    friends,
    score: 0,
    topScore: 0,
    navStatement: "Click an image to begin"
  };



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
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              image={friend.image}
              clicked={friend.clicked}
              onClick={this.handleClick}
              />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}


export default App;
