import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';

const Credits = () => {
const history = useHistory();
const string = history.location.state as String;
    return (


        <div className="teste">
            <Grid
                className="Cabecalho">
                <Grid
                    item>
                    <div>Creditos</div></Grid>



            </Grid>
            <Grid 
            
            container

            direction="row"
            justify="center"
            alignItems="center"
            className="Centro">
                Obrigado por visitar :)

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
                            pathname: "/",
                            state: ""
                        })
                    }}
                >
                    Voltar
        </Button>
            </Grid>

        </div>


    )






}

export default Credits;