import { useAuth } from "@/context/authContext";
import { LoginData, loginSchema } from "@/schemas/users.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const {login} = useAuth()

  const onFormsubmit = (FormData: LoginData) => {
    console.log(FormData);
    login(FormData)
  };
  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">Login</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormsubmit)}>
        <div>
          <label htmlFor="email" className="user-form-label">
            E-mail
          </label>
          <div className="mt-2">
            <input
              type="email"
              placeholder="example@.com"
              className="user-form-input"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="user-form-label">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Sua senha"
              className="user-form-input"
              {...register("password")}
            />
          </div>
          <Link href={"/resetPassword"} className="user-form-link">
            Esqueceu a senha ? Clique aqui
          </Link>
        </div>
        <div>
          <button type="submit" className="user-form-button">
            Entrar
          </button>
        </div>

        <Link href={"/register"} className="user-form-link">
          Não é cadastrado ainda? Clique aqui
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
