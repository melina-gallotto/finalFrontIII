import { useState } from "react"

export const useForm = (initialForm) => {

    const [input, setInput] = useState(initialForm)
    const [nameError, setNameError] = useState("")
    const [emailErrors, setEmailErrors] = useState("")
    const [success, setSuccess] = useState(false)


    const handleChangeInput = (event) => {
        const { value, name } = event.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const onResetForm = () => {
        setInput(initialForm);
    }


    const validateName = () => {
        if (!input.name) {
            setNameError("Este campo es obligatorio")
            setSuccess(false)
        } else if (input.name.length < 5) {
            setNameError("El nombre debe tener más de 5 caracteres")
            setSuccess(false)
        } else {
            setSuccess(true)
            setNameError("")
        }
    }

    const validateEmail = () => {
        if (!input.email) {
            setEmailErrors("Este campo es obligatorio")
            setSuccess(false)
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
            setEmailErrors("Colocar un email válido")
            setSuccess(false)
        } else {
            setSuccess(true)
            setEmailErrors("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        validateName()
        validateEmail()

        console.log(input);

        onResetForm()
    }


    return {
        input,
        handleChangeInput,
        handleSubmit,
        nameError,
        emailErrors,
        success
    }
}
