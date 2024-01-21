import React from 'react';
import { RegisterForm } from '../../components/forms/RegisterForm';
import { Container } from '../../styles/globalStyles';
import { AnimatePresence } from 'framer-motion';

const Register = () => {
  return (
    <Container style={{ paddingTop: '130px' }}>
      <AnimatePresence>
        <RegisterForm />
      </AnimatePresence>
    </Container>
  );
};

export default Register;
