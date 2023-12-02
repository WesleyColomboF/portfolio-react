import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import AboutSection from "../components/about-section/AboutSection";
import SkillSection from "../components/skill-section/SkillSection";
import ContactSection from "../components/contact-section copy/ContactSection";

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton color="secondary" aria-label="delete" size="large">
              <LinkedIn fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" color="secondary" size="large">
              <GitHub fontSize="inherit" />
            </IconButton>
            <Typography
              variant="body2"
              fontWeight="500"
              noWrap
              color="secondary"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Experiências
            </Typography>
            <Typography
              variant="body2"
              fontWeight="500"
              noWrap
              color="secondary"
              component="div"
              marginLeft={"10px"}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Interesses
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Typography
                variant="h6"
                noWrap
                color="secondary"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Wesley colombo
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ margin: "40px 80px" }}>
        <SkillSection />
        <AboutSection marginTop={"50px"} />
        <ContactSection marginTop={"50px"} />
      </Box>
    </>
  );
}
