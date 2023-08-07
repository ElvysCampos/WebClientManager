import RegisterForm from "@/components/login-register";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <main className="body min-h-screen flex itens-center justify-center">
      <RegisterForm />
    </main>
  );
};

export default Register;
