import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email,password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email,password);

      this.setState({ email: "", password: "" });
    }catch (error) {
      
    }

  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSubmit = event => {
    event.preventDefault();
    signInWithGoogle();
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I Already Have An Account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChanges={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            handleChanges={this.handleChange}
            required
          />
          <div className='buttons'>
          <CustomButton type="submit"> Sign In </CustomButton>
            <form onSubmit={this.handleGoogleSubmit}>
              <CustomButton type="submit" isGoogleSignIn> Sign In With Google </CustomButton>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
