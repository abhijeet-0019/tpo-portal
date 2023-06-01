import React, { useEffect, useState } from 'react';
import Navbar2 from '../components/Navbar2';
import ProfilePreview from '../components/ProfilePreview';
import useAPIData from '../../apiConfig/useAPIData';
import withAuthClient from '../../apiConfig/withAuthClient';

const Profile = () => {
  const [userAcademic, setUserAcademic] = useState(null);
  const [userPersonal, setUserPersonal] = useState(null);
  const { getItems } = useAPIData();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userID = sessionStorage.getItem('userID');
        const academicResponse = await getItems('TPO_academic_details', null, null, null, null, null, null, true);
        const academicData = academicResponse.data;
        const filteredAcademicData = academicData.filter(item => item.user_id === userID);
        setUserAcademic(filteredAcademicData);

        const personalResponse = await getItems('TPO_students_personal_details', null, null, null, null, null, null, true);
        const personalData = personalResponse.data;
        const filteredPersonalData = personalData.filter(item => item.user_id === userID);
        setUserPersonal(filteredPersonalData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      {userAcademic && userPersonal && (
        <ProfilePreview profileData={{ userAcademic, userPersonal }} />
      )}
    </Navbar2>
  );
};

export default withAuthClient(Profile);
