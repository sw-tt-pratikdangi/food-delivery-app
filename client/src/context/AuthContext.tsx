import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserType = {
  _id: string;
  name: string;
  email: string;
  token: string;
  isAdmin?: boolean;
};

type AuthContextType = {
  user: UserType | null;
  setUser: React.Dispatch<
    React.SetStateAction<UserType | null>
  >;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<UserType | null>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
};