import { useEffect, useState } from "react";

export function MakeInputForm(validateFunctions, values, setValues) {
  const [visited, setVisited] = useState({})

  const [errorBag, setErrorBag] = useState({})

  function validate() {
    for (const [key, error] of Object.entries(validateFunctions)) {
      if (visited[key] === undefined) continue;
      setErrorBag(bag => ({ ...bag, [key]: error }))
    }
  }

  function validateAll() {
    console.log("VALIDATE ALL")
    let ok = true;
    for (const [key, error] of Object.entries(validateFunctions)) {
      visited[key] = true;
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
      console.log("ON BLUR")
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