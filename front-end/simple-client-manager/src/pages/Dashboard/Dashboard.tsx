import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card, Contact } from "../../components/card/card";

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Contact[]>("contacts");
        setContacts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const renderContacts = (contactsToRender: Contact[]) =>
    contactsToRender.map((contact) => (
      <Card key={contact.id} contact={contact} />
    ));

  return (
    <section>
      <header>
        <button type="button">Adicionar contato</button>
      </header>

      <main>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <div>{renderContacts(contacts)}</div>
        )}
      </main>
    </section>
  );
};

export default Dashboard;
