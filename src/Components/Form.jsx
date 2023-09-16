import { useForm } from "../Hooks/useForm";

const initialForm = {
  name: "",
  email: ""
}

const Form = () => {

  const { input, handleChangeInput, handleSubmit, nameError, emailErrors, success } = useForm(initialForm)

  return (
    <div>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>

        <label htmlFor="name"> Nombre completo </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(event) => handleChangeInput(event)}
        />
        {nameError ? <span style={{ color: "red", fontWeight: "bold"}} >{nameError}</span> : ""}

        <label htmlFor="email"> Email </label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={(event) => handleChangeInput(event)}
        />
        {emailErrors ? <span style={{ color: "red", fontWeight: "bold"}} >{emailErrors}</span> : ""}

        <button type="submit" style={{ marginTop: 25, height: 30 }}> Enviar </button>
      </form>

      {success
        ? <div style={{color: "green", fontWeight: "bold", textAlign: "center"}}>
          <p>Gracias por comunicarse con nosotros</p>
          <p>Te contactaremos cuando antes vía mail</p>
        </div>
        : ""
      }

    </div>
  );
};

export default Form;
