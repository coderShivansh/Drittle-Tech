import { Route, Content, Faq, ContactInput } from '../types';
import { LuUserCheck2 } from 'react-icons/lu';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { TbShieldCheck } from 'react-icons/tb';
import { MdDesignServices, MdOutlineHandshake } from 'react-icons/md';
import {
  FaDatabase,
  FaFacebookSquare,
  FaEthereum,
  FaRobot,
} from 'react-icons/fa';
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaUserGear,
} from 'react-icons/fa6';
import { SiFreelancer } from 'react-icons/si';
import { LuCode2 } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { IoLogoHtml5 } from 'react-icons/io';
import { AiFillAndroid } from 'react-icons/ai';
import { IoTimer } from 'react-icons/io5';
import { LuExpand } from 'react-icons/lu';

export const routes: Route[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'works 🔥',
    path: '/projects',
  },
  {
    name: 'career',
    path: '/careers',
  },
  // {
  //   name: 'Services',
  //   path: '#services',
  // },
];

export const SERVICES: Content[] = [
  {
    id: 'WebApplications',
    heading: 'Web Applications',
    description:
      'Our web solutions are designed to be fast, secure, and scalable, ensuring that your business can meet the demands of the digital age. From e-commerce platforms to complex enterprise applications, we build it all with precision.',
  },
  {
    id: 'MobileApplications',
    heading: 'Mobile Applications',
    description:
      'We develop mobile applications that are not only visually stunning but also highly functional, providing a seamless experience across devices and platforms.',
  },
  {
    id: 'CRM',
    heading: 'CRM',
    description:
      'Our CRM solutions are tailored to enhance customer interactions, improve sales processes, and streamline operations, driving better business outcomes.',
  },
  {
    id: 'SaaSSolutions',
    heading: 'SaaS Solutions',
    description:
      'We offer end-to-end SaaS development services that enable businesses to deliver their products and services over the cloud, with the flexibility and scalability that today’s competitive market demands.',
  },
  {
    id: 'SecurityServices',
    heading: 'Security Services',
    description:
      'Protecting your digital assets is our priority. We offer comprehensive cybersecurity services, including threat assessment, penetration testing, and security management, to keep your business safe from emerging threats.',
  },
  {
    id: 'Web3Development',
    heading: 'Web3 Development',
    description:
      'Embrace the decentralized future with our Web3 development services. We build decentralized applications (dApps) and integrate blockchain technology to create secure, transparent, and trustless systems that redefine how businesses operate.',
  },
  {
    id: 'AI_ML',
    heading: 'AI & ML',
    description:
      'Harness the power of AI and ML to drive automation, gain insights, and improve decision-making. Our AI solutions are designed to empower businesses with intelligent systems that learn and adapt over time.',
  },
  {
    id: 'GameDevelopment',
    heading: 'Game Development',
    description:
      "At Drittle Tech, we bring imagination to life with our game development services. Whether it's a casual mobile game, a complex multi-platform game, or immersive virtual and augmented reality experiences, we have the expertise to create engaging and innovative games that captivate audiences. Our team of creative designers and skilled developers work together to deliver games that are not only fun to play but also technically robust and visually stunning.",
  },
  {
    id: 'BlockchainDevelopment',
    heading: 'Blockchain Development',
    description:
      "We specialize in creating blockchain-based solutions that enhance transparency, security, and efficiency. Whether it's developing smart contracts, building decentralized platforms, or integrating blockchain into existing systems, we’ve got you covered.",
  },
  {
    id: 'CloudComputing',
    heading: 'Cloud Computing',
    description:
      'Our cloud services provide businesses with the tools they need to stay agile and competitive. We offer cloud strategy, migration, and management services that ensure your business is always connected, scalable, and secure.',
  },
  {
    id: 'BigData_Analytics',
    heading: 'Big Data & Analytics',
    description:
      'Unlock the full potential of your data with our Big Data and Analytics services. We help businesses turn data into actionable insights, driving smarter decisions and better business outcomes.',
  },
  {
    id: 'IoT',
    heading: 'IoT',
    description:
      'Connect the physical and digital worlds with our IoT solutions. We develop IoT systems that enable businesses to monitor, manage, and optimize their operations, from smart cities to industrial automation.',
  },
  {
    id: 'DevOps_ITA',
    heading: 'DevOps & IT Automation',
    description:
      'Accelerate your development lifecycle and improve operational efficiency with our DevOps and IT automation services. We help businesses streamline their processes, reduce time-to-market, and achieve continuous delivery.',
  },
  {
    id: 'ERP',
    heading: 'ERP',
    description:
      'Optimize your business processes with our ERP solutions. We design and implement ERP systems that integrate all facets of your business, from finance to supply chain management, into a single cohesive system.',
  },
];

