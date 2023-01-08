import {
  Card,
  Container,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

export const CardContainer = styled(Card)({
  position: "relative",
  width: "150px",
  margin: "0 15px 30px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
});

export const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  right: "10px",
  top: "10px",
  padding: "0",
  minWidth: "0",
  color: theme.common.black,
}));

export const Icon = styled(CloseIcon)(({ theme }) => ({
  borderRadius: 50,
  "&:hover": {
    color: theme.common.white,
    backgroundColor: theme.primary.main,
    cursor: "pointer",
  },
}));

export const CardInfo = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "15px",
  paddingBottom: "10px !important",
});

export const Title = styled(Typography)({
  width: "130px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textAlign: "center",
});

export const ImgContainer = styled("div")({
  width: "70px",
  height: "70px",
  margin: "10px 0",
});

export const TemperatureContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  padding: "0 !important",
});

export const Temperature = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 !important",
});
