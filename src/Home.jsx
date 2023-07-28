import React, { useEffect, useState } from 'react';

const Home = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    let localUser;
    localUser = localStorage.getItem('UserDetails')
    localUser = JSON.parse(localUser)
    setUserName(localUser.userName)
  }, []);

  return (
    <div><br />
      <center>
        <h1>WELCOME TO <br /> MY QUIZ APPLICATION</h1><br />
        <h2>{userName}</h2>
      </center>
    </div>
  );
}

export default Home;
