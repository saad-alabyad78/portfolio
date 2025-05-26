import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  z-index: 1;
  padding: 0 16px;
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover:enabled {
    transform: scale(1.02);
  }
`;

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    const email = (formData.get("from_email") || "").trim();
    const phone = (formData.get("from_phone") || "").trim();
    const subject = (formData.get("subject") || "").trim();
    const message = (formData.get("message") || "").trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-\+\s()]{7,15}$/;

    if (!email && !phone) {
      newErrors.contact = "Please provide at least an email or phone number.";
    }
    if (email && !emailRegex.test(email)) {
      newErrors.from_email = "Please enter a valid email address.";
    }
    if (phone && !phoneRegex.test(phone)) {
      newErrors.from_phone = "Please enter a valid phone number.";
    }
    if (!subject) {
      newErrors.subject = "Subject is required.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }
    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors and try again.");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_yvkjv5j",
        "template_i439hbc",
        form.current,
        "ktWBPXH19j6r0Bttx"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setErrors({});
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <ToastContainer position="top-right" autoClose={5000} />
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit} noValidate>
          <ContactTitle>Get in Touch 🚀</ContactTitle>

          <ContactInput
            placeholder="Your Email"
            name="from_email"
            type="email"
            onChange={() => setErrors((prev) => ({ ...prev, from_email: undefined, contact: undefined }))}
          />
          {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}

          <ContactInput
            placeholder="Your Phone (optional)"
            name="from_phone"
            type="tel"
            onChange={() => setErrors((prev) => ({ ...prev, from_phone: undefined, contact: undefined }))}
          />
          {errors.from_phone && <ErrorText>{errors.from_phone}</ErrorText>}
          {errors.contact && <ErrorText>{errors.contact}</ErrorText>}

          <ContactInput
            placeholder="Subject"
            name="subject"
            onChange={() => setErrors((prev) => ({ ...prev, subject: undefined }))}
          />
          {errors.subject && <ErrorText>{errors.subject}</ErrorText>}

          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            onChange={() => setErrors((prev) => ({ ...prev, message: undefined }))}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
