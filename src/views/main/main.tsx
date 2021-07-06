import "./main.css"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Typography, IconButton, Toolbar, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useHistory } from "react-router";
import { Menu } from '@material-ui/icons';
import React from "react";


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
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

const Main = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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


      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid className="Topo">Box1</Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className="Meio"
        >
          <Grid item xs={6}>
            Box3

            <Grid>
              <TextField id="outlined-basic" label="Valor a converter" variant="outlined"></TextField>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Moeda</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Nada</em>
                  </MenuItem>
                  <MenuItem value={10}>EUR</MenuItem>
                  <MenuItem value={20}>USD</MenuItem>
                  <MenuItem value={30}>GBP</MenuItem>
                </Select>
              </FormControl>

            </Grid>
            
          </Grid>
          <Grid item xs={6}>
            Box4
          </Grid>
        </Grid>
        <Grid className="Fundo">Box2</Grid>
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