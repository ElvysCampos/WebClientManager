import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData } from "./LoginFormValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    signIn(data);
  };

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};

export default LoginForm;
