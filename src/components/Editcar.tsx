import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { updateCar } from '../Restfunctions/Rest';


type Car = {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  year: number;
  price: number;
}; 

interface Props {
car: Car;
updateCar: (car: Car, link: string) => void;
link: string
}

export default function Editcar(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year: 0,
    price: 0 
}) ;

  const handleClickOpen = () => {
    console.log(props.car);
    setCar({ brand: props.car.brand, model: props.car.model, color: props.car.color, year: props.car.year, fuel: props.car.fuel, price: props.car.price});
    setOpen(true);
  }

  const handleClickClose = () => {
    setOpen(false);
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  }

  const updateCar = () => {
    handleClickClose();
    props.updateCar(car, props.link);
    // linkki tohon nweeded
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Editing car - {car.brand}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lets you modify an existing car
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
          <Button onClick={updateCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}