import React, { useState } from 'react';
import { FadeIn } from '../fadeIn/FadeIn';
import * as Styles from './FormStyles';
import nicaFormLogo from '../../assets/nicaLogoForm.png';

const formVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const RegisterForm = () => {
  const initialData = {
    contestantName: '',
    age: '',
    birthday: '',
    hairColor: '',
    eyeColor: '',
    parentName: '',
    address: '',
    phoneNumber: '',
    email: '',
    height: '',
    weight: '',
    schoolOrEmployemt: '',
    degreesOrAchievement: '',
    awards: '',
    noPublishPhoto: '',
    parentSignature: '',
    parentDate: '',
    contestantSignature: '',
    contestantDate: '',
  };
  const [userData, setUserData] = useState(initialData);

  const {
    contestantName,
    age,
    birthday,
    hairColor,
    eyeColor,
    parentName,
    address,
    phoneNumber,
    email,
    height,
    weight,
    schoolOrEmployemt,
    degreesOrAchievement,
    awards,
    noPublishPhoto,
    parentSignature,
    parentDate,
    contestantSignature,
    contestantDate,
  } = userData;

  const handleInputs = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <Styles.FormContainer>
      <FadeIn delay={0.2} direction='down'>
        <Styles.FormLogo>
          <img src={nicaFormLogo} alt='logo' />
          <div>
            <h1>Nica</h1>
            <small>official nigeria ltd.</small>
          </div>
        </Styles.FormLogo>
      </FadeIn>
      <FadeIn delay={0.4} direction='down' center='true'>
        <Styles.FormHeader>Face of nica 2024 entry form</Styles.FormHeader>
      </FadeIn>
      <Styles.Form
        onSubmit={handleOnSubmit}
        variants={formVariants}
        initial='hidden'
        animate='visible'
        transition={{
          staggerChildren: '0.8',
          delayChildren: '0.5',
          type: 'spring',
          delay: '0.7',
        }}
      >
        <Styles.InputBox>
          <input
            type='text'
            required
            name='contestantName'
            value={contestantName}
            onChange={handleInputs}
          />
          <span>Contestants Name</span>
        </Styles.InputBox>
        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='age'
              value={age}
              onChange={handleInputs}
            />
            <span>Age</span>
          </Styles.InputBox>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='birthday'
              value={birthday}
              onChange={handleInputs}
            />
            <span>Birthday</span>
          </Styles.InputBox>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='hairColor'
              value={hairColor}
              onChange={handleInputs}
            />
            <span>Hair Color</span>
          </Styles.InputBox>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='eyeColor'
              value={eyeColor}
              onChange={handleInputs}
            />
            <span>Eye Color</span>
          </Styles.InputBox>
        </Styles.InputBoxWrapper>
        <Styles.InputBox>
          <input
            type='text'
            required
            name='parentName'
            value={parentName}
            onChange={handleInputs}
          />
          <span>Parent's Name</span>
        </Styles.InputBox>
        <Styles.InputBox>
          <input
            type='text'
            required
            name='address'
            value={address}
            onChange={handleInputs}
          />
          <span>Mailing Address</span>
        </Styles.InputBox>
        <Styles.InputBoxWrapper primary='true'>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='phoneNumber'
              value={phoneNumber}
              onChange={handleInputs}
            />
            <span>Telephone Number</span>
          </Styles.InputBox>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='email'
              value={email}
              onChange={handleInputs}
            />
            <span>Email</span>
          </Styles.InputBox>
        </Styles.InputBoxWrapper>
        <Styles.InputBoxWrapper primary='true'>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='height'
              value={height}
              onChange={handleInputs}
            />
            <span>Height</span>
          </Styles.InputBox>
          <Styles.InputBox>
            <input
              type='text'
              required
              name='weight'
              value={weight}
              onChange={handleInputs}
            />
            <span>Weight</span>
          </Styles.InputBox>
        </Styles.InputBoxWrapper>
        <Styles.InputBox>
          <input
            type='text'
            required
            name='schoolOrEmployemt'
            value={schoolOrEmployemt}
            onChange={handleInputs}
          />
          <span>Your place of employment or school you attend</span>
        </Styles.InputBox>
        <Styles.InputBox>
          <input
            type='text'
            required
            name='degreesOrAchievement'
            value={degreesOrAchievement}
            onChange={handleInputs}
          />
          <span>
            Please list any degrees attained, scholarships, & achievements
          </span>
        </Styles.InputBox>
        <Styles.InputBox>
          <input
            type='text'
            required
            name='awards'
            value={awards}
            onChange={handleInputs}
          />
          <span>Lits any other awards or achievement (Non scholastic)</span>
        </Styles.InputBox>
        <Styles.FormInfoContainer>
          <FadeIn center='true'>
            <Styles.InfoTitle>
              Release and Waiver by Parent or Guardian
            </Styles.InfoTitle>
          </FadeIn>
          <FadeIn>
            <Styles.InfoText>
              We will publish winners on our website and may include photographs
              of individuals and groups. Names of individuals may be used to
              identify these people in photographs. Individuals with internet
              access around the world will be able to view this information. We
              will publish photographs and names only with your written
              permission. My Signature indicates that I grant permission for the
              name and/or photograph of the above exhibitor to be published on
              World Wide Web.
            </Styles.InfoText>
          </FadeIn>
          <FadeIn center='true'>
            <Styles.CheckBox>
              <h5>Do not Publish my photo on the World Wide Web</h5>
              <input
                type='checkbox'
                name='noPublishPhoto'
                value={noPublishPhoto}
                onChange={handleInputs}
              />
            </Styles.CheckBox>
          </FadeIn>
          <Styles.InputBoxWrapper primary='true'>
            <Styles.InputBox>
              <input
                type='text'
                required
                name='parentSignature'
                value={parentSignature}
                onChange={handleInputs}
              />
              <span>Signature of Parent or Guardian if under age 18</span>
            </Styles.InputBox>
            <Styles.InputBox>
              <input
                type='text'
                required
                name='parentDate'
                value={parentDate}
                onChange={handleInputs}
              />
              <span>date</span>
            </Styles.InputBox>
          </Styles.InputBoxWrapper>
          <Styles.InputBoxWrapper primary='true'>
            <Styles.InputBox>
              <input
                type='text'
                required
                name='contestantSignature'
                value={contestantSignature}
                onChange={handleInputs}
              />
              <span>Signature of Contestant if age 18 or over</span>
            </Styles.InputBox>
            <Styles.InputBox>
              <input
                type='text'
                required
                name='contestantDate'
                value={contestantDate}
                onChange={handleInputs}
              />
              <span>date</span>
            </Styles.InputBox>
          </Styles.InputBoxWrapper>
        </Styles.FormInfoContainer>
        <Styles.BtnContainer width='250px'>
          <button>Register</button>
        </Styles.BtnContainer>
      </Styles.Form>
    </Styles.FormContainer>
  );
};
