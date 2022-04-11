import { useEffect, useState } from "react";

const useForm = (initialValues, submit) => {
  const [values, setValues] = useState(initialValues);
  const [edit, setEdit] = useState( true )
  /* const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false) */
  
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
   //console.log(e.target.value);
    let arrayResponse = []
    
    
    if(e.target.id == 'response'){
     /*  let cont = 0
      while (cont < 4) { */
        let arr = (e)=>[...arrayResponse,
        arrayResponse.push(e.target.value)]
        console.log(arrayResponse);

        arr(e)
      /*   cont ++
      } */
      console.log(arrayResponse);
   
    }else if(e.target.id == 'question') {
      setValues({
        ...values,
        questions: [
          ...values.questions,
          {
            question: e.target.value,
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
    console.log(values);
  }

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
    edit
  };
};

export default useForm;
