import {
  Container,
  Box,
  Typography,
  Button,
  Skeleton as MUISkeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

export const WeatherContainer = styled(Container)(({ theme }) => ({
  width: "320px !important",
  maxHeight: "520px !important",
  borderRadius: "20px",
  position: "relative",
  backgroundColor: "#fff",
  border: "2px solid #b9deed",
  padding: "0 !important",
}));

export const Skeleton = styled(MUISkeleton)(({ theme }) => ({
  width: "320px !important",
  height: "520px !important",
}));

export const WeatherContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "10px",
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  right: "10px",
  top: "10px",
  padding: "0",
  minWidth: "0",
  color: "#000",
}));

export const Icon = styled(CloseIcon)(({ theme }) => ({
  borderRadius: 50,
  "&:hover": {
    color: "#fff",
    backgroundColor: "#748CDB",
    cursor: "pointer",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  display: "flex",
  justifyContent: "center",
  margin: "20px 0 5px",
}));

export const Paragraph = styled("span")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
}));

export const TemperatureChart = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "20px",
  height: "80px !important",
  alignItems: "end",
}));

export const TemperatureSynopsis = styled("span")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
  flexGrow: "5 !important",
  height: "30px",
  textAlign: "center",
  backgroundColor: "#ffffbf",
  border: "2px solid #ffff52",
}));
