import Hero from '../components/Hero';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PageBreadCrumbs from '../components/PageBreadCrumbs';

const Contact = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },

    // Validate form
    validationSchema: yup.object({
      firstname: yup
        .string()
        .max(15, 'must be 15 characters or less')
        .required('First name is required'),

      lastname: yup
        .string()
        .max(15, 'must be 15 characters or less')
        .required('Last name is required'),

      email: yup
        .string()
        .email('invalid email address')
        .required('email is required'),

      subject: yup.string().required('Subject is required'),

      message: yup.string().required('Message is required'),
    }),

    onSubmit: (values) => {
      const { firstname, lastname, email, subject, message } = values;
      const url = `/success?firstname=${firstname}&lastname=${lastname}&email=${email}&subject=${subject}&message=${message}`;
      navigate(url);
    },
  });

  return (
    <>
      <section className="contact">
        <Hero text="contact us" />
        <div className="container pt-section">
          <PageBreadCrumbs />
          <div className="content d-grid">
            <div className="form-content">
              <form onSubmit={formik.handleSubmit} className="form">
                <div className="name">
                  <span>Name*</span>

                  <div className="d-flex">
                    <div>
                      <input
                        type="text"
                        id="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label
                        htmlFor="firstname"
                        className={`${
                          formik.touched.firstname && formik.errors.firstname
                            ? 'danger'
                            : ''
                        }`}
                      >
                        {formik.touched.firstname && formik.errors.firstname
                          ? formik.errors.firstname
                          : 'first name'}
                      </label>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label
                        htmlFor="lastname"
                        className={`${
                          formik.touched.lastname && formik.errors.lastname
                            ? 'danger'
                            : ''
                        }`}
                      >
                        {formik.touched.lastname && formik.errors.lastname
                          ? formik.errors.lastname
                          : 'last name'}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="email ">
                  <label
                    htmlFor="email"
                    className={` ${
                      formik.touched.email && formik.errors.email
                        ? 'danger'
                        : ''
                    }`}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : 'email address*'}
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="subject">
                  <label
                    htmlFor="subject"
                    className={` ${
                      formik.touched.subject && formik.errors.subject
                        ? 'danger'
                        : ''
                    }`}
                  >
                    {formik.touched.subject && formik.errors.subject
                      ? formik.errors.subject
                      : 'subject*'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="message">
                  <label
                    htmlFor="message"
                    className={` ${
                      formik.touched.message && formik.errors.message
                        ? 'danger'
                        : ''
                    }`}
                  >
                    {formik.touched.message && formik.errors.message
                      ? formik.errors.message
                      : 'message*'}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  submit
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info">
                <div>
                  <p>FURNIQ HOUSE STUDIOS</p>
                  <p>1200 PARK AVE</p>
                  <p>EMERYVILLE, CA 94608</p>
                </div>

                <div>
                  <p>T (510) 922-3000</p>
                  <p>F (510) 922-3151</p>
                </div>
              </div>

              <hr />
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.609902149685!2d-123.11622668431576!3d49.2827299793301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717d99c1a8a7%3A0x9a383dd87b1aa184!2sStanley%20Park!5e0!3m2!1sen!2sca!4v1620121097528!5m2!1sen!2sca"
                  width={600}
                  height={450}
                  style={{ border: '0', borderRadius: '10px' }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;