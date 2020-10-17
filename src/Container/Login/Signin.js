import React, { useState } from "react";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col, Button } from 'reactstrap';
import * as action from '../../redux/login/Action';
import { bindActionCreators } from 'redux';
import signin from './../../asset/images/signin-image.webp';
import './Css.css';
// import { Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        boxShadow: "0px 0px 1px 1px lightgrey"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const SignIn = (props) => {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameVal, setNameVal] = useState(true);
    const [pswVal, setpswVal] = useState(true);

    const handlePasswordValidation = () => {
        props.loginUser({ "username": name, "password": password });
        if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).isSignIn === true) {
            props.history.push('/product');
        }
    };

    const handleTextChange = (event, name) => {
        const value = event.target.value;
        if (name === "password") {
            setPassword(value);
            if (!value || value.trim().length === 0) {
                setpswVal(true);
            }
            else
                setpswVal(false);
        }
        else if (name === "name") {
            setName(value);
            if (!value || value.trim().length === 0) {
                setNameVal(true)
            }
            else
                setNameVal(false)
        }

    };

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <form className={classes.form}>
                    <Row>
                        <Col>
                            <img src={signin} alt="signin" /><br /><br /><br />
                            <Link to='/signup'><span style={{ textDecoration: 'underline' }}>Create an account</span></Link>
                        </Col>
                        <Col>
                            <h1>Sign In</h1>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="User Name"
                                error={nameVal}
                                onChange={(event) => handleTextChange(event, "name")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-account zmdi-hc-lg"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                type="password"
                                placeholder="Password"
                                error={pswVal}
                                onChange={(event) => handleTextChange(event, "password")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-lock"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <Checkbox
                            /> Rember me
                            <br /><br />
                            <Button style={{ backgroundColor: '#6384f9' }}
                                onClick={() => handlePasswordValidation()}
                                disabled={nameVal || pswVal}
                            >Log in</Button>
                            <br /><br />
                            Or login with
                            <Button style={{ color: 'white', backgroundColor: '#3434ef', margin: '7px', width: '42px' }}><i className="zmdi zmdi-facebook"></i></Button>
                            <Button style={{ color: 'white', backgroundColor: '#389ced', margin: '5px' }}><i className="zmdi zmdi-twitter"></i></Button>
                            <Button className="red"><i className="zmdi zmdi-google"></i></Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    );
};


const mapStateToProps = (state) => {
    return {
        login: state.login.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))


