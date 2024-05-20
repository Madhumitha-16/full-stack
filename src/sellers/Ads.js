import { Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const Ads = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    street: '',
    city: '',
    area: '',
    state: '',
    price: '',
    bed_count: '',
    room_count: '',
    home_type: 'Apartment', // default value
    type: 'rent', // default value
    amenities: [],
  });
console.log(formValues)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormValues((prevState) => ({
        ...prevState,
        amenities: [...prevState.amenities, name],
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        amenities: prevState.amenities.filter((amenity) => amenity !== name),
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3307/add-post',
      data: formValues,
    })
      .then((res) => {
        console.log('Note created');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <form className="Post-form" onSubmit={handleSave}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Post New AD</h3>
          <div className="form-group mt-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control mt-1"
              placeholder="eg. 2BHK Villa"
              value={formValues.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control mt-1"
              placeholder="eg. 2BHK Villa with various facilities"
              value={formValues.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Type</label>
              <br />
              <input
                type="radio"
                className="input-radio"
                value="rent"
                name="type"
                checked={formValues.type === 'rent'}
                onChange={handleInputChange}
                required
              /> Rent
              <input
                type="radio"
                className="input-radio"
                value="lease"
                name="type"
                checked={formValues.type === 'lease'}
                onChange={handleInputChange}
                required
              /> Lease
            </div>
            <div className="col-md-6">
              <label>Price</label>
              <input
                type="text"
                name="price"
                className="form-control mt-1"
                placeholder="10000"
                value={formValues.price}
                onChange={handleInputChange}
                required
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Home Type</label>
              <select
                className="form-control mt-1"
                name="home_type"
                value={formValues.home_type}
                onChange={handleInputChange}
              >
                <option value="Apartment">Apartment</option>
                <option value="Individual Villa">Individual Villa</option>
                <option value="Shared Room">Shared Room</option>
                <option value="Colony">Colony</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>No. of Bedrooms</label>
              <input
                type="number"
                name="bed_count"
                className="form-control mt-1"
                placeholder="0"
                value={formValues.bed_count}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label>No. of Rooms</label>
              <input
                type="number"
                name="room_count"
                className="form-control mt-1"
                placeholder="0"
                value={formValues.room_count}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Street</label>
              <input
                type="text"
                name="street"
                className="form-control mt-1"
                placeholder="Street"
                value={formValues.street}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Area</label>
              <input
                type="text"
                name="area"
                className="form-control mt-1"
                placeholder="Area"
                value={formValues.area}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control mt-1"
                placeholder="eg. Chennai"
                value={formValues.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label>State</label>
              <input
                type="text"
                name="state"
                className="form-control mt-1"
                placeholder="eg. Tamil Nadu"
                value={formValues.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group mt-3 row">
            <label>Amenities</label>
            <div className="form-check col-md-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="water"
                name="Water"
                checked={formValues.amenities.includes('Water')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="water">
                Water
              </label>
            </div>
            <div className="form-check col-md-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="ac"
                name="AC"
                checked={formValues.amenities.includes('AC')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="ac">
                AC
              </label>
            </div>
            <div className="form-check col-md-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="furnished"
                name="Furnished"
                checked={formValues.amenities.includes('Furnished')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="furnished">
                Furnished
              </label>
            </div>
            <div className="form-check col-md-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="lift"
                name="Lift"
                checked={formValues.amenities.includes('Lift')}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="lift">
                Lift
              </label>
            </div>
          </div>
          <div className="form-group mt-3 row">
            <label>Upload Images</label>
            <input type="file" className="mt-1 col-md-6" />
            <button type="submit" className="col-md-3">
              Upload
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Ads;
