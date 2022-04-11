import { useEffect, useState } from "react";

const useForm = (initialValues, submit, validation) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        submit();
      }
      setSubmitting(false);
    }
  }, [errors]);

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

  const handleEditt = (e)=>{
    e.preventDefault();
   console.log(e.target.name);
   let arrayResponse = []
   if(e.target.response){
    setValues({
      ...values,
      questions: [
        ...values.questions,
        {
          ...values,
          response: e.target.value,
        },
      ],
    });
  }
  
   else if (e.target.questions) {
     setValues({
       ...values,
       questions: [
         ...values.questions,
         {
           ...values,
           question: e.target.value
         },
       ],
     });
   
    }else{setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
    console.log(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setSubmitting(true);
  };

  const handleKeyUp = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e);
    let newArray = values.questions.filter(
      (item) => item.question !== e.target.id
    );
    setValues({
      ...values,
      questions: newArray,
    });
  };

  const handleEdit = () => {
    setEdit(true)
  }

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
    setearState,
    handleEdit,
    handleEditt,
    edit,
    handleKeyUp,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;