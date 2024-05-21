import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import LeftSideBar from "@/src/components/shared/LeftSideBar/LeftSidebar";
const drawerWidth = 240;
const Layout = ({ children}) => {

  const { Header, SideBar} = LeftSideBar();

  return (
    <div>
      {/* <Navbar/> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Header />

        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,

            width: { sm: `calc(100% - ${drawerWidth}px)` },
            bgcolor: "#F3F3F3",
          }}
          va
        >
          <Toolbar />
          
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
