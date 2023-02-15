import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from '@mui/material';
import { Car } from './interface/Car';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



interface Props {
  carList: Car[];
  deleteCar: (link: string) => void;
}

const Cartable: React.FC<Props> = ({ carList, deleteCar }) => {

  const columns = [
    {
      field: "brand",
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'model',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'color',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'fuel',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'year',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'price',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'delete',
      cellRendererFramework: (params: any) => (
        <Button
          variant='text' style={{ color: 'red' }}
          onClick={() => {
            console.log(params.value);
            deleteCar(params.value);

          }}>Delete</Button>
      ),
    },
  ];

  const rows = carList.map(car => {
    return {
      brand: car.brand,
      model: car.model,
      color: car.color,
      fuel: car.fuel,
      year: car.year,
      price: car.price,
      delete: car._links.self.href
    };
  });





  return (
    <div className="ag-theme-alpine" style={{ height: '100vh', width: '100%' }}>

      <AgGridReact
        rowData={rows}
        columnDefs={columns}>
          
      </AgGridReact>

    </div>
  )
};

export { Cartable };
