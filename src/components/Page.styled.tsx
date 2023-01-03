import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "auto",
  paddingTop: "100px",
}));

export const CardContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "870px",
  margin: "auto",
  marginTop: "50px !important",
}));
