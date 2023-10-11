import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { ContactoForm, ContactoNosotros } from "@/components/sections/contacto";

const TITLE: string = "Contacto";
const ContactoPage: NextPage = () => {
  return (
    <Layout title={TITLE}>
      <ContactoNosotros title={TITLE} className="py-10 sm:py-14" />
      <ContactoForm className="py-12 | bg-vinas-gray-1 | sm:mx-4 lg:mx-0" />      
    </Layout>
  );
};

export default ContactoPage;
