import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useEffect, useState } from "react";
import { Button } from '@mui/material/';
import "./CarList.css"
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";

export default function CarList() {

    const [cars, setCars] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        {field: 'brand', sort: 'asc' },
        {field: 'model' },
        {field: 'color' },
        {field: 'fuel' },
        {field: 'modelYear', headerName: "Year" },
        {field: 'price' },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filter: false,
            cellRenderer: params => <Button color="error" onClick={() => deleteCar(params.data._links.self.href)}>Delete</Button>
        },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filter: false,
            cellRenderer: params => <UpdateCar updateCar={updateCar} currentCar={params.data} />
        }
    ]);

    const defaultColDef = {
        sortable: true,
        filter: true
    }

    const autoSizeStrategy = {
        type: 'fitCellContents'
    };

    // API Kutsu
    const fetchCars = async () => {
        try {
        const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
        const data = await response.json();
        setCars(data._embedded.cars)
        console.log(data);
    }   catch (e) {
        console.error(e);
    }
    };

    // Poista auto listasta
    const deleteCar = async (url) => {
        const options = {
            method: 'DELETE'
        }

        // Confirmation prompt
        try {
        if (window.confirm("Delete car?")) {
        const response = await fetch(url, options);
        fetchCars();
        }

        } catch (e) {
            console.error(e);
        }
    }

    // Lisää auto
    const addCar = async (car) => {
        const url = 'https://car-rest-service-carshop.2.rahtiapp.fi/cars';
        const options = {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(car),
        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log('Created', data);
            fetchCars();
        }   catch (e) {
            console.error(e);
        }

    }

    // Päivitä auto
    const updateCar = async (url, car) => {
        const options = {
            method: 'PUT',
            headers: {  
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(car),
        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log('Updated', data);
            fetchCars();
        }   catch (e) {
            console.error(e);
        }

    }

    useEffect(() => fetchCars, []);


    // Render
    return (
        <div className="CarList">
            <AddCar addCar={addCar}/>
                <div className="ag-theme-material" style={{width: 1100, height: 1000}}>
                <AgGridReact 
                    rowData={cars}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    autoSizeStrategy={autoSizeStrategy}
                    accentedSort ={true}
                />
            </div> 
        </div>
    );
}
