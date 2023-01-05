import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(Container)(({ theme }) => ({
  height: "100vh",
  maxWidth: "1200px",
  paddingTop: "100px",
  margin: "auto",
  display: "flex",
}));

export const MainInfoContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1000px !important",
  display: "flex",
  flexDirection: "column",
}));

export const CardContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "900px",
  marginTop: "50px !important",
  padding: "0 !important",
}));
