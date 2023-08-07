import { UserData } from "@/schemas/users.schema";
import { NextPage } from "next";

interface UserIdProps {
  userId: UserData;
}

const UserId: NextPage<UserIdProps> = ({ userId }: UserIdProps) => {
  return <h1>22q</h1>;
};

export default UserId;
