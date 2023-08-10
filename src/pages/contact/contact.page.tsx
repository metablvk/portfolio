import {ChangeEvent, useEffect, useState} from 'react';
import Title from '../../components/title/title.component';

const defaultFormFields = {
  subject: '',
  message: '',
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (e: ChangeEvent) => {
    const {name, value} = e.target as HTMLInputElement;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formFields.subject, formFields.message);
  }, [formFields]);
  return (
    <div className="relative mt-12">
      <form
        action=""
        className="flex flex-col w-full mx-auto  md:w-2/3 lg:w-2/4 space-y-4"
      >
        <Title title="Contact" subTitle="Get in touch." />
        <div className="relative">
          <input
            type="text"
            className="p-2 w-full text-custom-purple bg-transparent focus:outline-none border-b border-custom-grey"
            onChange={handleChange}
            placeholder="Subject"
            name="subject"
            defaultValue={formFields.subject}
          />
        </div>
        <textarea
          id=""
          className="p-2 bg-transparent text-custom-purple focus:outline-none border border-custom-grey"
          onChange={handleChange}
          value={formFields.message}
          placeholder="enter your message..."
          name="message"
        ></textarea>
        <button type="submit" className="border border-custom-purple py-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
