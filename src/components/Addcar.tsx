import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AddCarProps {
    open: boolean;
    onClose: () => void;
    saveCar: (car: object) => void;
}

export default function Addcar(props: any) {
    const [open, setOpen] = useState(props.open);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: ''
    })

    const handleClickClose = () => {
        props.onClose();
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;

        if (value !== null) {
            setCar({ ...car, [name]: value });
        }
    };
    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);



    const save = () => {
        props.onClose();
        props.saveCar(car);
    };

    return (
        <div>
            <Dialog open={open} onClose={props.onClose}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Creates a new car to the database
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Brand"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Color"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Year"
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Fuel"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={save}>Add</Button>
                    <Button onClick={handleClickClose} variant='outlined' style={{ color: 'red' }} >Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}