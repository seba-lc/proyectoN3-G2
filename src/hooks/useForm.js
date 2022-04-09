import { useEffect, useState } from "react";

const useForm = (initialValues, submit) => {
  const [values, setValues] = useState(initialValues);
  /* const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false) */
  useEffect(()=>{
  },[])
  const handleChange = (e) => {
    e.preventDefault();
   
    let arrayResponse = []
    if(e.target.response){
      let cont = 0
      while (cont < 4) {
        arrayResponse.push(e.target.response[cont].value)
        cont ++
      }
    }
   
    if (e.target.questions) {
      setValues({
        ...values,
        questions: [
          ...values.questions,
          {
            question: e.target.questions.value,
            response: arrayResponse,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  if(validations){
      errors = validations(values);
      if(Object.keys(errors).length===0){ */
    submit();
    /* }
    }else{
      submit();
    } */
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

  const setearState = ()=>{
      setValues({
        name: "",
        state: false,
        questions: [],
        category: "",
      });
  }

  return {
    values,
    handleChange,
    handleSubmit,
    handleDelete,
    setearState
  };
};

export default useForm;
