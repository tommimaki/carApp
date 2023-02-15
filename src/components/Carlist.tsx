import React,{useState, useEffect} from 'react';
import {Cartable} from './Cartable';
import { Car } from './interface/Car';




const Carlist = () =>{
    
    const [carList, setCarList] = useState<Car[]>([]);

    
    const fetchCarList = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
          .then(response => response.json())
          .then(data => setCarList(data._embedded.cars))
          .catch(error => console.error(error));
      };
    
    const deleteCar = (link : string) => {
        if (window.confirm("Would you like to delete selected vehicle?")){
        fetch(link, {
          method: 'DELETE',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to delete car.');
            }
            const deletedCar = carList.find(car => car._links.self.href === car._links.self.href );
            console.log(`Deleted car: ${JSON.stringify(deletedCar)}`);
            fetchCarList();
          })
          .catch(error => {
            console.error(error);
          });
        }
      };

      
      useEffect(() => {
        fetchCarList();
      }, []);


    return (
        <div>
        <Cartable carList={carList}  deleteCar={deleteCar}/>
    </div>
  );
}

export default Carlist
