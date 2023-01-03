import { Container, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/system";

export const InputContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  position: "relative",
  alignItems: "center",
  width: "400px",
}));

export const TextInput = styled(InputBase)(({ theme }) => ({
  width: "350px",
  position: "relative",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  padding: "0 15px",
  fontSize: "1.25rem",
  borderRadius: 20,
  "-webkitBoxShadow": " -4px 4px 5px 0px rgba(0,0,0,0.1)",
  "-mozBoxShadow": "-4px 4px 5px 0px rgba(0,0,0,0.1)",
  boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.1)",
}));

export const SearchButton = styled(IconButton)(({ theme }) => ({
  zIndex: "3",
  position: "absolute",
  right: "10px",
  backgroundColor: "#748CDB",
  color: "#fff",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#748CDB",
  },
}));

export const Icon = styled(SearchIcon)(({ theme }) => ({
  width: "2.25rem",
  height: "2.25rem",
  transitionDuration: ".2s",
  transitionProperty: "width, height",
  "&:hover": {
    width: "2.5rem",
    height: "2.5rem",
  },
}));
