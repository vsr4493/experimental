import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import FormHelperText from '@material-ui/core/FormHelperText';
import { request } from '../../../../utility/request';
import Typography from '@material-ui/core/Typography';

// Delete everythig this is written just for Hackathon and must not be used further
// import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('AddRow', 159, 6.0, 24, 4.0)
];
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


class TableForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        qty: '',
        uom: '',
        rows: data,
        open: false
    };
    handleAddClick = () => {

    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleChange = event => {
        request(`https://demo5190193.mockable.io/sku`)
            .then(response => {
                this.setState({ name: response.data.data[0].sku_name });
                this.setState({ uom: response.data.data[0].uom });
                console.log(response.data.data[0]);
            });
        this.setState({ name: event.target.value });
    };
    handleChangeOne = event => {
        this.setState({ uom: event.target.value });
    };
    handleChangeTwo = event => {
        this.setState({ qty: event.target.value });
    };


    handleSearchButton = () => {

    }

    addRow = () => {
        this.setState((prevState, props) => {
            console.log(prevState.rows);
            var d = data.push(createData('AddRow', 159, 6.0, 24, 4.0));
            return { rows: d };
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>SKU</TableCell>
                            <TableCell numeric>UOM</TableCell>
                            <TableCell numeric>Quantity</TableCell>
                            <TableCell >
                                <Button variant="fab" color="primary" onClick={this.addRow} aria-label="Add" className={classes.button}>
                                    <AddIcon />
                                </Button>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">

                                        <FormControl className={classes.formControl}>
                                            <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                                            <FormHelperText id="name-helper-text">Enter Sku Name</FormHelperText>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <FormControl className={classes.formControl}>
                                            <Input id="name-simple" value={this.state.uom} onChange={this.handleChangeOne} />
                                            <FormHelperText id="name-helper-text">UOM INFO</FormHelperText>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <FormControl className={classes.formControl}>
                                            <Input id="name-simple" value={this.state.qty} onChange={this.handleChangeTwo} />
                                            <FormHelperText id="name-helper-text">Enter Quantity</FormHelperText>
                                        </FormControl>
                                    </TableCell>


                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.handleOpen} className={classes.button}>
                    OK
      </Button>
                <Button variant="contained" color="secondary" className={classes.button}>
                    CANCEL
      </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Create SKU Notification
              </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            MR CREATED
              </Typography>

                    </div>
                </Modal>
            </Paper>

        );
    }
}


export default withStyles(styles)(TableForm);