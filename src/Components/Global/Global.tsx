import { createContext, useState } from "react";

interface User {
  name: string;
  email: string;
}
interface ContextData {
  showDetail: boolean;
  toggleShow: () => void;
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export const GlobalContext = createContext<ContextData>({
  showDetail: false,
  toggleShow: () => {},
  currentUser: {
    name: "",
    email: "",
  },
  setCurrentUser: (currentUser: {}) => {},
});

export const MainContext: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const toggleShow = () => {
    setShowDetail(!showDetail);
  };

  return (
    <GlobalContext.Provider
      value={{
        showDetail,
        toggleShow,
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
