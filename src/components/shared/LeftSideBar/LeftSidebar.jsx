import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RiInboxArchiveFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbReportMoney } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";
import Image from "next/image";

const drawerWidth = 240;

const LeftSidebar = (props) => {
  const window = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  2;
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!mobileOpen) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawer = (
    <div className="">
      {/* <Toolbar /> */}
      {/* logo */}
      <div className="my-6">
        <p className="text-center text-2xl font-bold">CRMPWA</p>
      </div>
      <Divider />
      <List>
        {/* dashboard */}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <IoMdHome className="mr-3 icon text-xl" /> Dashboard
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/"}
                >
                  Overview Dashboard
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/leadsDashboard"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/leadsDashboard"}
                >
                  Leads Dashboard
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {/* customers */}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel2-header"
                href={"/addCustomer"}
              >
                <RiTeamFill className="text-xl icon mr-3" /> Customers
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/addCustomer"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/addCustomer"}
                >
                  Add Customer
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/customerList"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/customerList"}
                >
                  Customers List
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {/* Task */}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel3-header"
              >
                <FaTasks className="text-xl mr-3 icon " /> Tasks
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/addTask"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/addTask"}
                >
                  Add Task
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/taskList"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/taskList"}
                >
                  Tasks List
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {/* blog*/}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel5-header"
              >
                <TfiWrite className="text-xl mr-3 icon" /> Blog
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/addBlog"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/addBlog"}
                >
                  Add Blog
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/allBlog"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/allBlog"}
                >
                  All Blog
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {/* invoices*/}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel6-header"
              >
                <TbReportMoney className="text-xl mr-3 icon" /> Invoices
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/addInvoices"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/addInvoices"}
                >
                  Add Invoices
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/invoicesList"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/invoicesList"}
                >
                  Invoices List
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {/* email*/}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <IoIosMailOpen className="text-xl mr-5 lg:mr-3 icon " /> Mails
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/compose"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/compose"}
                >
                  Compose
                </Link>
              </AccordionDetails>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/inbox"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/inbox"}
                >
                  Inbox
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/sent"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/sent"}
                >
                 Sent
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* users*/}
        <ListItem disablePadding>
          <ListItemButton>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <TbReportMoney className="text-xl mr-5 lg:mr-3 icon " /> Users
              </AccordionSummary>
              <AccordionDetails className="  ml-2">
                <Link
                  className={` ${
                    pathname == "/addUser"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-transparent "
                      : "text-black"
                  }  inline-block  bg-clip-text `}
                  href={"/addUser"}
                >
                  Add User
                </Link>
              </AccordionDetails>
              <AccordionDetails className=" ml-2 ">
                <Link
                  className={` ${
                    pathname == "/userList"
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500  text-transparent"
                      : "text-black"
                  }  inline-block  bg-clip-text`}
                  href={"/userList"}
                >
                  User List
                </Link>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const Header = () => (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "white",
        color: "black",
        padding: "8px",
        zIndex:"default"
      }}
    >
      <div className="flex justify-between items-center ">
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* search bar */}
          <Typography variant="h6" noWrap component="div">
            <div className="relative max-w-sm mx-auto hidden md:block ">
              <input
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                type="search"
                placeholder="Search"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-2 lg:px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 ">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                  />
                </svg>
              </button>
            </div>
          </Typography>
        </Toolbar>
        <Toolbar>
          <div className="flex items-center justify-center gap-1">
            {/* inbox icon */}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <RiInboxArchiveFill className="text-xl"></RiInboxArchiveFill>
                <span className="badge badge-xs  bg-green-600 indicator-item"></span>
              </div>
            </button>
            {/* notification icon */}
            <button className="btn btn-ghost mr-2 btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs bg-red-500  indicator-item"></span>
              </div>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image width="40" height="40"
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Inbox</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );

  const SideBar = () => (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        bgcolor: "#010A0F",
        color: "white",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
          // bgcolor: "#010A0F",
          color: "white",
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
          // bgcolor: "#010A0F",
          color: "white",
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );

  return {
    drawer,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
    mobileOpen,
    isClosing,
    Header,
    SideBar,
  };
};

export default LeftSidebar;
