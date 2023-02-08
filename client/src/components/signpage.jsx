import GoogleButton from "react-google-button";
import "./signin.component.css";
import { UserAuth } from "../components/context/authcontext";

export const SignInUp = (props) => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };

  return props.trigger ? (
    <div className="signInFormContainer">
      <div className="signincont" id="signincont">
        {/* <div className="form-signincont sign-up-signincont">
          <form action="#">
            <h1 className="headds">Create Account</h1>
            <div className="social-signincont">
              <a className="social asignin" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social asignin" href="#">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social asignin" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="signinspan">
              or use your email for registration
            </span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="signinbtn">Sign Up</button>
          </form>
        </div> */}
        <div className="form-signincont sign-in-signincont">
          <form action="#">
            <h1 className="headds">Sign in</h1>
            <div className="social-signincont">
              <a className="social asignin" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                onClick={handleGoogleSignIn}
                className="social asignin"
                href="#"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a className="social asignin" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a className="asignin" href="#">
              Forgot your password?
            </a>
            <button className="signinbtn">Sign In</button>
          </form>
        </div>
        <div className="soverlay-signincont">
          <div className="soverlay">
            <div className="soverlay-panel soverlay-right">
              <h1 className="headds">Hello, Friend!</h1>
              <p>
                <br />
                <quote>
                  It's not how much we give, but how much love we put into
                  giving.
                </quote>
                <br />
                <i>-MotherTeresa</i>
              </p>
              <p>New NGO? Register here!</p>
              <button className="ghost signinbtn" id="signUp">
                <a href="#">NGO Registration</a>
              </button>
              <br />
              <button className="ghost signinbtn" id="signUp">
                Admin Sign In
              </button>
              <br />
              <button
                className="signinbtn closesignin"
                id="signUp"
                onClick={() => {
                  props.setTrigger(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
// export default SignInUp;
