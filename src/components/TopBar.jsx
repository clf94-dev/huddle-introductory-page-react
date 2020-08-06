import React from "react";

import Grid from "@material-ui/core/Grid";

function TopBar(props) {
  return (
    <Grid container className="top-bar">
      <img alt="Logo" src={props.image} />
    </Grid>
  );
}

export default TopBar;
