import yup, { object, string } from 'yup';

const loginSchema = object().shape({

    email:string().required().email(),
    passwor:string().required().min(6)
});

export default loginSchema;