import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from "react";
import CarDialogContent from './CarDialogContent';

export default function UpdateCar({ updateCar, currentCar }) {
const [car, setCar] = useState(currentCar)
const [open, setOpen] = useState(false);

const url = currentCar._links.self.href;

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
    updateCar(url, car);
    setOpen(false);
};


return (
<>
    <Button onClick={handleClickOpen}>Edit</Button>
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Edit car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Edit</Button>
        </DialogActions>
      </Dialog>
      </>
    );
}
