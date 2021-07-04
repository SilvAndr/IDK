import "./main.css"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Typography, IconButton, Toolbar, Box } from '@material-ui/core';
import { useHistory } from "react-router";
import { Menu } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const Main = () => {
  const classes = useStyles();

  const history = useHistory();

  return (

    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
            <Button color="inherit">Silva</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className="grid-container">
        <Grid className="CaixaHeader">Box 1</Grid>
        <Grid className="CaixaSidebar">Box 2</Grid>
        <Grid className="CaixaContent">Box 3</Grid>
        <Grid className="CaixaSidebar">Box 4</Grid>
        <Grid className="CaixaContent">Box 5</Grid>
        <Grid className="CaixaEnd">Box 6</Grid>
      </div>

      <Grid className="Centro">
      </Grid>
      <Grid
        container

        direction="row"
        justify="center"
        alignItems="center"
        className="rodape">

        <Button variant="contained" className="botoesfundo"
          onClick={() => {
            history.push({
              pathname: "/credits",
              state: ""
            })
          }}
        >
          Creditos
        </Button>

      </Grid>
      <Grid>

      </Grid>

    </div>


  )






}

export default Main;