export const STRENGTHS: Content[] = [
  {
    icon: LuUserCheck2,
    id: 'ClientCentricApproach',
    heading: 'Client-Centric Approach',
    description:
      'We place our clients at the heart of everything we do. Our solutions are tailored to meet your specific needs, ensuring that we deliver real value and measurable results.',
  },
  {
    icon: HiOutlineLightBulb,
    id: 'InnovationAtCore',
    heading: 'Innovation at Core',
    description:
      'Innovation drives us forward. We constantly explore new technologies and methodologies to ensure that our solutions are not only current but also future-proof.',
  },
  {
    icon: RiTeamLine,
    id: 'ExperiencedTeam',
    heading: 'Experienced Team',
    description:
      'Our team consists of seasoned professionals with deep expertise across a wide range of technologies. We are problem-solvers at heart, dedicated to delivering solutions that make a difference.',
  },
  {
    icon: TbCertificate,
    id: 'ProvenExpertise',
    heading: 'Proven Expertise',
    description:
      'With a proven track record of successful projects across various industries, we have the experience and knowledge to tackle even the most complex challenges.',
  },
  {
    icon: TbShieldCheck,
    id: 'QualityAssurance',
    heading: 'Quality Assurance',
    description:
      'Quality is non-negotiable. We adhere to rigorous quality standards to ensure that every solution we deliver is reliable, secure, and performs flawlessly.',
  },
  {
    icon: MdOutlineHandshake,
    id: 'LongTermPartnerships',
    heading: 'Long-Term Partnerships',
    description:
      'We believe in building lasting relationships with our clients. We are more than just a service provider; we are a trusted partner in your journey towards digital transformation.',
  },
  {
    icon: IoTimer,
    id: 'TimeBoundDelivery',
    heading: 'Time-Bound Delivery',
    description:
      'We prioritize meeting deadlines without compromising quality. Our team uses efficient project management to ensure timely delivery, so you can launch on schedule and stay competitive.',
  },
  {
    icon: LuExpand,
    id: 'ScalableArchitecture',
    heading: 'Scalable Architecture',
    description:
      'We build solutions that grow with your business. Whether your needs increase gradually or rapidly, our systems handle evolving demands, ensuring smooth performance and reducing the need for major updates in the future.',
  },
];

export const socialMediaLinks = [
  {
    name: 'fb',
    link: 'https://www.facebook.com/drittleTech/',
    icon: FaFacebookSquare,
  },
  {
    name: 'x',
    link: 'https://x.com/DrittleTech',
    icon: FaXTwitter,
  },
  {
    name: 'free',
    link: 'https://www.freelancer.in/u/drittletech',
    icon: SiFreelancer,
  },
  {
    name: 'insta',
    link: '',
    icon: FaInstagram,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/drittle-tech/',
    icon: FaLinkedinIn,
  },
];

export const INTERNSHIPS: (Content & {
  stipend: string;
  status: 'open' | 'closed';
  date: string;
})[] = [
  {
    id: '1',
    heading: 'Web Developer',
    description:
      'We’re hiring a Web Developer to build responsive web applications using React.js, Next.js, or Vue.js. Strong skills in JavaScript, HTML5, and CSS3 are essential. Experience with back-end technologies and SEO is a plus. Join us at Drittle Tech and contribute to exciting projects in a collaborative environment.',
    icon: LuCode2,
    date: '2025-03-10',
    status: 'open',
    stipend: `${25_000} / Month`,
  },
  {
    id: '2',
    heading: 'App Developer',
    description:
      'We’re hiring an App Developer to create innovative mobile applications for iOS and Android using Flutter, React Native, or Vue-Quasar. Strong skills in mobile development and a passion for delivering high-quality apps are essential. If you’re excited about building impactful solutions and working in a collaborative environment, we’d love to hear from you at Drittle Tech.',
    icon: CiMobile3,
    date: '2025-05-15',
    status: 'open',
    stipend: `${30_000} / Month`,
  },
  {
    id: '3',
    heading: 'Web 3 Developer',
    description:
      'We’re hiring a Web3 Developer to build dApps and smart contracts using Solidity and blockchain technologies. Experience with Web3.js or Ethers.js is essential. Join us at Drittle Tech to work on groundbreaking projects in a collaborative environment.',
    icon: FaEthereum,
    date: '2024-08-10',
    status: 'open',
    stipend: `${35_000} / Month`,
  },
];

