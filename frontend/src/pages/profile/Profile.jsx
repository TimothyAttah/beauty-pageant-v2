import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneContestant } from '../../redux/actions/contestantActions';
import { FaUserCircle } from 'react-icons/fa';
import * as Styles from './ProfileStyles';

export const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { constestants } = useSelector((state) => state.constestants);
  console.log(constestants);
  useEffect(() => {
    if (id) {
      dispatch(getOneContestant(id));
    }
  }, [dispatch, id]);
  return (
    <Styles.ProfileContainer>
      <Styles.ProfileInfoSection>
        <Styles.Header>
          <div>{constestants?.profilePicture ? '' : <FaUserCircle />}</div>
          <h1>{constestants?.contestantName}</h1>
        </Styles.Header>
        <Styles.SubHeader>
          <p>
            Email: <span>{constestants?.email}</span>
          </p>
          <p>
            Phone Number: <span>{constestants?.phoneNumber}</span>
          </p>
          <p>
            Age: <span>{constestants?.age}</span>
          </p>
          <p>
            Eye Color: <span>{constestants?.eyeColor}</span>
          </p>
          <p>
            Hair Color: <span>{constestants?.hairColor}</span>
          </p>
          <p>
            Height: <span>{constestants?.height}</span>
          </p>
          <p>
            Weight: <span>{constestants?.weight}</span>
          </p>
        </Styles.SubHeader>
      </Styles.ProfileInfoSection>
    </Styles.ProfileContainer>
  );
};
