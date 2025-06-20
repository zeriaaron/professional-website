import { useForm, ValidationError } from "@formspree/react"

function Contacts() {
    const [state, handleSubmit] = useForm('mzzgagoq')

    if (state.succeded) {
        return <p>Thanks for contacting!</p>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <textarea name="message" id="message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <button type="submit" disabled={state.submitting}>Submit</button>
            </form>
        </>
    )
}

export default Contacts