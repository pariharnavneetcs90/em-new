import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
  Bars3Icon,
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
        className="font-medium text-base"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Our Products
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
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
        className="font-medium text-base"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About Us</ListItem>
      </Typography>
    </List>
  );
}

export default function Head() {
  const [openNav, setOpenNav] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const { jwt: authJwt, user: authUser } = useSelector((state) => state.auth);

  const handleUserClick = (event) => {
    console.log("User icon clicked");
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    console.log("Menu closed");
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)).catch((error) => {
        // Handle error here
        console.error("Error getting user:", error);
      });
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if (authUser) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [authUser, location.pathname, navigate]);

  return (
    <div className="nav-container mx-auto bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 align-items-center"
          style={{ minWidth: '100px' }}
        >
          <img
            src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713256699/empressa/ul5agvxpmsozwrahu5z0.png"
            alt="Empressa"
            className="h-20 w-20 lg-h-auto lg-w-auto m-auto mt-5"
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center justify-center">
          <form className="mx-auto w-max">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713751837/empressa/searchLogo.png"
                alt="Search Icon"
                className="absolute h-5 w-5 top-2 left-3"
              />
              <input
                type="search"
                placeholder="Search"
                className="h-9 w-60 rounded-full pl-10"
              />
            </div>
          </form>


          <div className="ml-auto">
            {authUser ? (
              <div>
                <UserCircleIcon
                  className="h-7 w-7 mt-1 cursor-pointer"
                  onClick={handleUserClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openUserMenu}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{ "aria-labelledby": "user-circle" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <UserCircleIcon
                className="h-7 w-7 mt-1 cursor-pointer active:scale-50 ml-2"
                onClick={handleOpen}
              />
            )}
          </div>
          <div className="m-auto mb-1">
            <Link to="/cart" className="group flex items-center p-2">
              <ShoppingBagIcon
                className="h-7 w-7 mt-1 cursor-pointer active:scale-50"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {/* Display cart item count here */}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>


        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          style={{ position: "relative" }}
        >
          {openNav ? (
            <XMarkIcon className="absolute inset-0 m-auto h-6 w-6" />
          ) : (
            <Bars3Icon className="absolute inset-0 m-auto h-6 w-6" />
          )}
        </IconButton>

      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div> */}
      </Collapse>

      <AuthModal open={openAuthModal} onClose={handleClose} />
    </div>
  );
}
