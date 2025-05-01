import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { ContactItem } from "../Ui";

const ContactWays = () => {
  return (
    <div className="space-y-4" data-aos="fade-right">
      <ContactItem 
        icon={<FaPhone className="text-white text-lg"/>}
        label="Phone"
        content={<Link href="tel:05316440760" className="hover:text-red-500">0 (531) 644 07 60</Link>}
        bgColor="bg-red-500"
      />
      
      <ContactItem 
        icon={<FaWhatsapp className="text-white text-lg"/>}
        label="WhatsApp"
        content={<Link href="https://wa.me/905316440760" target="_blank" className="hover:text-green-500">Chat Now</Link>}
        bgColor="bg-green-500"
      />
      
      <ContactItem 
        icon={<BiLogoGmail className="text-blue-500 text-lg"/>}
        label="Email"
        content={<Link href="mailto:odifyyy@gmail.com" className="hover:text-blue-500">odifyyy@gmail.com</Link>}
        bgColor="bg-white"
      />
      
      <ContactItem 
        icon={<FaMapMarkerAlt className="text-white text-lg"/>}
        label="Location"
        content="Türkiye, İstanbul"
        bgColor="bg-orange-500"
      />
    </div>
  )
}

export default ContactWays