import React, { useState, useEffect } from 'react';
import { Cartable } from './Cartable';
import { Car } from './interface/Car';
import Addcar from './Addcar';
import Header from './Header';
import { fetchCarList, deleteCar, saveCar } from '../Restfunctions/Rest';

const Carlist = () => {
  const [carList, setCarList] = useState<Car[]>([]);
  const [addCarDialogOpen, setAddCarDialogOpen] = useState(false);

  const handleDeleteCar = (link: string) => {
    deleteCar(link).then(() => {
      console.log(`Deleted car: ${link}`);
      fetchCarList().then(data => setCarList(data));
    });
  };

  const handleSaveCar = (car: Car) => {
    saveCar(car).then(() => {
      console.log(`Saved car: ${JSON.stringify(car)}`);
      fetchCarList().then(data => setCarList(data));
    });
  };

  useEffect(() => {
    fetchCarList().then(data => setCarList(data));
  }, []);

  return (
    <div>
    <Header onAddCarClick={() => setAddCarDialogOpen(true)} />
      <Addcar open={addCarDialogOpen} onClose={() => setAddCarDialogOpen(false)} saveCar={handleSaveCar} />
      <Cartable carList={carList} deleteCar={handleDeleteCar} />
    </div>
  );
};

export default Carlist;
