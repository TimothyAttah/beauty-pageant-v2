import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getOneContestant } from '../../redux/actions/contestantActions';
import { FaUserCircle } from 'react-icons/fa';
import * as Styles from './ProfileStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
// import axios from 'axios';
import { getOneContestant as apiGetOneProfile } from '../../redux/api';

export const Profile = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await apiGetOneProfile(id);
        console.log('This is data', data.data);
        setProfile(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, [id]);

  return (
    <Styles.ProfileContainer>
      <FadeIn delay={0.2} direction='down'>
        <Styles.ProfileInfoSection>
          <FadeIn delay={0.4} direction='right'>
            <Styles.Header>
              <div>{profile?.profilePicture ? '' : <FaUserCircle />}</div>
              <h1>{profile?.contestantName}</h1>
            </Styles.Header>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.SubHeader>
              <p>
                Email: <span>{profile?.email}</span>
              </p>
              <p>
                Phone Number: <span>{profile?.phoneNumber}</span>
              </p>
              <p>
                Age: <span>{profile?.age}</span>
              </p>
              <p>
                Eye Color: <span>{profile?.eyeColor}</span>
              </p>
              <p>
                Hair Color: <span>{profile?.hairColor}</span>
              </p>
              <p>
                Height: <span>{profile?.height}</span>
              </p>
              <p>
                Weight: <span>{profile?.weight}</span>
              </p>
            </Styles.SubHeader>
          </FadeIn>
        </Styles.ProfileInfoSection>
      </FadeIn>
    </Styles.ProfileContainer>
  );
};
