import Toast from "@/components/Toast";
import api from "@/services/api";
import { LoginData } from "@/types/login.types";
import { UserData } from "@/types/register.types";
import { useRouter } from "next/router";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  setToken: Dispatch<SetStateAction<string>>;
  token: string | undefined;
  register: (userData: UserData) => void;
  login: (loginData: LoginData) => void;
}

const authContext = createContext<authProviderData>({} as authProviderData);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  const register = (userData: UserData) => {
    api
      .post("/users", userData)
      .then((response) => {
        Toast({ message: "Usuário Criado com Sucesso!", isSucess: true }),
          router.push("/login");
      })
      .catch((err) => {
        Toast({ message: "Erro ao Criar o Usuário!" }), console.log(err);
      });
  };

  const login = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then(() => {
        Toast({ message: "Login Realizado com Sucesso!", isSucess: true }),
          router.push("/");
      })
      .catch((err) => {
        Toast({ message: "Email e/ou Senha incorretos !" }), console.log(err);
      });
  };

  return (
    <authContext.Provider value={{ login, register, token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
