import { Box } from "@mui/material";

import Header from "../header";

const Layout = ({ children }) => {
  return (
    <Box>
      <div style={{ maxWidth: "1800px", margin: "auto" }}>
        <Header />
      </div>
      <Box component="main" minHeight="100vh">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
