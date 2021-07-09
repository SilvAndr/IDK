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

const LeDaCaixa = () => {
  
}

const Main = () => {
  const classes = useStyles();
  const [coinBase, setCoinBase] = React.useState<string | number>('');
  const [openBase, setOpenBase] = React.useState(false);
  
  const handleChangeBase = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCoinBase(event.target.value as number);
  };

  const handleCloseBase = () => {
    setOpenBase(false);
  };

  const handleOpenBase = () => {
    setOpenBase(true);
  };

  const [coinConv, setCoinConv] = React.useState<string | number>('');
  const [openConv, setOpenConv] = React.useState(false);
  const handleChangeConv = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCoinConv(event.target.value as number);
  };

  const handleCloseConv = () => {
    setOpenConv(false);
  };

  const handleOpenConv = () => {
    setOpenConv(true);
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
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Topo">
          BOX 1
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className="Meio"
        >
          <Grid 
          item xs={6}
          container
          justify="center"
          direction="column"
          alignItems="center">
            <Grid>
              <TextField id="outlined-basic" label="Valor a converter" variant="outlined"></TextField>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Moeda Base</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openBase}
                  onClose={handleCloseBase}
                  onOpen={handleOpenBase}
                  value={coinBase}
                  onChange={handleChangeBase}
                >
                  <MenuItem value="">
                    <em>Nada</em>
                  </MenuItem>
                  <MenuItem value={10}>EUR</MenuItem>
                  <MenuItem value={20}>USD</MenuItem>
                  <MenuItem value={30}>GBP</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Converter para</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openConv}
                  onClose={handleCloseConv}
                  onOpen={handleOpenConv}
                  value={coinConv}
                  onChange={handleChangeConv}
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
            <TextField
              id="standard-read-only-input"
              label="Valor Convertido"
              defaultValue="Valor Convertido"
              InputProps={{
                readOnly: true,
              }}
            />
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