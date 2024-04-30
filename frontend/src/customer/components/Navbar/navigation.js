import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import AuthModal from "../../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavList() {
  return (
    <List className="mt-2 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        to="/products"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Our Products
        </ListItem>
      </Typography>
      {/* <NavListMenu /> */}
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
    </List>
  );
}

export default function Head() {
  const [openNav, setOpenNav] = useState(false);
  //  const [anchorEl, setAnchorEl] = useState(null); 
    // const openUserMenu = Boolean(anchorEl);
  const [openAuthModal, setOpenAuthModal] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { jwt: authJwt, user : authUser } = useSelector((state) => state.auth);
  const location = useLocation();

  const handleOpen = () => {
    setOpenAuthModal(true);
  }
  
  const handleClose = () => {
    setOpenAuthModal(false);
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)).catch(error => {
        console.error("Error getting user:", error);
      });
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if(authUser)
    {
      handleClose()
    }
    if (location.pathname ==="/login" || location.pathname ==="/register") {
      navigate(-1)
    }
   },[authUser, location.pathname, navigate])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 960) {
  //       setOpenNav(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);



  return (
    <Navbar className="mx-auto bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img
            src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713256699/empressa/ul5agvxpmsozwrahu5z0.png"
            alt="Empressa"
            className="h-[100px] w-[100px] mr-10 "
          />
        </Typography>
          <NavList />
          <NavList />
        <div className="hidden lg:block">
        </div>

        {/* search code here  */}
        <div className="hidden gap-2 lg:flex items-center justify-between">
          <div className="relative">
            <form action="" className="mx-auto w-max">
              <input
                type="search"
                placeholder="Search"
                className="peer cursor-pointer relative h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
              />
              <img
                src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713751837/empressa/searchLogo.png"
                alt="Search Icon"
                className="absolute inset-y-0 left-0 my-auto ml-3 h-4 w-4"
              />
            </form>
          </div>
          <UserCircleIcon className="h-7 w-7 mt-1" />
          <ShoppingBagIcon className="h-7 w-7" />
          {/* <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button> */}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden "
          onClick={() => setOpenNav(!openNav)}
          style={{ position: "relative" }}
        >
          {openNav ? (
            <XMarkIcon className="absolute inset-0 m-auto h-6 w-6" />
          ) : (
            <Bars3Icon className="absolute inset-0  m-auto h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
