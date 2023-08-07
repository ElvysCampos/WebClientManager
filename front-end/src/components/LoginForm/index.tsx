import { useAuth } from "@/contexts/Auth/auth.context";
import { loginSchema } from "@/schemas/loginSchema";
import { LoginData } from "@/types/login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onFormsubmit = (formData: LoginData) => {
    console.log(formData);
    login(formData);
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
