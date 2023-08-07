import RegisterForm from "@/components/RegisterForm";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <RegisterForm />
    </main>
  );
};

export default Register;
