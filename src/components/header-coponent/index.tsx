// @packages
import AppBar from "@mui/material/AppBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MovieIcon from "@mui/icons-material/Movie";
import React, { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderComponent: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <Container sx={{ display: "flex" }}>
          {pathname === "/" ? (
            <IconButton color="inherit">
              <MovieIcon fontSize="large" />
            </IconButton>
          ) : (
            <Button
              color="inherit"
              startIcon={<ArrowBackIosNewIcon />}
              variant="outlined"
              onClick={onClickIcon}
            >
              Back
            </Button>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
