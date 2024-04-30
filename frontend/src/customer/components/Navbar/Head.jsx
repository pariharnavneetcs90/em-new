import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
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
        className="font-medium"
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
  const handleCloseUserMenu = (event) => {
    console.log("Menu closed");
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
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

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            className="h-[100px] w-[100px] m-auto"
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex items-center justify-between">
          <div className="relative">
            <form action="" className="mx-auto w-max">
              <input
                type="search"
                placeholder=" Search"
                className="peer cursor-pointer relative h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
              />
              <img
                src="https://res.cloudinary.com/du5p1rnil/image/upload/v1713751837/empressa/searchLogo.png"
                alt="Search Icon"
                className="absolute inset-y-0 left-0 my-auto ml-3 h-4 w-4"
              />
            </form>
          </div>
<<<<<<< HEAD
          <UserCircleIcon className="h-7 w-7 mt-1" />
          <ShoppingBagIcon className="h-7 w-7" />
          {/* <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button> */}
=======
          <div>
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
                className="h-7 w-7 mt-1 cursor-pointer active:scale-50"
                onClick={handleOpen}
              />
            )}
          </div>

          <div className="ml-4 flow-root lg:ml-6">
  <Link to="/cart"
    className="group -m-2 flex items-center p-2"
  >
    <ShoppingBagIcon
      className="h-7 w-7 mt-1 cursor-pointer active:scale-50"
      aria-hidden="true"
    />
    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
    </span>
    <span className="sr-only">items in cart, view bag</span>
  </Link>
</div>

>>>>>>> 910000bfedeb59aa5609ee237cc47d63f30233f1
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
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>

      <AuthModal open={openAuthModal} onClose={handleClose} />
    </Navbar>
  );
}
