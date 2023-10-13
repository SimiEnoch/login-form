import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import "./Form.css";
import backgroundImage from "./backgroundImage.jpg"; // Import the background image
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name field is required"),
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

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <p className="image-text">Carsons</p>
          </div>

          <div className="">
            <h4 className="header-style">Please sign up to continue...</h4>
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Full Name..."
              {...register("fullName")}
            />
            <p className="text-danger">{errors.fullName?.message}</p>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control input-style"
              placeholder="Email..."
              {...register("email")}
            />
            <p className="text-danger">{errors.email?.message}</p>
            <label htmlFor="name" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control input-style"
              placeholder="Password..."
              {...register("Password")}
            />
            <p className="text-danger">{errors.Password?.message}</p>
            <button className="btn btn-primary submit-button-style">
              Submit
            </button>

            <div className="or-line">
              <span className="or-line-text">Or</span>
            </div>
            <button className="btn btn-danger submit-button-style">
              <FcGoogle /> Sign Up with Google
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
