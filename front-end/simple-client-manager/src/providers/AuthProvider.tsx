import React, { ReactNode, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validador.ts";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  isLoading: boolean;
}

interface LoginResponse {
  token: string;
}

export const AuthContext = React.createContext({} as AuthContextValues);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("desafio_fullstack:token");

    if (!token) {
      setIsLoading(false);
      navigate("/");
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setIsLoading(false);
  }, [navigate]);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("desafio_fullstack:token", token);
      setIsLoading(false);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
