import { GetServerSideProps, NextPage } from "next";
import { UserData } from "@/schemas/users.schema";
import api from "@/services/api";
import Card from "@/components/card";

interface HomeProps {
  user: UserData[];
}

const Home: NextPage<HomeProps> = ({ user }) => {
  return (
    <main
      className={`body grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center p-24`}
    >
      {user.map((users) => {
        return <Card key={users.id} user={users} />;
      })}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<UserData[]>("/users");
  return {
    props: { user: response.data },
  };
};

export default Home;
