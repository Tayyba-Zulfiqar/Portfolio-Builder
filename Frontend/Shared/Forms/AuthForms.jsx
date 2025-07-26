import "./AuthForms.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../UI Elements/Inputs";
import Buttons from "../UI Elements/Buttons";
import { useNavigate } from "react-router-dom";

export default function AuthForms({ mode, schema, onSubmit, onSwitch }) {
  const navigate = useNavigate();
  //USE FORM HOOK:
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  //returning UI:
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <button
            className="close-button"
            aria-label="Close"
            onClick={() => navigate("/")}>
            &times;
          </button>

          <div className="form-header">
            <h1 className="form-title">
              {mode === "signup" ? "Create Account 🌸" : " Welcome Back! 🌸"}
            </h1>
            <p className="form-subtitle">
              {mode === "signup"
                ? "Sign up to get started"
                : "Sign in to your account"}
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {mode === "signup" && (
              <Inputs
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                error={errors.name}
                register={register}
              />
            )}
            <Inputs
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              error={errors.email}
              register={register}
            />
            <Inputs
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              error={errors.password}
              register={register}
            />
            <Buttons
              className="auth-button"
              text={mode === "signup" ? "Sign Up" : "Log In"}
              disabled={isSubmitting}
            />

            <p
              className="form-subtitle"
              style={{ textAlign: "center", marginBottom: "20px" }}>
              {mode === "signup"
                ? "Already have an account? "
                : "Dont have an account? "}
            </p>

            <Buttons
              className="auth-button secondary"
              text={mode === "signup" ? "Log In" : "Sign Up"}
              onClick={onSwitch}
            />
          </form>
        </div>
      </div>
    </>
  );
}
