import React, { useState, useEffect } from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/one-app.png";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { languageChanged } from "../../translations/languageSlice";

const useStyles = makeStyles((theme) => ({
  appbarStyle: {
    background: "#256D85 0% 0% no-repeat padding-box !important",
    opacity: 1,
    boxShadow: "0px 2px 4px #00000029 !important",
    top: 0,
    left: 0,
    //width: 1440,
    height: 60,
    alignContent: "space-between",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  toolbarStyle: {
    paddingLeft: 5,
    height: 65,
  },
  logoStyle: {
    height: 40,
    padding: "10px 35px",
  },
  select: {
    "&:before": {
      borderColor: "firebrick !important",
    },
    "&:after": {
      borderColor: "firebrick !important",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "firebrick !important",
    },
    "&:not(.Mui-disabled):hover::after": {
      borderColor: "firebrick !important",
    },
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "firebrick !important",
      },
      "&:hover fieldset": {
        borderColor: "firebrick !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "firebrick !important",
      },
    },
  },
  icon: {
    fill: "white !important",
  },
  root: {
    color: "white !important",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("language");
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    i18n.changeLanguage(language.language);
  }, []);

  const handleLanguageChange = (event) => {
    var language = event.target.value;

    i18n.changeLanguage(language);
    dispatch(
      languageChanged({
        language: language,
      })
    );
  };

  return (
    <div className="nav-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <AppBar className={classes.appbarStyle}>
          <NavLink to="/">
            <img src={Logo} className={classes.logoStyle} alt="Logo" />
          </NavLink>

          <Toolbar variant="dense" className={classes.toolbarStyle}>
            <NavLink to="/faq" className="nav-links">
              {t("home.faq")}
            </NavLink>
            <NavLink to="/about-us" className="nav-links">
              {t("home.aboutUs")}
            </NavLink>

            <div className="nav-links">
              <Select
                size="small"
                className="nav-language"
                inputProps={{
                  classes: {
                    icon: classes.icon,
                    root: classes.root,
                  },
                }}
                value={language.language}
                onChange={(e) => handleLanguageChange(e)}
              >
                <MenuItem value="dk">Danish</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
