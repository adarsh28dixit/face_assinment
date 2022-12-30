import { createContext, useEffect, useState } from "react";

export const FaceContext = createContext();

export const FaceProvider = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  return (
    <FaceContext.Provider value={{user}}>{props.children}</FaceContext.Provider>
  );
};
