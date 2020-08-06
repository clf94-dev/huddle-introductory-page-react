import React from "react";

import Grid from "@material-ui/core/Grid";
import RegisterButton from "./RegisterButton";

import MockUp from "../images/illustration-mockups.svg";
import { ReactComponent as Bg } from "../images/bg-desktop.svg";
import Logo from "../images/logo.svg";
import TopBar from "./TopBar";

export default function App() {
  return (
    <div className="bgImg" style={{ backgroundImage: `url(${Bg})` }}>
      <TopBar image={Logo} />

      <Grid container direction="row" className="contRow">
        <Grid item md={6}>
          <img alt="MockUp" className="photo" src={MockUp} />
        </Grid>
        <Grid item md={6}>
          <Grid container className="text-cont">
            <h1> Build The Community Your Fans Will Love</h1>
            <h4>
              {" "}
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </h4>
            <RegisterButton />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
