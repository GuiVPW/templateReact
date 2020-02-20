import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';

import { Link } from 'react-router-dom';
import './projects.scss';


class Projects extends Component {
    render(){
        const img = require('../../images/projects.jpg'),
        pj1 = require('../../images/project1.jpg'),
        pj2 = require('../../images/project2.jpg'),
        pj3 = require('../../images/project3.jpg'),
        pj4 = require('../../images/project4.jpg'),
        pj5 = require('../../images/project5.jpg'),
        pj6 = require('../../images/project6.jpg');

        return (
            <div className="main">
                <div className="full-page">
                    <img src={img} />
                </div>
                    <Container component="main" className="Container" maxWidth="sm">
                        <div id="flex">
                            <Typography component="h4" variant="h4">
                                PROJETOS
                            </Typography>
                            <Link to="/">
                                <IconButton aria-label="delete" size="small">
                                    <ArrowBackIcon fontSize="inherit" />
                                </IconButton> 
                            </Link>
                        </div>
                        <Container>
                            <Grid container item spacing={6}>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project1">
                                        <img src={pj1} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project2">
                                        <img src={pj2} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project3">
                                        <img src={pj3} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={6}>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project4">
                                        <img src={pj4} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project5">
                                        <img src={pj5} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div align="center" className="project" id="project6">
                                        <img src={pj6} className="circle"/>
                                        <Typography component="h7" variant="h7">
                                            Amelium Stectopras
                                        </Typography>
                                        <Typography component="caption" variant="caption" id="caption">
                                            Lorem&nbsp;Ipsum
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
            </div>
        );
    }
}

export default Projects;