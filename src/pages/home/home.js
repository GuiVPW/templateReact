import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import './home.scss';


class Home extends Component {
    render(){
        const img = require('../../images/home.jpg'),
        logo = require('../../images/logo.jpg'),
        margin = {margin: '95px'};

        return (
            <div className="main">
                <div className="full-page-image">
                <img src={img} />
                </div>
                <Container className="container">
                    <div>
                        <div align="center">
                            <img src={logo} className="logo"/>
                        </div>
                        <div className="title">
                            <Typography align="center" component="h2" variant="h2" >
                                Valley Liccon
                            </Typography>
                        </div>
                    </div>
                </Container>
                <div align="center" className="menu" style={margin}>
                    <Grid container className="grid" spacing={1}>
                        <Grid item xs className="content" >
                            <Link to="/projetos">
                                <Button className="item">Projetos</Button>
                            </Link>
                        </Grid>
                        <Grid item xs className="content">
                            <Link to="/sobre">
                                <Button className="item">Sobre nós</Button>
                            </Link>
                        </Grid>
                        <Grid item xs className="content">
                            <Link to="/contato">
                                <Button className="item">Contato</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Home;