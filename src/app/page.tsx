import ContactUs from '@/components/ContactUs';
import Faq from '@/components/Faq/Container';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import WhyUs from '@/components/WhyUs';

export default async function Home() {
  return (
    <>
      <Header />
     <main className='flex flex-col gap-32 py-32'>
        <Projects />
        <Services />
        <WhyUs />
        <Testimonials />
        <Faq />
        <ContactUs />
      </main>
    </>
  );
}
