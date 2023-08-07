import LoginForm from "@/components/LoginForm";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
};

export default Login;
