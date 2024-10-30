import { TextField, DialogContent } from "@mui/material"

export default function CarDialogContent({ car, handleChange }) {
    return (
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="brand"
            name="brand"
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.brand}
          />
            <TextField
            required
            margin="dense"
            id="model"
            name="model"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.model}
          />
            <TextField
            required
            margin="dense"
            id="color"
            name="color"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.color}
          />
            <TextField
            required
            margin="dense"
            id="fuel"
            name="fuel"
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.fuel}
          />
          <TextField
            required
            margin="dense"
            id="modelYear"
            name="modelYear"
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.modelYear}
          />
          <TextField
            required
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={car.price}
          />
        </DialogContent>
    )
}