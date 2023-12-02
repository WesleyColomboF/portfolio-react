import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, LinearProgress } from "@mui/material";

interface SkillCardProps {
  name?: string;
  percent: number;
  image: string;
  onClick?: () => void;
  isSelected?: boolean;
  width?: string;
  imageWidth?: string;
  imageHeight?: string;
}

export default function SkillCard({
  name,
  percent,
  image,
  onClick,
  isSelected,
  width,
  imageWidth,
  imageHeight,
}: SkillCardProps) {
  return (
    <Card
      sx={{
        cursor: "pointer",
        padding: "10px",
        marginTop: "30px",
        width: width || "300px",
        border: isSelected ? "3px solid #B2FF59" : "none",
        boxShadow: isSelected ? "none !important" : "",
      }}
      onClick={onClick}
    >
      <Box display={"flex"}>
        <img width={imageWidth || 35} height={imageHeight || 35} src={image} />
        {name && (
          <Typography marginLeft={"4px"} variant="h6" color="secondary">
            {name}
          </Typography>
        )}
      </Box>

      <LinearProgress
        sx={{ marginTop: "10px", borderRadius: "5px" }}
        color="secondary"
        variant="determinate"
        value={percent}
      />
    </Card>
  );
}
