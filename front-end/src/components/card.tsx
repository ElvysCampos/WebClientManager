import { UserData } from "@/schemas/users.schema";
import Image from "next/image";

interface CardProps {
  user: UserData;
}

const Card = ({ user }: CardProps) => {
  return (
    <div className="flex flex-row justify-items-end bg-blue-900 w-72 h-64 rounded-lg">
      <div className="flex flex-col items-center min-w-56">
        <p>{user.name}</p>
        <Image
          className="m-4 mb-2 w-52 h-[11.5rem]"
          width={209}
          height={18}
          src={user.name}
          alt="imagem do user"
        />
      </div>
      <div className="min-h-16 bg-slate-500 flex justify-center rounded-e-lg">
        <button>colocar um icon demo 54.40 min encina</button>
      </div>
    </div>
  );
};

export default Card;
