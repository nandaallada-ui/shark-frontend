import ContactForm from '../components/ContactForm';
import PageTitle from '../components/PageTitle';
import './ContactPage.css';

function ContactPage() {
  return (
    <main id="main-content" className="contact-main">
      <PageTitle>Contact me</PageTitle>
      <section className="topic contact-topic">
        <ContactForm />
      </section>
    </main>
  );
}

export default ContactPage;
