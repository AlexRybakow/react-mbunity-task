import { SubmitForm } from '../SubmitForm/SubmitForm';
import { ContactsBar } from '../ContactsBar/ContactsBar';
import './Page.scss';

export const Main = () => {
  return (
    <section className="contactUs">
      <h1 className="contactUs__header">Contact Us</h1>
      <p className="contactUs__text">
        Any question or remarks? Just write us a message!
      </p>
      <section className="contactUs__container">
        <ContactsBar />
        <SubmitForm />
      </section>
    </section>
  )
}