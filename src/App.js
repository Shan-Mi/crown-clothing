import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// We need to pass auth info to component so that they can get access to user, no matter if they logged in via Google or Email
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // this is a method
  unsubscribeFromAuth = null;
  // We need to remove it or unsubscribe it when we finished otherwise there will be memory leaking problem

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // snapshot is another obj that we get back from firebase
        // we subscribe or listen to this userRef to any change to that data, get back the very first data anyway.
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          // console.log(this.state)
          // now we have id and other properties in our state.
          // console.log(snapShot.data());
          // then we can see all the properties which we stored in db
        });
      }
      // createUserProfileDocument(user);

      // OBS! we wrap it with an else block, otherwise it will fire twice.
      // if user log out, we set it back to null
      else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
