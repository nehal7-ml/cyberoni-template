import React, { useState } from "react";

type Props = {
  title: string;
  buttonText: string;
  placeholder: string;
  expirationText: string;
  onSubmit: (email: string) => void;
};

const EmailFormSection: React.FC<Props> = ({
  title,
  buttonText,
  placeholder,
  expirationText,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-16 mx-auto lg:w-3/4 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white xl:text-3xl">
          {title}
        </h2>

        <div className="mt-8 lg:mt-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row -mx-2 space-y-3"
          >
            <input
              id="email"
              type="text"
              className="px-4 py-2 mx-2 text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-400"
              placeholder={placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              className="px-6 py-2 mx-2 text-sm tracking-wide text-white capitalize bg-blue-600 rounded-lg transition-colors duration-300 transform lg:w-40 fo hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              {buttonText}
            </button>
          </form>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
            {expirationText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailFormSection;
