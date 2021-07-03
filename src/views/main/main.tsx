import "./main.css"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, AppBar,Typography, IconButton, Toolbar } from '@material-ui/core';
import { useHistory } from "react-router";
import MenuIcon from '@material-ui/icons/Menu';

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
  const classes = useStyles( );

  const history = useHistory();

  return (

    <div>
      <Grid className="Cabecalho">
        Ola, bem vindo ao meu 1º Site
      </Grid>

      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

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