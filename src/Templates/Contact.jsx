import { useForm } from "@formspree/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  //!   Import URL
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  //!   Import URL
  const phoneRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (isNaN(phoneRef.current.value)) {
      toast.error("please enter a number", { position: "top-center" });
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("sent successfully !", { position: "top-center" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("something wen wrong", { position: "top-center" });
      console.log(error);
    }
  };

  return (
    <section className="contact_wrapper">
      <h4 className="contact_title">Contact Me</h4>

      <form
        className="contact_form"
        onSubmit={SubmitForm}
        onChange={onChangeHandler}
      >
        <div className="form_input">
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            required
          />
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
          />
          <input
            ref={phoneRef}
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone number "
            value={formData.phone}
          />
          <textarea
            className="rounded-md outline-none p-2"
            name="message"
            id="message"
            placeholder="leave a comment"
            value={formData.message}
          ></textarea>
        </div>
        <button className="submit_button" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Contact;
