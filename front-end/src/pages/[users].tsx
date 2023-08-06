import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();
  const { name } = router.query;
  return <h1>Users routher funcionado{name}</h1>;
};

export default Users;
