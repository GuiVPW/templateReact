import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';

import { Link } from 'react-router-dom';
import './about.scss';


class About extends Component {
    render(){
        const img = require('../../images/about.jpg'),
        av1 = require('../../images/circle1.jpg'),
        av2 = require('../../images/circle2.jpg'),
        av3 = require('../../images/circle3.jpg'),
        av4 = require('../../images/circle4.jpg');

        return (
            <div className="main">
                <div className="full-page">
                    <img src={img} />
                </div>
                    <Container component="main" className="Container" maxWidth="sm">
                        <div id="flex">
                            <Typography component="h4" variant="h4">
                                SOBRE NÓS
                            </Typography>
                            <Link to="/">
                                <IconButton aria-label="delete" size="small">
                                    <ArrowBackIcon fontSize="inherit" />
                                </IconButton>
                            </Link>
                        </div>
                        <Container className="devs">
                            <Link to="https://www.linkedin.com/in/guilherme-p-17b8b2114/">
                                <div className="circle-content" align="center" id="worker1">
                                    <img src={av1} className="circle"/>
                                    <Typography component="h6" variant="h6">
                                        Guilherme <br />Vieira
                                    </Typography>
                                    <Typography component="caption" variant="caption">
                                        CEO
                                    </Typography>
                                </div>
                            </Link>
                            <Link to="https://www.linkedin.com/in/guilherme-p-17b8b2114/">
                                <div className="circle-content" align="center" id="worker2">
                                    <img src={av2} className="circle"/>
                                    <Typography component="h6" variant="h6">
                                        Alissa <br /> Seville
                                    </Typography>
                                    <Typography component="caption" variant="caption">
                                        CTO
                                    </Typography>
                                </div>
                            </Link>
                            <Link to="https://www.linkedin.com/in/guilherme-p-17b8b2114/">
                                <div className="circle-content" align="center" id="worker3">
                                    <img src={av3} className="circle"/>
                                    <Typography component="h6" variant="h6">
                                        Andréia <br /> Pallomo
                                    </Typography>
                                    <Typography component="caption" variant="caption">
                                        Designer
                                    </Typography>
                                </div>
                            </Link>
                            <Link to="https://www.linkedin.com/in/guilherme-p-17b8b2114/">
                                <div className="circle-content" align="center" id="worker4">
                                    <img src={av4} className="circle"/>
                                    <Typography component="h6" variant="h6">
                                        Júlio <br /> Valesco
                                    </Typography>
                                    <Typography component="caption" variant="caption">
                                        Redator
                                    </Typography>
                                </div>
                            </Link>
                        </Container><br />
                        <Container id="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br /><br /> 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invid.
                        </Container>
                    </Container>
            </div>
        );
    }
}

export default About;