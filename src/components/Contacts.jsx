import { useForm, ValidationError } from "@formspree/react"
import { useState } from "react"

function Contacts() {
    const [state, handleSubmit] = useForm('mzzgagoq')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const isEmailValid = email.includes('@') && email.includes('.')
    const isMessageValid = message.trim().length >= 20
    const canSubmit = isEmailValid && isMessageValid && !state.submitting

    if (state.succeded) {
        return <p>Thanks for contacting!</p>
    }

    return (
        <>
            <form onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start">
                <input id="email" type="email" name="email"
                onChange={e => setEmail(e.target.value)} placeholder="Email Address"
                className="w-xs h-12 border rounded-sm mb-3 p-2
                caret-black focus:outline-none focus:ring focus:ring-blue-300"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <textarea name="message" id="message" placeholder="Message..."
                onChange={e => setMessage(e.target.value)} 
                className="w-lg h-70 border rounded-sm mb-3 p-2
                caret-black focus:outline-none focus:ring focus:ring-blue-300"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <button type="submit" disabled={!canSubmit}
                className={`${canSubmit ? '!bg-blue-500 text-white' : '!bg-gray-400 black cursor-not-allowed !border-gray-400'}`}>Submit</button>
            </form>
        </>
    )
}

export default Contacts