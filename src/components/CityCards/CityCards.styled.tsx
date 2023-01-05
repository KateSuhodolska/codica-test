import {
  Card,
  Container,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/system";

export const CardContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "150px",
  margin: "0 15px 30px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
}));

export const TemperatureContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "0 !important",
}));

export const Temperature = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 !important",
}));

export const CardInfo = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "15px",
  paddingBottom: "0",
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
  width: "130px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textAlign: "center",
}));

export const Text = styled(Typography)(({ theme }) => ({}));
