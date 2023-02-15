import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Addcar(props:any) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
      
        if (value !== null) {
          setCar({ ...car, [name]: value });
        }
      };
      

    const save = () => {
        handleClickClose();
        props.saveCar(car);
    }

    return (
        <div>
            <Button variant="contained" style={{ margin: 10 }} color="primary" onClick={handleClickOpen}>
                Add new car
            </Button>
            <Dialog open={open} onClose={handleClickClose}>
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
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={save}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}