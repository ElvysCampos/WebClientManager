import { TContactData } from "@/types/schema.types";
import { FaUserGear } from "react-icons/fa6";

interface CardProps {
  contact: TContactData;
}

const CardContact = ({ contact }: CardProps) => {
  return (
    <div className="flex flex-row justify-end bg-gray-100 w-60 h-40 rounded-lg">
      <div className="flex justify-center flex-col gap-3 items-center w-[100%]">
        <p>{contact.fullName}</p>
        <p>{contact.email}</p>
        <p>{contact.telefone}</p>
      </div>
      <div className="bg-black flex justify-center rounded-e flex-col">
        <button>
          <FaUserGear className="fill-gray-500 w-9 h-11 m-1" />
        </button>
      </div>
    </div>
  );
};

export default CardContact;
