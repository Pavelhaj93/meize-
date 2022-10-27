import Button from "./Button";
import Input from "./Input";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import Textarea from "./Textarea";
import Alert from "./Alert";

const defaultFormData = {
    name: {
        error: true,
        value: '',
        validate: (val) => !!val
    },
    email: {
        error: true,
        value: '',
        validate: (val) => !!val && val.includes('@')
    },
    message: {
        error: true,
        value: '',
        validate: (val) => !!val
    }
};

export default function FormContact() {
    const lang = getLocaleStrings(useRouter().locale);

    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputMessageRef = useRef();

    const [submitting, setSubmitting] = useState(false);

    const [name, setName] = useState(defaultFormData.name);
    const [email, setEmail] = useState(defaultFormData.email);
    const [message, setMessage] = useState(defaultFormData.message);

    const [success, setSuccess] = useState(false);

    const resetForm = () => {
        setSuccess(false);
        setName(defaultFormData.name);
        setEmail(defaultFormData.email);
        setMessage(defaultFormData.message);
    }

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName({
            ...name,
            value,
            error: !name.validate(value)
        });
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail({
            ...email,
            value,
            error: !email.validate(value)
        });
    }

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage({
            ...message,
            value,
            error: !message.validate(value)
        });
    }

    const handleInputBlur = () => {
        removeErrors();
    }

    const removeErrors = () => {
        setName({...name, error: false});
        setEmail({...email, error: false});
        setMessage({...message, error: false});
    }

    const revalidateInputs = () => {
        setName({...name, error: !name.validate(name.value)});
        setEmail({...email, error: !email.validate(email.value)});
        setMessage({...message, error: !message.validate(message.value)});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        revalidateInputs();

        if (name.error) {
            inputNameRef.current.focus();
            return;
        }

        if (email.error) {
            inputEmailRef.current.focus();
            return;
        }

        if (message.error) {
            inputMessageRef.current.focus();
            return;
        }

        setSubmitting(true);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, message}),
        }).then((res) => {
            // res.status === 200 ? showSuccess() : showError(lang.alerts.commonError);
            console.log(res);
            setSubmitting(false);
        }).catch((error) => {
            console.error(error);
            setSubmitting(false);
        });

    }

    return (
        <form action="" className={`relative w-full flex flex-col gap-6 ${submitting ? 'opacity-50 pointer-events-none' : ''}`}
              onSubmit={handleSubmit}
        >
            <div className="relative flex flex-col gap-1">
                <label htmlFor="name">{lang.common.name} *</label>
                <Input type="text"
                       id="name"
                       name="name"
                       placeholder={lang.common.name}
                       value={name.value}
                       onChange={handleNameChange}
                       onBlur={handleInputBlur}
                       ref={inputNameRef}
                />

                <Alert className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
                       active={name.error}
                       arrow="left"
                >
                    {lang.alerts.nameError}
                </Alert>
            </div>

            <div className="relative flex flex-col gap-1">
                <label htmlFor="email">{lang.common.email} *</label>
                <Input type="text"
                       id="email"
                       name="email"
                       placeholder={lang.common.email}
                       value={email.value}
                       onChange={handleEmailChange}
                       onBlur={handleInputBlur}
                       ref={inputEmailRef}
                />

                <Alert className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
                       active={email.error}
                       arrow="left"
                >
                    {lang.alerts.emailError}
                </Alert>
            </div>

            <div className="relative flex flex-col gap-1">
                <label htmlFor="message">{lang.common.message} *</label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder={lang.common.message}
                    value={message.value}
                    onChange={handleMessageChange}
                    onBlur={handleInputBlur}
                    ref={inputMessageRef}
                />

                <Alert className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
                       active={message.error}
                       arrow="left"
                >
                    {lang.alerts.messageError}
                </Alert>
            </div>


            <div className="relative">
                <Button type="submit"
                        theme="secondary"
                        size="big"
                        textSize="small"
                        className="max-w-[150px]"
                        padding="big"
                >
                    {!submitting ? lang.common.submit : lang.common.submitting}
                </Button>
                <Alert className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
                       theme="success"
                       // active={success}
                       active={true}
                       arrow="left"
                >
                    {lang.alerts.contactSuccess}
                </Alert>
            </div>
        </form>
    )
}