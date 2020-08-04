import fetch from 'isomorphic-fetch'

export const getAllRentals = async () => {
  const response = await fetch(`http://localhost:8080/api/results`);
  const rentals = await response.json();
  const ids = await getAllRentalIds(rentals);
  return { rentals, ids };
}

const getAllRentalIds = response => {
  return response.map(rental => {
    return { params: { id: rental._id } }
  });
}

export const getRentalData = async rentalId => {
    const response = await fetch(`http://localhost:8080/api/rental/${rentalId}`);
    return await response.json();
}

export const addNewVan = async formData => {
  const jsonData = JSON.stringify(formData);
  const response = await fetch(`http://localhost:8080/api/rental/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonData
  });
  return response;
}