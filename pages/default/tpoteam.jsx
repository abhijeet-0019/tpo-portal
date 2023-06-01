import React from 'react'
import styles from "./tpoTeam.module.css";
import mbmPHOTO from "../../public/assets/mbmPHOTO.jpg";
import Image from "next/image";
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'

const tpoteam = () => {
  return (
    <Navbar2 loginStatus={false} userType={'applicant'}>
      <div className={styles.container}>
        <h1>Training and Placement Cell-MBM University</h1>
        <Image src={mbmPHOTO} alt="University Photo" className={styles.image} />
        <div className={styles.details}>
          <p>
            The Training and Placement Cell works ceaselessly to provide smooth
            communication between companies and student Our students spend over 3
            months in industry as part of their Practical training. In addition to
            doing internships in reputed companies across India our students also
            actively participate in research projects at IIT Jodhpur and other
            institutes of national repute. I extend you a heartly invitation to
            visit our campus for recruitment.
          </p>
          <p>
            We throughout the year to place undergraduates and postgraduates in
            top reputed organisations.Also organize various training programmes
            and sessions to help students improve their technical skills,
            interpersonal skills, and soft skills and personality development,
            LRDI (logical reasoning and data interpretation), training on
            quantitative aptitude and training on verbal ability of the students
            are the areas which are worked upon for enhancing the knowledge. All
            these things help in fulfilling the objective of creating maximum
            employment opportunities for the student. Students of MBM Jodhpur are
            also given internship opportunities that help in exploring the
            corporate world gaining valuable experience and refining the skills
            they possess.
          </p>
        </div>
        <h2>TPO Core- Team (Students)</h2>
        <div className={styles.volunteers}>
          <div className={styles.volunteer}>
            <h3>Tanya Agarwal</h3>
            <p>+91-9352586038</p>
          </div>
          <div className={styles.volunteer}>
            <h3>Abhijeet Singh</h3>
            <p>+91-8209868716</p>
          </div>
          <div className={styles.volunteer}>
            <h3>Raghav Sharma</h3>
            <p>+91-7976214528</p>
          </div>
          <div className={styles.volunteer}>
            <h3>Pratyush Chourasia</h3>
            <p>+91-6376315848</p>
          </div>
          <div className={styles.volunteer}>
            <h3>Priyansh Devpura</h3>
            <p>+91-9602747107</p>
          </div>
        </div>
      </div>

    </Navbar2>
  )
}

export default tpoteam