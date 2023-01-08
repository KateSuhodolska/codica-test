import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(Container)({
  height: "100vh",
  maxWidth: "1200px",
  paddingTop: "100px",
  margin: "auto",
  display: "flex",
});

export const MainInfoContainer = styled(Container)({
  maxWidth: "1000px !important",
  display: "flex",
  flexDirection: "column",
});

export const CardContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "900px",
  marginTop: "50px !important",
  padding: "0 !important",
});
