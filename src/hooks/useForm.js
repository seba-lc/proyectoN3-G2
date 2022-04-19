import { useEffect, useState } from "react";

const useForm = (submit, setValues, values) => {
  // const [values, setValues] = useState(initialValues);
  const [response, setResponse] = useState({answers:[]});
  const [errors, setErrors] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [admin, setAdmin] = useState(true);

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
    
    let arrayResponse = [];
    if (e.target.response) { //submit del modal de pregunta + respuestas
      let cont = 0;
      while (cont < 4) {
        arrayResponse.push(e.target.response[cont].value);
        cont++;
      }
    }

    if (e.target.questions) {
      setValues({
        ...values,
        questions: [...values.questions,
          {           
            question: e.target.questions.value,
            answers: arrayResponse,
          },
        ],
      });
    } else { //QUÉ SERÍA ESTE ELSE??
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(values);

    if (e.target.name == 'questions') {
      let editArr=[...values.questions]
      editArr[e.target.id].question = e.target.value
      setValues({
        ...values,
        questions: editArr,
      });
      
    } else if(e.target.name == 'response'){
      console.log(e.target.attributes.placeholder.value);
      let editArr = [...values.questions]
      editArr.forEach((element, index) => {
        if(element.response.includes(e.target.attributes.placeholder.value)){
          editArr[index].response[e.target.id] = e.target.value
          setValues({
            ...values,
            response: editArr,
          });
        }
      });
     
    } else{
      console.log(e.target.name);
      console.log(e.target.value);
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(validation){ //NO ESTÁ ENTRANDO NINGUN DATO AHÍ!
    //   setErrors(validation(values));    
    // }
    setSubmitting(true);
    submit();
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

  const handleAdmin = () => {
    setAdmin(true);
  };

  const setearState = () => {
    setValues({
      name: "",
      state: false,
      questions: [],
      category: "",
    });
  };

  const handleResponses = (e) =>{
    let op = false
    e.preventDefault()
    console.log(response);
    const arrRes = [...response.answers]
    console.log(arrRes);
    arrRes.map((element, index) => {
      console.log(element);
      if(element.question.includes(e.target.name)){
        arrRes[index] = {question: e.target.name, response: e.target.value}
        setResponse({
          ...response,
          answers: arrRes
        });
        op = true
      }
    });
    
    /* if(!op){
      console.log('1',arrRes);
      arrRes.push({question: e.target.name, response: e.target.value})
      console.log(arrRes);
      setResponse({
        ...response,
        answers: arrRes
      });
    } */
    /* console.log(e.target.value);
    console.log(e); */
    
    console.log(response);
    op = false
  }
  return {
    values,
    handleChange,
    handleSubmit,
    handleDelete,
    setearState,
    handleAdmin,
    handleEdit,
    admin,
    handleKeyUp,
    errors,
    setValues,
    handleResponses
  };
};

export default useForm;
