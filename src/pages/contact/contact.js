import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';

import { Link } from 'react-router-dom';
import './contact.scss';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    handleChange = async e => {
        this.setState({ [e.target.name]: e.target.value});
        this.setState({ [e.target.email]: e.target.value});
        this.setState({ [e.target.message]: e.target.value});
    }
    handleReset = async e => {
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({message: ''})
    }
    render(){
        const img = require('../../images/contact.jpg');

        return (
            <div className="main">
                <div className="full-page">
                    <img src={img} />
                </div>
                    <Container component="main" className="Container" maxWidth="sm">
                        <div id="flex">
                            <Typography component="h4" variant="h4">
                                Contato
                            </Typography>
                            <Link to="/">
                                <IconButton aria-label="delete" size="small">
                                    <ArrowBackIcon fontSize="inherit" />
                                </IconButton>
                            </Link>
                        </div>
                        <form className="form">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Nome:"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                                autoComplete="name"
                                id="name"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email:"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                id="email"
                                autoComplete="current-email"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                rows={5}
                                rowsMax={8}
                                fullWidth
                                name="message"
                                label="Mensagem:"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.message}
                                id="message"
                                autoComplete="current-password"
                            />
                            <br /><br />
                                <div className="divider">
                                    <Button
                                        type="submit"
                                        margin="normal"
                                        variant="outlined"
                                        className="submit"
                                    >
                                        Enviar
                                    </Button>
                                    <Button
                                        type="reset"
                                        margin="normal"
                                        variant="outlined"
                                        className="reset"
                                        onClick={this.handleReset}
                                    >
                                        Apagar
                                    </Button>
                                </div>
                            </form>
                            <div className="social">

                            </div>
                    </Container>
            </div>
        );
    }
}

export default Contact;