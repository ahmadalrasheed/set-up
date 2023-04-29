import * as React from "react";
import Button from "@mui/material/Button";
import { DrawerBox } from "./Theme";
import { VerticalNav } from "../verticalNav";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Left</Button>
      <DrawerBox anchor="left" open={open} onClose={toggleDrawer(false)}>
        <VerticalNav isMobileDrawer={true} toggleDrawer={toggleDrawer} />
      </DrawerBox>
    </div>
  );
}
