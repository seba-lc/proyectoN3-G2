import { useEffect, useState } from "react";

const useForm = (initialValues, submit) => {
  const [values, setValues] = useState(initialValues);
  /* const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false)
  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit();
      }
      setSubmitting(false);
    }
  },[errors]) */
  const handleChange = (e) =>{
    e.preventDefault();
    if (e.target.questions) {
      setValues({
        ...values,
        questions: [...values.questions, e.target.questions.value],
      });
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
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
   /*  if(validations){
      errors = validations(values);
      if(Object.keys(errors).length===0){ */
        submit();
      /* }
    }else{
      submit();
    } */
  }
  return {
    values,
    handleChange,
    handleSubmit
  }
}
 
export default useForm;