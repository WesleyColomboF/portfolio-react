import { Grid, Box, Typography, Avatar } from "@mui/material";
import image from "../../assets/image.jpeg";
import card from "../../assets/carta-palhaco.png";
import { BoxProps } from "@mui/material";
import { CardImage } from "./style";

const AboutSection = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Typography variant="h6" marginBottom={"30px"} color="secondary">
        Sobre mim
      </Typography>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          item
        >
          <Avatar sx={{ width: "300px", height: "300px" }} alt="" src={image} />
        </Grid>
        <Grid xs={12} md={6} item>
          <Typography variant="body1" textAlign={"justify"}>
            <b>Olá,</b> sou um desenvolvedor com foco em front-end, que vem
            atuando a dois anos neste mercado. Descobri a programação por volta
            dos dezesseis anos no ensino médio com técnico integrado
            inicialmente com a linguagem Java. Após um trabalho cujo o objetivo
            era desenvolver um jogo comecei a gostar de programa. O jogo, apesar
            da bela arte feita por um talentoso colega, não foi bem sucedido na
            questão de qualidade de código. Porém foi uma ótima experiencia à
            época que definitivamente me marcou.
          </Typography>
        </Grid>
        <Grid xs={6} item>
          <Typography variant="h5" textAlign={"justify"}>
            Sobre o jogo
          </Typography>
          <CardImage width="100" height="150" src={card} />
          <CardImage width="100" height="150" src={card} />
          <CardImage width="100" height="150" src={card} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
