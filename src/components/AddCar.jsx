import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle'
import CarDialogContent from './CarDialogContent';

export default function AddCar({ addCar, url }) {
const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    modelYear: '',
    price: ''
});

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleChange = event => {
    setCar({...car, [event.target.name] : event.target.value})
};

const handleSave = () => {
    console.log(car);
    addCar(car);
    setOpen(false);
};


return (
<>
    <Button variant="contained" color="success" onClick={handleClickOpen}>Add Car</Button>
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>New car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Add</Button>
        </DialogActions>
      </Dialog>
      </>
    );
}
