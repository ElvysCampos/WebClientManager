interface CardProps {
  contact: Contact;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  created_at: Date;
}

export const Card = ({ contact }: CardProps) => {
  return <section>{contact.name}</section>;
};
