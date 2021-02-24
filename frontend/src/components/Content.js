import React from "react";
import "./Content.css";
import ContentItem from "./ContentItem";
import Nav from "./Nav";
import ComplexGrid from "./ShowcaseScreen";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Content() {
  const classes = useStyles();
  return (
    <div className="cards">
      <Nav />
      <Paper>
        <h1>Learn the secrets of rediscovering yourself in God!</h1>
        <ComplexGrid />
      </Paper>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography>
              <b>Tips:</b>
              <br></br>
              Finding your purpose in life is often about discovering where you
              fit in. When we meet our “people,” we feel like we are home:
              relaxed and at ease, able to truly be ourselves. Your community
              can often help you discover how to find your purpose, or to live
              your purpose once you’ve found it.
            </Typography>
            <br></br>
            <Typography>
              <b>The love of God</b>
              <br></br>
              God’s motive for creating you was his love. The Bible says, “Long
              before he laid down earth’s foundations, he had us in mind, had
              settled on us as the focus of his love.” 5 God was thinking of you
              even before he made the world. In fact, that’s why he created it!
              God designed this planet’s environment just so we could live in
              it. We are the focus of his love and the most valuable of all his
              creation. The Bible says, “God decided to give us life through the
              word of truth so we might be the most important of all the things
              he made.” 6 This is how much God loves and values you!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.paper}>
            <ContentItem src="images/img-3.jpg" />
          </div>
          <div className={classes.paper}>
            <br></br>
            <b>It All Starts with God For everything</b>, absolutely everything,
            above and below, visible and invisible, . . . everything got started
            in him and finds its purpose in him. Colossians 1:16 (Msg)
          </div>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            Contacts
          </Typography>
          <div className={classes.paper} style={{ padding: "0px" }}>
            <div>Phone:xxx xxx xxx</div>
            <div>Email:xxx xxx xxx</div>
            <div>Facebook:xxx xxx xxx</div>
            <div>Twitter:xxx xxx xxx</div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default Content;
