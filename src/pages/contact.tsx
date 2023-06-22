import React from "react";
import { Layout } from "@/components";
import { ContainerDiv } from "@/components/components.styles";
import {
  ContactTitle,
  ContactText,
  CImgWrapper,
  CFormImg,
  CFormBackground,
  CFormContainer,
  CFieldContainer,
  CFieldInput,
  CTextField,
  CFieldLabel,
  ContactSubmitButton,
  CAlertP,
} from "@/components/components.styles";
import { FormValues } from "@/components/interfaces";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Layout title="Contact us">
      <ContainerDiv>
        <ContactTitle>Suggestions or Recommendations?</ContactTitle>
        <ContactText>Don't hesitate and send us your idea</ContactText>
        <CImgWrapper>
          <CFormImg
            src="/contacto.jpg"
            alt="About Img"
            width={1500}
            height={1000}
          />
        </CImgWrapper>
        <CFormBackground>
          <CFormContainer onSubmit={formik.handleSubmit}>
            <CFieldContainer>
              <CFieldInput
                placeholder=" "
                type="text"
                id="name"
                name="name"
                className={
                  formik.errors.name && formik.touched.name ? "error" : ""
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
              <CFieldLabel
                className={
                  formik.errors.name && formik.touched.name ? "error" : ""
                }
              >
                Name
              </CFieldLabel>
              {formik.touched.name && formik.errors.name && (
                <div>
                  <CAlertP>{formik.errors.name}</CAlertP>
                </div>
              )}
            </CFieldContainer>
            <CFieldContainer>
              <CFieldInput
                className={
                  formik.errors.email && formik.touched.email ? "error" : ""
                }
                placeholder=" "
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              <CFieldLabel
                className={
                  formik.errors.email && formik.touched.email ? "error" : ""
                }
              >
                Email
              </CFieldLabel>
              {formik.touched.email && formik.errors.email && (
                <div>
                  <CAlertP>{formik.errors.email}</CAlertP>
                </div>
              )}
            </CFieldContainer>
            <CFieldContainer>
              <CTextField
                className={
                  formik.errors.message && formik.touched.message ? "error" : ""
                }
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                required
              />{" "}
              <CFieldLabel
                className={
                  formik.errors.message && formik.touched.message ? "error" : ""
                }
              >
                Message
              </CFieldLabel>
              {formik.touched.message && formik.errors.message && (
                <div>
                  <CAlertP>{formik.errors.message}</CAlertP>
                </div>
              )}
            </CFieldContainer>
            <ContactSubmitButton type="submit">Send</ContactSubmitButton>
          </CFormContainer>
        </CFormBackground>
      </ContainerDiv>
    </Layout>
  );
};

export default Contact;
