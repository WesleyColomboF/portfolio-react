import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import SkillCard from "../skill-card/SkillCard";

import { BoxProps } from "@mui/material";

import { useState } from "react";

export interface ISkillSection {
  name: string;
  percent: number;
  image: string;
  text: string;
}

import { abilities, basicAbilities, backendAbilities } from "./content";

const SkillSection = (props: BoxProps) => {
  const [selectedSkill, setSelectedSkill] = useState<ISkillSection>(
    abilities[0]
  );

  const handleSkillClick = (skill: ISkillSection) => {
    setSelectedSkill(skill);
  };

  return (
    <Box {...props}>
      <Typography variant="h6" marginBottom={"20px"} color="secondary">
        Principais Experiências
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
          <Typography variant="h6" marginBottom={"5px"} color="secondary">
            Front-end
          </Typography>
          {abilities.map((item) => (
            <SkillCard
              isSelected={item.name === selectedSkill.name}
              name={item.name}
              percent={item.percent}
              image={item.image}
              onClick={() => {
                handleSkillClick(item);
              }}
            />
          ))}
        </Grid>
        <Grid xs={12} sm={6} item>
          <Typography variant="body1" marginTop={"70px"} color="secondary">
            {selectedSkill?.text}
          </Typography>
        </Grid>
        <Grid xs={12} display={"flex"} justifyContent={"center"} item>
          <Box
            marginTop={"10px"}
            display={"flex"}
            width={"100%"}
            maxWidth={"900px"}
            justifyContent={"space-around"}
          >
            {basicAbilities.map((item) => (
              <SkillCard
                isSelected={item.name === selectedSkill.name}
                width="250px"
                name={item.name}
                percent={item.percent}
                image={item.image}
                onClick={() => {
                  handleSkillClick(item);
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            textAlign={"center"}
            variant="h6"
            marginBottom={"5px"}
            marginTop={"40px"}
            color="secondary"
          >
            Back-end
          </Typography>
          <Box
            marginTop={"10px"}
            display={"flex"}
            width={"100%"}
            maxWidth={"900px"}
            justifyContent={"space-around"}
          >
            {backendAbilities.map((item) => (
              <SkillCard
                isSelected={item.name === selectedSkill.name}
                width="250px"
                imageWidth="60px"
                imageHeight="40px"
                percent={item.percent}
                image={item.image}
                onClick={() => {
                  handleSkillClick(item);
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillSection;
