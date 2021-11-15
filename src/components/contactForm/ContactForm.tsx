import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = ({ score }: any) => {
  const [state, handleSubmit] = useForm("xqkwrlkb");
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    getSubmited();
    if (state.submitting) {
      firstSubmit();
    }
  }, [handleSubmit, state]);

  const getSubmited = async () => {
    const submited = await localStorage.getItem("submited");
    if (submited) {
      setSubmited(true);
      alert("You already submited your score!");
    }
  };

  const firstSubmit = async () => {
    const submited = await localStorage.getItem("submited");
    if (submited) {
      setSubmited(true);
    } else {
      document.querySelector("#score")!.innerHTML = score;
    }
  };

  if (state.succeeded) {
    const yes = true;
    localStorage.setItem("submited", JSON.stringify(yes));
    setSubmited(true);
    window.location.reload();
    // return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='score'
        name='score'
        style={{ display: "none" }}
        value={score}
      />
      <ValidationError prefix='Score' field='score' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting || submited}
        onClick={() => {
          firstSubmit();
        }}>
        Submit
      </button>
    </form>
  );
};
