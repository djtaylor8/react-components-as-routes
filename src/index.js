import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* add the navbar component */
const Navbar = () => (
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Login
    </NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Messages
    </NavLink>
  </div>
);



const Home = () => <h1>Home!</h1>;


const About = () => <h1>This is my about component!</h1>;

const SignUp = () => <hi>Sign up here!</hi>

const Messages = () => <h1>Hey look, cool messages...</h1>


const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"></input>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />  
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/messages' component={Messages} />
    </div>
  </Router>,

  document.getElementById('root')
);
