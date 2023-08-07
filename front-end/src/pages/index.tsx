import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps, NextPage } from "next";
import api from "@/services/api";
import { TContactData } from "@/types/schema.types";
import CardContact from "@/components/CardContact";
import { LoginData } from "@/types/login.types";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  contacts: TContactData[];
  Logindata: LoginData[];
}

const Home: NextPage<HomeProps> = ({ contacts }: HomeProps) => {
  return (
    <main
      className={` body grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center px-34 py-20 min-h-screen min-w-screen ${inter.className}`}
    >
      {contacts.map((contact) => {
        return <CardContact key={contact.id} contact={contact} />;
      })}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<TContactData[]>("/contacts");
  const login = await api.get<TContactData[]>("/login");

  return {
    props: { Logindata: login.data },
  };
};

export default Home;
