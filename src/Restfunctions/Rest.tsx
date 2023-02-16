import { Car } from '../components/interface/Car';

export function fetchCarList(): Promise<Car[]> {
  return fetch('http://carrestapi.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => data._embedded.cars)
    .catch(error => {
      console.error(error);
      return [];
    });
}

export function deleteCar(link: string): Promise<void> {
  if (window.confirm('Would you like to delete the selected vehicle?')) {
    return fetch(link, {
      method: 'DELETE'
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete car.');
      }
    });
  } else {
    return Promise.resolve();
  }
}

export function saveCar(car: Car): Promise<void> {
  return fetch('http://carrestapi.herokuapp.com/cars', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}

export const updateCar = (car: object, link: string): Promise<void> => {
  return fetch(link, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
};
