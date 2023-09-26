import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import * as Yup from 'yup';
import restaurant from '../assets/restaurant.jpg';

const BookingForm = (props) => {
  const formik = useFormik({
    initialValues: {
      resfirstName: '',
      resLastName: '',
      resDate: '',
      resTime: '',
      guests: '1',
      location: '',
      occasion: '',
    },
    onSubmit: (values) => {
      props.submitForm(values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      resfirstName: Yup.string().required('Required'),
      resLastName: Yup.string().required('Required'),
      resDate: Yup.string().required('Required'),
      resTime: Yup.string().required('Required'),
      guests: Yup.number()
        .min(2, "Must be at least 2 guests")
        .required('Required'),
      location: Yup.string().required('Required'),
      occasion: Yup.string().required('Required'),
    }),
  });

  const resFirstNameProps = formik.getFieldProps('resfirstName');
  const resLastNameProps = formik.getFieldProps('resLastName');
  const resDateProps = formik.getFieldProps('resDate');
  const resTimeProps = formik.getFieldProps('resTime');
  const locationProps = formik.getFieldProps('location');
  const occasionProps = formik.getFieldProps('occasion');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    formik.handleChange(e);
    props.dispatch(selectedDate);
  };

  return (
    <>
      <Container fluid className="bookingFixedBanner p-0">
        <Row>
          <Col className="pt-5"></Col>
        </Row>
        <Row>
          <Col className="text-center" lg={1} md={1}>
          </Col>
          <Col className="text-center" lg={4} md={4}>
            <img  className="bookingImg" src={restaurant} alt="" />
          </Col>
          <Col className="text-center" lg={6} md={6} sm={12}>
            <h1 className="bookingName pt-4">Book Online</h1>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.touched.resfirstName && !!formik.errors.resfirstName}>
                <FormLabel htmlFor="res-first-name">First Name</FormLabel>
                <Input
                  id="res-first-name"
                  name="resfirstName"
                  type="text"
                  onChange={formik.handleChange}
                  {...resFirstNameProps}
                />
                <FormErrorMessage>{formik.errors.resfirstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.resLastName && !!formik.errors.resLastName}>
                <FormLabel htmlFor="res-last-name">Last Name</FormLabel>
                <Input
                  id="res-last-name"
                  name="resLastName"
                  type="text"
                  onChange={handleDateChange}
                  {...resLastNameProps}
                />
                <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.resDate && !!formik.errors.resDate}>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input
                  id="res-date"
                  name="resDate"
                  type="date"
                  onChange={handleDateChange}
                  value={formik.values.resDate}
                  {...resDateProps}
                />
                <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.resTime && !!formik.errors.resTime}>
                <br />
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select
                  id="res-time"
                  name="resTime"
                  value={formik.values.resTime}
                  onChange={formik.handleChange}
                  disabled={!formik.values.resDate}
                  {...resTimeProps}
                >
                  {/* {props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                  ))} */}
                  {props.availableTimes && props.availableTimes.availableTimes && props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.guests && !!formik.errors.guests}>
                <br />
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <NumberInput
                  id="guests"
                  min={1}
                  max={10}
                  value={formik.values.guests}
                  onChange={(value) => formik.setFieldValue('guests', value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.location && !!formik.errors.location}>
                <br />
                <FormLabel htmlFor="location">Location</FormLabel>
                <Select
                  id="location"
                  name="location"
                  value={formik.values.location}
                  onChange={(event) => {
                    formik.handleChange(event); 
                  }}
                  {...locationProps}
                >
                  <option value="Select">Indoor/Outdoor</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                </Select> 
                <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.occasion && !!formik.errors.occasion}>
                <br />
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  value={formik.values.occasion}
                  onChange={(event) => {
                    formik.handleChange(event); 
                    event.target.style.backgroundColor = "#495E57";
                  }}
                  {...occasionProps}
                  style={{ backgroundColor: "#EDEFEE" }}
                >
                  <option value="Choose">Select Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Others">Others</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>
              <hr />
              <Button
                className="topButton"
                type="submit"
                variant="warning"
                style={{
                  width: '176px',
                  height: '49.37px',
                  color: '#000000',
                  backgroundColor: '#F4CE14',
                  borderRadius: '16px',
                  fontFamily: 'Sans-serif',
                  fontWeight: '600',
                  fontSize: '18px',
                }}
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookingForm;
