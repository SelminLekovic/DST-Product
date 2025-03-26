import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import GreenButton from "./GreenButton";

interface ContactData {
  tagline?: string;
  title?: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Emri është i detyrueshëm."),
    email: yup
      .string()
      .email("Ju lutemi jepni një adresë e-maili të vlefshme.")
      .required("Adresa e e-mailit është e detyrueshme."),
    phone: yup.string().required("Numri i telefonit është i detyrueshëm."),
    message: yup.string().required("Mesazhi është i detyrueshëm."),
  });

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const res = await axios.post("http://localhost:7777/api/contact", {
        data: values,
      });
      if (res.status === 200) {
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex gap-[100px] w-full items-start justify-center lg:justify-between md:gap-5 md:flex-col   px-[50px] md:px-[15px]">
      <div className="flex flex-col gap-5 w-1/3 md:w-full">
        <h1 className="text-black text-[64px] lg:text-[48px] leading-0 !m-0  md:text-4xl md:text-center">Na kontaktoni</h1>
        <p className="text-gray-600">
          Keni pyetje apo nevojë për ndihmë?
          <br />
          <br />
          Plotësoni formularin më poshtë dhe do t'ju përgjigjemi sa më shpejt të
          jetë e mundur.
          <br />
          <br />
          Presim me kënaqësi t'ju dëgjojmë!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-1/3 lg:w-1/2  md:w-full">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Emri dhe mbiemri"
                className="w-full p-2 border border-gray-300  focus:ring focus:ring-blue-300 rounded-[10px]"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300  focus:ring focus:ring-blue-300 rounded-[10px]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                type="text"
                name="phone"
                placeholder="Numri telefonit"
                className="w-full p-2 border border-gray-300  focus:ring focus:ring-blue-300 rounded-[10px]"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Mesazhi juaj"
                className="w-full p-2 border border-gray-300  focus:ring focus:ring-blue-300 rounded-[10px] h-24"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full  rounded-full bg-[#B3D138]  text-[#114677] px-[24px] py-[8px]  hover:bg-white border hover:border-[#B3D138] transition-all druation-300 text-[16px] `}
            >
              {isSubmitting ? "Duke dërguar..." : "Dërgoni një mesazh"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
