import React from 'react';
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router';
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as action from '../../../redux/product/Action';
import Navbar from '../../../Component/Navbar/Navbar';
import './Table.css';
import Avatar from '@material-ui/core/Avatar';

const filterBy = [{ label: 'Price', value: 'Price' }, { label: 'Quantity', value: 'Quantity' }];
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 0,
            searchInput: '',
            filterby: 'Price'
        }
    }

    sortingByPrice = () => {
        this.props.filterProduct({ 'filterBy': this.state.filterby, 'range': this.state.range });
    }

    inputSearchHandler = (name, e) => {
        this.setState({ [name]: e.target.value }, () => {
            this.props.searchProduct(this.state.searchInput)
        });
    }

    inputHandler = (name, e) => {
        this.setState({ [name]: e.target.value });
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                <Navbar />
                <div style={{ padding: '5%' }}>
                    <Row>
                        <Col sm="3">
                            <Button style={{
                                left: ' 2%',
                                position: 'relative'
                            }}
                                onClick={() =>
                                    this.props.history.push(
                                        '/product/new'
                                    )}
                            >
                                <i className="zmdi zmdi-collection-plus zmdi-hc-lg" />&nbsp;
                        Add Product
                        </Button>
                        </Col>
                        <Col sm="3">
                            <TextField id="outlined-search" label="Search field"
                                type="search" variant="outlined"
                                value={this.state.searchInput}
                                onChange={(event) => this.inputSearchHandler('searchInput', event)}
                            />
                        </Col>
                        <Col sm="4">
                            <div>
                                <div class="slidecontainer">
                                    <label>Filter By Price and Quantity</label>&nbsp;&nbsp;
                        <FormControl variant="outlined" style={{ width: '108px' }} >
                                        <Select
                                            value={this.state.filterby}
                                            onChange={(event) => this.inputHandler('filterby', event)
                                            }
                                        >
                                            {filterBy &&
                                                filterBy.map((type, index) => (
                                                    <MenuItem key={type.label} value={type.value} selected>
                                                        {type.label}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                    </FormControl>
                                    <input type="range" min="1" max="599" value={this.state.range}
                                        style={{ width: '100%' }}
                                        onChange={(e) => this.inputHandler('range', e)}
                                    />
                                </div>
                                <button className="filter" onClick={() => this.sortingByPrice()} >
                                    Filter</button>
                                <label><span>{this.state.filterby}: {this.state.range} - 599 </span></label>
                            </div>
                        </Col>
                    </Row>
                    <ReactTable
                        data={list ? list : []}
                        columns={[
                            {
                                Header: () => <div className="ID">S. No.</div>,
                                accessor: 'id',
                                className: 'text-center',
                                sortable: false,
                                filterable: false,
                                foldable: true,
                                width: 75
                            },
                            {
                                Header: () => <div className="Header" >Image</div>,
                                accessor: 'name',
                                className: 'start',
                                foldable: true,
                                width: 150,
                                Cell: (row) => {
                                    return (
                                        <span>
                                            <Avatar alt="Cindy Baker" src={row.row._original.imageurl} />
                                        </span>
                                    )
                                }
                            },
                            {
                                Header: () => <div className="Header" >Name</div>,
                                accessor: 'name',
                                className: 'text-center',
                                foldable: true
                            },
                            {
                                Header: () => <div className="Header" >Description</div>,
                                accessor: 'description',
                                foldable: true,
                                className: 'text-center',
                                // overflow: 'hidden',
                                // Cell: (row) => {
                                //     return (
                                //         <span style={{ overflow: 'hidden' }}>
                                //             {row.row._original.description}
                                //         </span>
                                //     )
                                // }
                            },
                            {
                                Header: () => <div className="Header" >Price</div>,
                                accessor: 'price',
                                foldable: true,
                                className: 'text-center',
                            },
                            {
                                Header: () => <div className="Header" >Quantity</div>,
                                accessor: 'qty',
                                foldable: true,
                                className: 'text-center',
                            },
                            {
                                Header: () => <div className="Header" >Action</div>,
                                sortable: false,
                                filterable: false,
                                className: 'Action',
                                id: 'button',
                                width: 150,
                                Cell: (row) => {
                                    return (
                                        <span className="action">
                                            <IconButton
                                                onClick={() =>
                                                    this.props.history.push(
                                                        '/product/edit/' + row.row._original.id + '/'
                                                    )}
                                            >
                                                <i className="zmdi zmdi-edit zmdi-hc-fnewstatusw table-icon" />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => this.props.deleteProduct({ 'id': row.row._original.id })}
                                            >
                                                <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                                            </IconButton>
                                        </span>
                                    );
                                }
                            },
                        ]}
                        pageSize={list.length}
                        showPaginationBottom={false}
                    />
                </div >
            </div>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Table))