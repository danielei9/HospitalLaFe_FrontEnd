import React from 'react';
import { useState } from 'react';
import { useTheme, useAuth } from '../Hooks';
import { height } from '@mui/system';

const MyProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const [profileImage, setProfileImage] = useState(`https://robohash.org/${Math.floor(Math.random() * 100)}.png?size=150x150`);
  console.log("MyProfile")
  console.log(user)
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ ...styles.container }}>
        <img src={profileImage} alt="Profile" style={styles.profileImage} />
        <div style={{ ...styles.nameRole }}> 
        <h2 style={styles.name}>{user ? user.user.name : "User name not provide"}</h2>
        <p style={styles.email}>{user ? user.authorities : "Authorities not provide"}</p>
        </div>
      </div>

      <div style={styles.containerColumns}>
        <div style={styles.column} >
          <h2 style={styles.h2}>User</h2>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.user.email : "Email not provide"}</p>

          <label>Name: </label>
          <p style={styles.email}>{user ? user.user.name : "Name not provide"}</p>

          <label>Surname: </label>
          <p style={styles.email}>{user ? user.user.surname : "Surname not provide"}</p>

          <label>Phone: </label>
          <p style={styles.email}>{user ? user.user.phone : "Phone not provide"}</p>
          
          <label>Postalcode: </label>
          <p style={styles.email}>{user ? user.user.postalCode : "PostalCode not provide"}</p>
          
          <label>Street: </label>
          <p style={styles.email}>{user ? user.user.street : "Street name not provide"}</p>
          
          <label>Email: </label>
          <p style={styles.email}>{user ? user.user.locality : "Locality name not provide"}</p>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.user.country : "Country name not provide"}</p>
          
        </div>
        <div style={styles.column} >
          <h2 style={styles.h2}>Council</h2>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.council.email : "Email not provide"}</p>

          <label>Name: </label>
          <p style={styles.email}>{user ? user.council.name : "Name not provide"}</p>

          <label>Surname: </label>
          <p style={styles.email}>{user ? user.council.surname : "Surname not provide"}</p>

          <label>Phone: </label>
          <p style={styles.email}>{user ? user.council.phone : "Phone not provide"}</p>
          
          <label>Postalcode: </label>
          <p style={styles.email}>{user ? user.council.postalCode : "PostalCode not provide"}</p>
          
          <label>Street: </label>
          <p style={styles.email}>{user ? user.council.street : "Street name not provide"}</p>
          
          <label>Email: </label>
          <p style={styles.email}>{user ? user.council.locality : "Locality name not provide"}</p>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.council.country : "Country name not provide"}</p>
          
        </div>
        <div style={styles.column} >
          <h2 style={styles.h2}>Business</h2>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.business.email : "Email not provide"}</p>

          <label>Name: </label>
          <p style={styles.email}>{user ? user.business.name : "Name not provide"}</p>

          <label>Surname: </label>
          <p style={styles.email}>{user ? user.business.surname : "Surname not provide"}</p>

          <label>Phone: </label>
          <p style={styles.email}>{user ? user.business.phone : "Phone not provide"}</p>
          
          <label>Postalcode: </label>
          <p style={styles.email}>{user ? user.business.postalCode : "PostalCode not provide"}</p>
          
          <label>Street: </label>
          <p style={styles.email}>{user ? user.business.street : "Street name not provide"}</p>
          
          <label>Email: </label>
          <p style={styles.email}>{user ? user.business.locality : "Locality name not provide"}</p>
          <label>Email: </label>
          <p style={styles.email}>{user ? user.business.country : "Country name not provide"}</p>
          
        </div>
      </div>
    </div>
  );
};

const styles = {
  h2:{padding: "16px"},
  p:{color:"#000"},
  column: {
    backgroundColor: "rgb(255, 255, 255)",
    margin: "10px",
    borderRadius: "25px",
  },
  containerColumns:{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: "65vh", padding: "25px" },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5BA9D9',
    padding: '20px',
    borderRadius: '10px',
    justifyContent: "center"  },
  nameRole: {
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  name: {
    color: '#fff',
    fontSize: '24px',
    marginTop: '20px',
  },
  email: {
    color: '#000',
    fontSize: '18px',
    marginTop: '10px',
  },
};
export default MyProfile;
