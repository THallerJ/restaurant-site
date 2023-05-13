import { useState, useRef } from "react";

const MailingList = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);
  const [isValid, setValid] = useState<boolean | undefined>(undefined);

  const onSubmit = (): void => {
    const valid = ref.current?.checkValidity();

    setValid(valid);
    setTimeout(() => setValid(true), 1500);
    if (valid) setSubmitted(true);
  };

  return (
    <form
      ref={ref}
      className="flex h-[35vh] flex-col items-center justify-center bg-third"
    >
      {submitted ? (
        <p className="text-center font-medium">
          Thank you for signing up for our newsletter!
        </p>
      ) : (
        <>
          <label
            htmlFor="mailingListEmail"
            className="mb-2 block text-center font-bebas text-4xl font-medium uppercase text-dark sm:text-5xl"
          >
            Sign up for our newsletter
          </label>

          <div className="relative">
            {isValid === undefined || isValid ? null : (
              <label className="absolute bottom-0 rounded-full border-2 border-primary bg-dark px-4 py-1 text-fourth ">
                Please enter a valid email address
              </label>
            )}
            <input
              required
              type="email"
              id="mailingListEmail"
              name="mailingListEmail"
              className="m-3 h-[3rem] w-[19rem] appearance-none rounded-lg border border-dark
            bg-offwhite px-3 py-8 shadow-sm outline-2 outline-dark focus:outline"
              placeholder="Email Address"
            />
          </div>
          <button type="button" className="btn w-[19rem]" onClick={onSubmit}>
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default MailingList;
