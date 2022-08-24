import yup from 'yup';

const idValidation = yup.number().required().positive();

export default idValidation;
