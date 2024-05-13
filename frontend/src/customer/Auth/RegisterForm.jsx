import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { getUser, register } from "../../State/Auth/Action";
import Loader from "./../components/Loader/Loader"
import { useRegisterMutation } from './../../slices/usersApiSlice'
import { toast } from "react-toastify"
import { setCredentials } from "../../slices/authSlice";
// import { store } from './../../State/store';
// import { auth } from './../../State/store';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const jwt = localStorage.getItem("jwt");
  // const { auth } = useSelector((store) => store);

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   }
  // }, [jwt, auth.jwt]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();


  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }

    // const data = new FormData(event.currentTarget);

    // const userData = {
    //   firstName: data.get("firstName"),
    //   lastName: data.get("lastName"),
    //   email: data.get("email"),
    //   password: data.get("password"),
    // };

    // dispatch(register(userData));
    // console.log("user data", userData);
    // dispatch(register(userData))
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Name"
              name="Name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              onChange={(e)=> setName(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button disabled={isLoading} 
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Register
            </Button>
            {isLoading && <Loader />}
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">if you have already account ?</p>
          {/* <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button> */}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
