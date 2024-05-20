import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { Collapse, Typography, List, ListItem } from "@material-tailwind/react";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import AuthModal from "../../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";

function NavList() {
  return (
    <List className="flex items-center lg:flex-row flex-col lg:items-center lg:w-auto w-full">
      <Typography
        as={Link}
        to="/products"
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <ListItem className="">Our Products</ListItem>
      </Typography>

      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <ListItem className="">About Us</ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/journal"
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <ListItem className="">
          Journal
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Head() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleUserClick = (event) => {
    // console.log("User icon clicked");
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    // console.log("Menu closed");
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
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    // if (authUser) {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  return (
    <div className="nav-container mx-auto bg-white">
      <div className="bg-[#e8e2b0] text-gray-600 py-1 text-center overflow-hidden">
        <p className="italic font-medium">
          Be BOLD<span className="ml-8"></span>Be YOU
          <span className="ml-8"></span>Be UNSTOPPABLE
        </p>
      </div>

      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          className="cursor-pointer py-0.5 align-items-center ml-10 flex flex-col items-center"
        >
          <img
            src="https://res.cloudinary.com/du5p1rnil/image/upload/v1712815729/empressa/trlajilv4tdjxco53foy.png"
            alt="Empressa"
            className="h-20 w-20"
          />
          <Typography
            variant="small"
            color="blue-gray"
            className="mt-0.25 italic"
          >
            EMPRESSA
          </Typography>
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center justify-center">
          <form className="mx-auto w-max lg:block hidden">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713751837/empressa/searchLogo.png"
                alt="Search Icon"
                className="absolute h-5 w-5 top-2 left-3"
              />
              <input
                type="search"
                placeholder="Search"
                className="h-9 w-45 rounded-full pl-10"
              />
            </div>
          </form>

          <div className="mb-1">
            {/* {authUser ? ( */}
            {auth.user ? (
              <div>
                <Avatar
                  className="h-7 w-7 mt-1 ml-2 text-white `cursor-pointer"
                  onClick={handleUserClick}
                  aria-controls={openNav ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNav ? "true" : undefined}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openUserMenu}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{ "aria-labelledby": "user-circle" }}
                >
                  {/* <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                  <MenuItem>My Orders</MenuItem> */}
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
          <div className="mb-2">
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

        <div
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
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>

      <AuthModal open={openAuthModal} handleClose={handleClose} />
    </div>
  );
}
