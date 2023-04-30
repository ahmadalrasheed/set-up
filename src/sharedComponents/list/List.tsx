import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ListTheme } from "./Theme";
import { useTranslation } from "react-i18next";
interface ListItemsInfo {
  data: Array<string>;
}
const ListItems = ({ data }: ListItemsInfo) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // check if the current language is Arabic

  return (
    <ListTheme>
      {data.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              primary={t(text)}
              sx={{ textAlign: isRTL ? "right" : "left" }} // set the text alignment based on the current language
            />
          </ListItemButton>
        </ListItem>
      ))}
    </ListTheme>
  );
};

export default ListItems;
