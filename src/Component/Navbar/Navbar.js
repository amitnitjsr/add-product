import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import * as action from '../../redux/login/Action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function Navbar(props) {
    const classes = useStyles();
    const [username, setUser] = useState('');

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.username);
        }

    }, []);

    const logOut = () => {
        props.logoutUser();
        props.history.push('/signin');
    }

    return (
        <div className={classes.root}>
            <div class="container">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <span className="float-left user">
                                        Login User : {username}
                                    </span>
                                </div>
                                <div class="col" style={{ textAlign: 'end' }}>
                                    <span className="float-right logout" onClick={() => logOut()}>
                                        Logout
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        loginData: state.login.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))