export const FAQS: Faq[] = [
  {
    id: '1',
    question: 'What is Drittle Tech?',
    answer:
      "Drittle Tech is a dynamic IT services and software development company specializing in delivering high-quality web development, mobile app development, and UI/UX design solutions. Our experienced team excels in creating scalable and innovative digital products, including cross-platform applications, native mobile apps, and MVPs (Minimum Viable Products). We provide end-to-end services, from ideation to launch, ensuring that businesses of all sizes have the tools they need to succeed in a competitive digital landscape. Whether you're looking to build a robust website, a mobile app, or a custom software solution, Drittle Tech is here to bring your vision to life.",
  },
  {
    id: '2',
    question: 'Can you work with my existing system or software?',
    answer:
      'Absolutely. We can integrate new features, enhance functionality, or optimize your existing system for better performance. Whether you need improvements to an existing website, mobile app, or enterprise software, our team can work seamlessly with your current technology stack.',
  },
  {
    id: '3',
    question: 'Do you offer cross-platform development?',
    answer:
      'Yes, we specialize in cross-platform development, creating apps that work seamlessly across web, Android, and iOS platforms. Using technologies like Flutter, React Native, and Vue-Quasar, we ensure that your app delivers a consistent experience across devices, reducing development time and cost.',
  },
  {
    id: '4',
    question: 'Do you provide SEO services with web development?',
    answer:
      'Yes, we include SEO as part of our web development services. Our SEO offerings include on-page optimization, ensuring your site’s structure, content, and metadata are search-engine friendly. We also provide technical SEO to enhance site speed, mobile responsiveness, and overall performance, improving your visibility in search engine results.',
  },
  {
    id: '5',
    question: 'How can we get in touch with Drittle Tech?',
    answer: `Getting in touch with us is easy! Simply click on the "Book a Call" button to schedule a free consultation. Alternatively, you can also email us, and our team will get back to you promptly to discuss your project needs and answer any questions. You can also stay connected with us on LinkedIn for the latest updates and insights. We're here to help you every step of the way!`,
  },
];

export const REVIEWS = [
  {
    id: 1,
    username: 'Alex_Folsom',
    name: 'Alex Folsom',
    postedOn: '2024-08-30T12:00:00Z',
    review: 'Great product, really satisfied with the quality!',
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
  },
  {
    id: 2,
    username: 'Sherliey_Lewis',
    name: 'Sherliey Lewis',
    postedOn: '2024-08-29T14:15:00Z',
    review: 'The service was excellent, will buy again.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
  {
    id: 3,
    username: 'neil_j',
    name: 'Neil J.',
    postedOn: '2024-08-28T10:30:00Z',
    review: "Not what I expected, but it's better.",
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    id: 4,
    username: 'Silvi',
    name: 'Silvi',
    postedOn: '2024-08-27T09:45:00Z',
    review: 'Amazing experience! Highly recommended.',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  },
  {
    id: 5,
    username: 'Mithilesh',
    name: 'Mithilesh',
    postedOn: '2024-08-26T17:20:00Z',
    review: 'Fast delivery and great customer support.',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
  },
  {
    id: 6,
    username: 'emily_clark',
    name: 'Emily Clark',
    postedOn: '2024-08-25T11:10:00Z',
    review: 'The product broke after a week of use.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: 7,
    username: 'michael_brown',
    name: 'Michael Brown',
    postedOn: '2024-08-24T13:05:00Z',
    review: 'Excellent quality for the price.',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
  },
  {
    id: 8,
    username: 'sophia_white',
    name: 'Sophia White',
    postedOn: '2024-08-23T15:50:00Z',
    review: 'It arrived late, but the product is good.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 9,
    username: 'daniel_jones',
    name: 'Daniel Jones',
    postedOn: '2024-08-22T12:35:00Z',
    review: 'Customer service was very helpful.',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  },
  {
    id: 10,
    username: 'olivia_martin',
    name: 'Olivia Martin',
    postedOn: '2024-08-21T18:00:00Z',
    review: "I'm not satisfied with the product quality.",
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
];

export const BRIEF_SEVICES = [
  {
    id: 1,
    icon: AiFillAndroid,
    heading: 'Mobile App Development',
    description:
      'Visually and functionally stunning mobile apps on flutter, react-native, swift, kotlin, etc',
  },
  {
    id: 2,
    icon: IoLogoHtml5,
    heading: 'Web App Development',
    description:
      'Top-notch web services, responsive, dynamic websites in all modern tech stacks',
  },
  {
    id: 3,
    icon: FaDatabase,
    heading: 'Database Solutions',
    description:
      'Proper backend services and database management and cloud services',
  },
  {
    id: 4,
    icon: FaUserGear,
    heading: 'Maintenance & Services',
    description:
      'Delivering IT services ensuring seamless maintenance, support, and uninterrupted operations',
  },
  {
    id: 5,
    icon: MdDesignServices,
    heading: 'UI / UX Design',
    description:
      'Using tools like Figma, Adobe XD, Adobe Illustrator, Sketch, Protopie, Invision for high quality designs tailored to your needs',
  },
  {
    id: 6,
    icon: FaRobot,
    heading: 'AI / ML Development',
    description:
      'Harness the power of AI and ML to drive automation, gain insights, and improve decision-making.',
  },
];

export const CONTACT_INPUT_FIELDS: ContactInput[] = [
  {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
    required: true,
  },
  {
    id: 'Email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
  },
];

export const PROJECTS_LIMIT = 3;
