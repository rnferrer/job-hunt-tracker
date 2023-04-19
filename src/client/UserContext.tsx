import React from 'react';

const UserContext = React.createContext({
  user: null, 
  setUser: (arg: any) => {}
});

export default UserContext;