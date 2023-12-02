import Typography from "@mui/material/Typography";
import { Grid, Box, TextField } from "@mui/material";
import reactSvg from "../../assets/react.svg";
import SkillCard from "../skill-card/SkillCard";
import angularImage from "../../assets/angular.png";
import vueImage from "../../assets/vue.png";
import jsImage from "../../assets/js.png";
import cssImage from "../../assets/css.png";
import htmlImage from "../../assets/html.png";
import { BoxProps } from "@mui/material";

import { useState } from "react";

interface ISkillSection {
  name: string;
  percent: number;
  image: string;
  text: string;
}

const ContactSection = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Typography variant="h6" marginBottom={"20px"} color="secondary">
        Contato
      </Typography>
      <Grid container>
        <Grid xs={12} display={"flex"} justifyContent={"center"} item>
          <TextField id="filled-basic" label="Nome" variant="filled" />
          <TextField id="filled-basic" label="E-mail" variant="filled" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
