const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "rgb(15, 14, 15)", textAlign: "center" }}>
      <h2 style={{ color: "#fff",padding:"48px 0 56px",fontSize:"40px" }}>Send Message</h2>
      <div className="contactUs">
        <div>
          <input style={{marginRight:"29px"}} placeholder="Your name" aria-label="Username" type="text" />
          <input  placeholder="Your email" type="email" />
        </div>
        <textarea style={{marginTop:"18px"}} placeholder="Message" name="" id=""></textarea>
      </div>
      <button className="w-btn generalButton">SUBMIT</button>
    </div>
  );
};

export default ContactUs;
