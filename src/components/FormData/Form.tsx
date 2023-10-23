import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import "./Form.css";
import backgroundImage from "./backgroundImage.jpg"; // Import the background image
import { FcGoogle } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

const Form = () => {
  const schema = yup.object().shape({
    // fullName: yup.string().required("Full name field is required"),
    email: yup.string().email().required("Email field is required"),
    Password: yup
      .string()
      .min(8)
      .max(20)
      .required("Passwords can contain symbols, letters, and numbers"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    if (Object.keys(data).length === 0) {
      setFormSubmitted(!formSubmitted);
    } else {
      console.log(data);
      setFormSubmitted(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container">
      <div className="form-container">
        <div className="imageStyle">
          <img
            alt="ddd"
            src={backgroundImage}
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
            }}
          />
          <p className="image-text"></p>
          <h2 className="header-style"> Carsons </h2>
          <p className="carsons-login-p">
            Please sign in to continue... We've got you covered.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Full Name..."
              {...register("fullName")}
            /> */}
            {/* <p className="text-danger">{errors.fullName?.message}</p> */}
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Email..."
              {...register("email")}
            />
            <p className="text-danger error-message-text">
              {errors.email?.message}
            </p>
            <label htmlFor="name" className="form-label">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control input-style"
              placeholder="Password..."
              value={password}
              {...register("Password")}
              onChange={handlePasswordChange}
            />
            <p className="text-danger error-message-text">
              {errors.Password?.message}
            </p>
            <div className="tick-button-div">
              <button
                type="button"
                className={`show-password-btn ${showPassword ? "" : "active"}`}
                onClick={handlePasswordToggle}
              >
                <FaCheck className="tick-icon" />
              </button>
              {showPassword ? "Hide Password" : "Show Password"}
            </div>

          

            <button className="btn btn-primary submit-button-style">
              Submit
            </button>

            <div className="or-line">
              <span className="or-line-text">Or</span>
            </div>
            <button className="btn btn-danger submit-button-style">
              <FcGoogle /> Sign In With Google
            </button>
          </div>
        </form>
      </div>
      {/* <div className="side-div">
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            molestias, soluta fugit, dolore, corporis asperiores numquam
            laboriosam autem repudiandae obcaecati aspernatur? Provident
            incidunt quis id possimus harum iste unde aperiam.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Form;
