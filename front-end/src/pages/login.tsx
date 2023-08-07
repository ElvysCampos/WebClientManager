import LoginForm from "@/components/login-form";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <main className="body min-h-screen flex itens-center justify-center">
      <LoginForm />
    </main>
  );
};

export default Login;
