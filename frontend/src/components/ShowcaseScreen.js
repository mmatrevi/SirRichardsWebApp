import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1500,
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.paper}>
        <Grid item>
          <ButtonBase>
            <img
              className={classes.img}
              alt="complex"
              src="images/purpose.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <b>Give God a chance</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Your purpose is your reason for life!
              </Typography>
              <Typography variant="body2" color="textSecondary">
                For God so loved the world, that he gave his only begotten Son,
                that whosoever believeth in him should not perish, but have
                everlasting life
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                Take the bold step today!!!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
