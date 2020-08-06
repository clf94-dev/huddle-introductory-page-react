import React from "react";
import Grid from "@material-ui/core/Grid";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@material-ui/icons";

function Social() {
  return (
    <Grid container>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </Grid>
  );
}

export default Social;
