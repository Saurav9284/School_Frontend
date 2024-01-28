import React from "react";
import { MenuItem, Menu } from "semantic-ui-react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import logo from "../Assests/logo.png";
import avatar from '../Assests/avatar.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navbar = () => {
  return (
    <div>
      <Menu borderless className="navbar">
        <MenuItem>
        <img
            src={logo}
            alt="logo"
            style={{ width: 80, cursor: "pointer" }}
            
          />
        </MenuItem>
        <MenuItem className="menuitem" position="right">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            className="menuitem"
          >
            <Avatar
              alt="user"
              src={avatar}
            />
          </StyledBadge>
        </MenuItem>

        <MenuItem name="logout" className="menuitem" />
      </Menu>
    </div>
  );
};

export default Navbar;
