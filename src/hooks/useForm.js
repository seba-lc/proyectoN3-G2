import { useEffect, useState } from "react";

const useForm = (initialValues, submit, validation) => {
  const [values, setValues] = useState(initialValues);
   const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false)
 
  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit();
      }
      setSubmitting(false);
    }
  },[errors]) 
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.questions) {
      setValues({
        ...values,
        questions: [
          ...values.questions,
          {
            question: e.target.questions.value,
            response: [],
          },
        ],
      });
      /* setValues({
        ...values,
        questions: [...values.questions, e.target.questions.value],
      }); */
      /* setValues({
        ...values,
        questions: values.questions.set(e.target.questions.value, '')
      }); */
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setErrors(validation(values));
    setSubmitting(true);
  };

  const handleKeyUp = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e);
    let newArray = values.questions.filter((item) => item.question !== e.target.id)
    setValues({
      ...values,
      questions: newArray
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleDelete,
    handleKeyUp,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;



