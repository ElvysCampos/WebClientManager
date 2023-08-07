import { useAuth } from "@/context/authContext";
import { UserData, userSchema } from "@/schemas/users.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const {register: registerUSer} = useAuth()

  const onFormsubmit = (FormData: UserData) => {
    console.log(FormData);
    registerUSer(FormData)
  };
  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">Fazer cadastro</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormsubmit)}>
        <div>
          <label htmlFor="name" className="user-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Seu Nome"
              className="user-form-input"
              {...register("name")}
            />
          </div>
        </div>
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
          <div>
            <label htmlFor="phone" className="user-form-label">
              Telefone
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Seu Telefone"
                className="user-form-input"
                {...register("phone_number")}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="user-form-button">
            Cadastrar
          </button>
        </div>

        <Link href={"/login"} className="user-form-link">
          Ir para o login
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
