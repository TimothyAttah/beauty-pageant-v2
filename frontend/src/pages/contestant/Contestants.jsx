import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import * as Styles from './ContestantStyles';
import { getAllContestant } from '../../redux/actions/contestantActions';
import { Link } from 'react-router-dom';

export const Contestants = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContestant());
  }, [dispatch]);
  // const { contestants } = useSelector((state) => state.constestants);
  // console.log(contestants);

  const { constestants } = useSelector((state) => state?.constestants);
  console.log(constestants);
  return (
    <Styles.ContestantContainer>
      <div>
        {constestants?.map((contestant) => (
          <Link key={contestant?._id} to={`/profile/${contestant?._id}`}>
            <Styles.ProfileCard>
              <div>{contestant?.profilePicture ? '' : <FaUserCircle />}</div>
              <h1>{contestant?.contestantName}</h1>
              <p>
                Email: <span>{contestant?.email}</span>
              </p>
              <p>
                Phone Number: <span>{contestant?.phoneNumber}</span>
              </p>
              <p>
                Age: <span>{contestant?.age}</span>
              </p>
            </Styles.ProfileCard>
          </Link>
        ))}
      </div>
    </Styles.ContestantContainer>
  );
};
