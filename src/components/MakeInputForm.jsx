import { useEffect, useState } from "react";

export function MakeInputForm(validateFunctions) {
  const [visited, setVisited] = useState({})

  const [values, setValues] = useState({})

  const [errorBag, setErrorBag] = useState({})

  function validate() {
    for (const [key, func] of Object.entries(validateFunctions)) {
      if (visited[key] === undefined) continue;
      console.log(`VALIDATE ${key}`)
      let error = func(values[key]);
      setErrorBag(bag => ({ ...bag, [key]: error }))
    }
  }

  function validateAll() {
    console.log("VALIDATE ALL")
    let ok = true;
    for (const [key, func] of Object.entries(validateFunctions)) {
      let error = func(values[key]);
      if (error) ok = false;
      setErrorBag(bag => ({ ...bag, [key]: error }))
    }
    return ok;
  }

  useEffect(() => {
    validate()
  }, [visited])

  function BlurHandlerFactory(name) {
    return (event) => {
      const value = event.target.value;
      setVisited((prevState) => {
        return { ...prevState, [name]: true }
      });
      setValues((prevState) => {
        return { ...prevState, [name]: value }
      })
    }
  }

  return {
    values: values,
    errorBag: errorBag,
    BlurHandlerFactory: BlurHandlerFactory,
    validateAll: validateAll,
  }
}