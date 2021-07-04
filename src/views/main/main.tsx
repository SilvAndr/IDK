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

      <Grid className="grid-container">
        <Grid className="Caixa">Box1</Grid>
        <Grid>
          <Grid className="Meio">Box2</Grid>
          <Grid className="Meio">Box3</Grid>
        </Grid>
        <Grid className="Caixa">Box4</Grid>  
      </Grid>

      <Grid className="Centro"></Grid>
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