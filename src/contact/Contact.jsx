import bgImage4 from "../assets/img/inner_HEADER_04.jpg";
import FirstComponent from "../home/FirstComponent";
import Contact_wrp from "./Contact_wrp";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Map from "./Map"
import ContactUs from "./ContactUs";
const Contact = () => {
  return (
    <div>
      <FirstComponent title="Contacts" subtitle="// Contact" bgImage={bgImage4} />
      <div className="card-container">
        <Contact_wrp icon={FaMapMarkerAlt} title="Location" text="29 Nicolas str," span=" New York, 987597-50" />
        <Contact_wrp icon={FaPhone} title="Phones" text="0(800) 890-90-609" span=" 0(800) 890-90-620" />
        <Contact_wrp icon={FaEnvelope} title="Email" text="sale@like-themes.com" span=" tech@like-themes.com" />
        <Contact_wrp icon={FaClock} title="Working Hours" text="Wednesday - Sunday" span=" 7:00 AM - 5:00 PM" />
      </div>
      <Map/>
      <ContactUs/>
    </div>
  );
};

export default Contact;
