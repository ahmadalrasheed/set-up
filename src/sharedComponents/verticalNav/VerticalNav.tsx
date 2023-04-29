import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BoxTheme } from "./Theme";
import { ListItems } from "../list";
interface VerticalNav {
  isMobileDrawer: boolean;
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
const VerticalNav = ({ isMobileDrawer, toggleDrawer }: VerticalNav) => {
  return (
    <BoxTheme
      role="presentation"
      onClick={(e: any) =>
        isMobileDrawer && toggleDrawer && toggleDrawer(false)(e)
      }
      onKeyDown={(e: any) =>
        isMobileDrawer && toggleDrawer && toggleDrawer(false)(e)
      }
    >
      <ListItems data={["Inbox", "Starred", "Send email", "Drafts"]} />
      <Divider />
      <ListItems data={["All mail", "Trash", "Spam"]} />
    </BoxTheme>
  );
};

export default VerticalNav;
