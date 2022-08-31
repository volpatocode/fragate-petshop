import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};
