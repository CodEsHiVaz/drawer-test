import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(true);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer}>open</Button>
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          "frfdgdf"
        </Drawer>
      </React.Fragment>
    </div>
  );
}
