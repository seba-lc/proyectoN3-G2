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
    let arrayResponse = [];
    if (e.target.response) {
      let cont = 0;
      while (cont < 4) {
        arrayResponse.push(e.target.response[cont].value);
        cont++;
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
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
    /* setValues({
        ...values,
        questions: [...values.questions, e.target.questions.value],
      }); */
      /* setValues({
        ...values,
        questions: values.questions.set(e.target.questions.value, '')
      }); */
  };

  const handleEditt = (e, values) => {
    e.preventDefault();
    console.log(values);

    if (e.target.name == 'questions') {
      console.log(values.questions[e.target.id]);
      let editArr=[...values.questions]
      editArr[e.target.id].question = e.target.value
      
      setValues({
        ...values,
        questions: editArr,
      });
      
    } else if(e.target.name == 'response'){

        console.log(e);
        console.log(e.target.id);
        let editArr = [...values.questions]
        editArr[1].response[e.target.id] = e.target.value
        setValues({
          ...values,
          response: editArr,
        });
        console.log(values.questions);
    }
    else{
      console.log(e.target.name);
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
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
    setEdit(true);
  };

  const setearState = () => {
    setValues({
      name: "",
      state: false,
      questions: [],
      category: "",
    });
  };

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
    errors,
  };
};

export default useForm;
