import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  //get users when app starts:
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  //get saved users :
  const getSavedUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };
  //set new user when sign up:
  const signup = (newUser) => {
    // new user => email , password

    const savedUsers = getSavedUsers();
    // get all users
    const exisitingUser = savedUsers.find((u) => u.email === newUser.email);
    if (exisitingUser) {
      return { success: false, message: "User already exist with this email" };
    }

    //if user dont exist:
    savedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(savedUsers));

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);
    return { success: true, message: "signed up successfully" };
  };

  //set users when login:
  const login = (userData) => {
    const savedUsers = getSavedUsers();

    const validUser = savedUsers.find(
      (u) => u.email === userData.email && u.password === userData.password
    );
    if (!validUser) {
      return { success: false, message: "invalid credentials" };
    }

    //if yes: current user set =>userData
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    setCurrentUser(validUser);
    return { success: true, message: "logged in successfully" };
  };

  //remove users when log out:
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
