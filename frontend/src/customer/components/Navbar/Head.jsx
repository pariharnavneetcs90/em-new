import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  // Bars4Icon,
  // GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  // RectangleGroupIcon,
  SquaresPlusIcon,
  // SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  // {
  //   title: "Products",
  //   description: "Find the perfect solution for your needs.",
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   title: "About Us",
  //   description: "Meet and learn about our dedication",
  //   icon: UserGroupIcon,
  // },
  // {
  //   title: "Contact",
  //   description: "Find the perfect solution for your needs.",
  //   icon: PhoneIcon,
  // },
  // {
  //   title: "News",
  //   description: "Read insightful articles, tips, and expert opinions.",
  //   icon: NewspaperIcon,
  // },
  // {
  //   title: "Special Offers",
  //   description: "Explore limited-time deals and bundles",
  //   icon: TagIcon,
  // },
];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <Link to="/" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </Link>
//     ),
//   );

//   return (
//     <>
//       {/* <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Blog
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu> */}
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </>
//   );
// }

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
          Collections
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
        <ListItem className="flex items-center gap-2 py-2 pr-4">About Us</ListItem>
      </Typography>
    </List>
  );
}

export default function Head() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
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
            className="h-[100px] w-[100px] mr-10 "
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* search code here  */}
        <div className="hidden gap-2 lg:flex items-center">
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
          className="lg:hidden"
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
