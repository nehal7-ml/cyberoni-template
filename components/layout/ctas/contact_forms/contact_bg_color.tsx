import { MyContext } from "@/context/brains";
import { NewRecordType } from "@/context/synapse/crm";
import React, {
  HTMLInputTypeAttribute,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';


interface CheckboxData {
  label: string;
  checked: boolean;
}

type Props = {
  address: string;
  phoneNumber: string;
  email: string;
  serviceKeys: string[];
  backgroundColor: string;
  textColor?: string;
};

const ContactSection: React.FC<Props> = ({ address, phoneNumber, email, serviceKeys, backgroundColor, textColor }) => {
  const brains = useContext(MyContext);
  // console.log("BrainsContactContext", brains);
  const brainKeys = Object.keys(brains);
  const addToContacts = brains.addToMarketingCrm;

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    fullName: boolean | null;
    emailAddress: boolean | null;
    message: boolean | null;
  }>({
    fullName: null,
    emailAddress: null,
    message: null,
  });
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [recaptchaInstance, setRecaptchaInstance] = useState(null);

  const [captchaPassed, setCaptchaPassed] = useState<Boolean>(false);
  const [checkboxes, setCheckboxes] = useState([
    { label: 'Checkbox 1', checked: true },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: true },
  ]);



  const [interests, setInterests] = useState<string[]>([]);
  type InputProps = {
    type: HTMLInputTypeAttribute;
  };

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleCheckboxChange = (index: number): void => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;
    setCheckboxes(newCheckboxes);

    const interestLabel = newCheckboxes[index].label!;

    if (newCheckboxes[index].checked) {
      if (!interests.includes(interestLabel)) {
        setInterests([...interests, interestLabel]);
      }
    } else {
      if (interests.includes(interestLabel)) {
        const newInterests = interests.filter((item: string) => item !== interestLabel);
        setInterests(newInterests);
      }
    }
  };
  const handleVerify = useCallback(() => {
    setCaptchaPassed(true);

  }, []);

  const checkFields = (inputValue: string,type:string) => {
    const englishLettersOnly = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const minLength = 5;
    const maxLength = 75
    
    const validateEmail = (email: string): boolean => {

      let result = emailPattern.test(email);
    
      return result;
    };
    
    const validateMessage = (message: string): boolean => {
      const maxLength = 750;

      // Perform custom validation logic for messages
      // For example, checking if the message is not empty and does not contain certain forbidden characters

      if (message.trim().length === 0) {
        return false; // Empty message is invalid
      }

      if (message.length > maxLength) {
        return false; // Message exceeds the maximum length
      }

      // Add any additional custom validation checks here

      return true; // Message is valid
    };


    switch (type) {
      case 'fullName':
        if (englishLettersOnly.test(inputValue) && inputValue.length > minLength && inputValue.length < maxLength) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            fullName: false,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            fullName: true,
          }));
        }
        break;
      case 'emailAddress':
        const isValidEmail = validateEmail(inputValue);
        if (isValidEmail && inputValue.length > minLength && inputValue.length < maxLength) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            emailAddress: false,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            emailAddress: true,
          }));
        }
        // Handle email address validation or other actions
        break;
      case 'message':
        const isMessageValid = validateMessage(inputValue);
        if (isMessageValid) {
          // Valid email address and the message passes custom validation
          setErrors((prevErrors) => ({
            ...prevErrors,
            message: false,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            message: true,
          }));
        }
        // Handle message validation or other actions
        break;
      default:
        // Handle other cases or provide an error message
        break;
    }
  }
  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {

    const errorValues = Object.values(errors);
    const allErrorsTrue = errorValues.every((error) => error === true);
    const allErrorsFalse = errorValues.every((error) => error === false);

    event.preventDefault();

    const API_ENDPOINT = "api/crm/email-crm";

    const fullNameValue = fullName;
    const emailAddressValue = emailAddress;
    let messageValue = message;



    if (interests.length > 0) {

      const interestsString = interests.join(', ');
      messageValue = `~${messageValue} Interested in ${interestsString}`;
    }
    checkFields(fullNameValue,"fullName")
    checkFields(emailAddressValue, "emailAddress")
    checkFields(message, "message")

    const send_data = () => {
      const formData = new FormData();
      formData.append("name", fullNameValue!);
      console.log("name", formData, fullNameValue!)
      formData.append("email", emailAddressValue!);
      console.log("email", formData)
      formData.append("message", messageValue!);
      console.log("message", formData)

      const formDataObject: Record<string, any> = {};
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }

      console.log(formDataObject);

      // edit a few properties to match google collab
      const newRecordData: NewRecordType = {
        "Email Address": { email: emailAddressValue || "" },
        Company: {
          has_more: false,
          id: "company-id-here", //tesing id
          relation: [{ id: "004699b2-ad3b-46a7-9973-218aa95ad4a2" }],    // added realtion id to test notion api/
          type: "relation",
        },
        "Converted to Opportunity": { checkbox: false },
        Owner: { id: "rD_D", people: [], type: "people" },
        Title: {
          id: "title-id-here",
          rich_text: [{ text: { content: fullNameValue ?? "" } }],
          type: "rich_text",
        },
        Name: {
          id: "title-id-here",
          title: [{ text: { content: fullNameValue ?? "" } }],
          type: "title",
        },
        Message: {   // message property doesn't exist on the database
          id: "your-message-id-here",
          rich_text: [{ text: { content: messageValue ?? "" } }],
          type: "rich_text",
        },
      };

      let marketingFormData = {
        newRecord: newRecordData
      }
      // console.log(messageValue,interests.length)
      try {
        addToContacts(marketingFormData);
        console.log("Sending Email")
        console.log(formData)
        fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
        setRefreshReCaptcha(prevRefreshReCaptcha => !prevRefreshReCaptcha);

      } catch (error) {
        console.error("Error submitting form:", error);
        // handle the error, such as showing an error message to the user
      }
    }

    if (allErrorsFalse) {
      console.log("passed validation")
      send_data()
    }
  }

  useEffect(() => {

    const checkboxData = serviceKeys.map((key) => ({
      label: key,
      checked: false,
    }));

    setCheckboxes(checkboxData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captchaPassed]);
  return (
   
      <section className={`min-h-screen rounded-2xl lg:w-11/12 ${backgroundColor} sm:w-11/12 max-w-fit`}>
      <div className="container flex flex-col px-6 py-12 mx-auto min-h-screen">
        <div className="mx-auto max-w-2xl">

          {/* <div className="mb-6">
            <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
            <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Bonnie Green"/>
              <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username
                available!</p>
          </div> */}
          {errors.fullName && (<div>
            <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
              Your name
            </label>
            <input
              type="text"
              id="username-error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Bonnie Green"
            />
            
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Please enter a valid name. ( Must Only Contain English Letters and must be between 5 and 150 characters long)
              </p>
           
          </div>)}
          {errors.emailAddress && (<div>
            <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
              Your Email Address
            </label>
            <input
              type="text"
              id="username-error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Bonnie Green"
            />

            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Please enter a email address.
            </p>

          </div>)}

          {errors.message && (<div>
            <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
              Your Message
            </label>
            <input
              type="text"
              id="username-error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Bonnie Green"
            />

            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Please enter a valid message. (Must be between 5  and 750 characters long)
            </p>

          </div>)}
        
        </div>
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="w-1/2 text-white lg:mx-6 lg:">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Get a quote
              </h1>
              <p className="mt-6 max-w-xl">
                Ask us everything  and we would love to hear from you!
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="mx-2 w-72 text-white truncate">{address}</span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="mx-2 w-72 text-white truncate">
                    {phoneNumber}
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2"
                    />
                    <circle cx="7.5" cy="10.5" r=".5" />
                    <circle cx="16.5" cy="10.5" r=".5" />
                  </svg>
                  <span className="mx-2 w-72 text-white truncate">{email}</span>
                </p>
              </div>
              <div className="m-10">
                {checkboxes.map((checkbox, index) => (
                  <label className="inline-flex items-center mt-3" key={index}>
                    <input
                      type="checkbox"
                      className={`mx-2 w-5 h-5 text-gray-600 form-checkbox`}
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="ml-2 text-gray-700">{checkbox.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <form className="flex-1 lg:mx-6 lg:w-1/2">
              <div className="mt-6 space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Full Name
                  </label>
                  <input

                    className={` ${!textColor ? 'text-gray-600' : textColor}  block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none`}

                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={fullName}
                  
                    onChange={(event) => setFullName(event.target.value)}
                    ref={fullNameRef}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Email Address
                  </label>
                  <input
                    className={` ${!textColor ? 'text-gray-600' : textColor}  block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none`}
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                    ref={emailAddressRef}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    className={` ${!textColor ? 'text-gray-600' : textColor}  block px-4 py-3 w-full bg-transparent rounded-lg border-2 border-white focus:border-blue-500 focus:outline-none`}


                    placeholder="Enter your message"
                    rows={6}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    ref={messageRef}
                  />
                </div>
                <div>    <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} onVerify={handleVerify} />
                </div>

                {captchaPassed && <button
                  onClick={handleClick}
                  className="inline-block px-8 py-3 w-full leading-none text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                >
                  Send Message
                </button>}
              </div>

            </form>
          </div>
        </div>
      </section>
  
  );
};
export default ContactSection;
