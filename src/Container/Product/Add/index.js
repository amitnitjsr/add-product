import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../../redux/product/Action';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col, Button } from 'reactstrap';
import signin from '../../../asset/images/signin-image.webp';
import Navbar from '../../../Component/Navbar/Navbar';
import './AddEdit.css';

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
        width: "100%",
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const AddEdit = (props) => {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [qty, setQty] = useState(null);
    const [imageurl, setImage] = useState('');

    const uploadImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (ev) {
                setImage(ev.target.result)
            }.bind(this);
            reader.readAsDataURL(e.target.files[0]);
        }
    }



    useEffect(() => {
        const { id } = props.match.params;
        const { list } = props;
        if (id) {
            const finalList = list.filter(d => d.id === parseInt(id));
            if (finalList.length) {
                const data = finalList[0];
                setName(data.name);
                setDescription(data.description);
                setPrice(data.price);
                setQty(data.qty);
                // setImage(data.imageurl);
            }
        }
    }, [props.match.params.id, props])

    const saveHandler = () => {
        if (props.match.params.id) {
            props.editProduct({ "id": parseInt(props.match.params.id), "name": name, "description": description, "price": price, "qty": qty, "imageurl": imageurl });
            props.history.push('/product');
        }
        else {
            props.addNewProduct({ "name": name, "description": description, "price": price, "qty": qty, "imageurl": imageurl });
            props.history.push('/product');
        }
    }

    const handleTextChange = (event, name) => {
        const value = event.target.value;
        if (name === "description") {
            setDescription(value);
        }
        else if (name === "name") {
            setName(value);
        }
        else if (name === "price") {
            setPrice(value);
        }
        else if (name === "qty") {
            setQty(value);
        }
    };

    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="md" style={{ padding: '4%' }}>
                <div className={classes.paper}>
                    <form className={classes.form}>
                        <Row className="textAlgin">
                            <Col>
                                {props.match.params.id ? <h1>Edit Product</h1> : <h1>Add Product</h1>}
                                <TextField
                                    className="textInput"
                                    placeholder="Product Name"
                                    value={name}
                                    onChange={(event) => handleTextChange(event, "name")}
                                    type="text"
                                /><br /><br />
                                <TextField
                                    className="textInput"
                                    placeholder="Product Description"
                                    value={description}
                                    onChange={(event) => handleTextChange(event, "description")}
                                /><br /><br />
                                <TextField
                                    className="textInput"
                                    placeholder="price"
                                    value={price}
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    onChange={(event) => handleTextChange(event, "price")}
                                /><br /><br />
                                <TextField
                                    className="textInput"
                                    placeholder="qty"
                                    value={qty}
                                    type="number"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    onChange={(event) => handleTextChange(event, "qty")}
                                /><br /><br />
                                <TextField
                                    className="textInput"
                                    placeholder="image"
                                    type="file"
                                    onChange={(event) => uploadImg(event)}
                                /><br /><br />
                                <Button style={{ backgroundColor: '#6384f9', width: '18%' }}
                                    onClick={() => saveHandler()}
                                >Add</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button style={{ backgroundColor: '#6384f9' }}
                                    onClick={() => props.history.push('/product')}
                                >Cancel</Button>
                                <br /><br />
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.product.productDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
