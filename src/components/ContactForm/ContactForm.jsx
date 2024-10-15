import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = { id: "", name: "", number: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContactThunk(newContact));
    options.resetForm();
  };
  const onlyWords = /^[a-zA-Z]+$/;
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, "Only words")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/[0-9]/, "This is not a number")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <p className={s.name}>Name</p>
            <Field className={s.input} name="name"></Field>
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <p className={s.name}>Number</p>
            <Field className={s.input} name="number"></Field>
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
