import Button from "./Button";
import Input from "./Input";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import Textarea from "./Textarea";
import Alert from "./Alert";

const defaultFormData = {
    name: {
        error: false,
        value: '',
        validate: (val) => !!val
    },
    email: {
        error: false,
        value: '',
        validate: (val) => !!val && val.includes('@')
    },
    message: {
        error: false,
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
    const [error, setError] = useState(false);

    const resetForm = () => {
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
        if (!name.validate(name.value)) {
            setName({...name, error: true});
            inputNameRef.current.focus();
            return false;
        }

        if (!email.validate(email.value)) {
            setEmail({...email, error: true});
            inputEmailRef.current.focus();
            return false;
        }

        if (!message.validate(message.value)) {
            setMessage({...message, error: true});
            inputMessageRef.current.focus();
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validated = revalidateInputs();

        if (!validated) return;

        setSubmitting(true);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, message}),
        }).then((res) => {
            setSubmitting(false);

            if (res.status === 200) {
                setSuccess(true);
                resetForm();

                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
            } else {
                setError(true);
            }
        }).catch((error) => {
            console.error(error);
            setError(true);
            setSubmitting(false);
        });
    }

    return (
        <form action=""
              className={`relative w-full flex flex-col gap-6 ${submitting ? 'opacity-50 pointer-events-none' : ''}`}
              onSubmit={handleSubmit}
        >
            <div className="relative flex flex-col gap-1">
                <label htmlFor="name" className={name.error ? 'text-red-400' : ''}>{lang.common.name} *</label>
                <Input type="text"
                       id="name"
                       name="name"
                       placeholder={lang.common.name}
                       value={name.value}
                       onChange={handleNameChange}
                       onBlur={handleInputBlur}
                       ref={inputNameRef}
                       error={name.error}
                />
            </div>

            <div className="relative flex flex-col gap-1">
                <label htmlFor="email" className={email.error ? 'text-red-400' : ''}>{lang.common.email} *</label>
                <Input type="text"
                       id="email"
                       name="email"
                       placeholder={lang.common.email}
                       value={email.value}
                       onChange={handleEmailChange}
                       onBlur={handleInputBlur}
                       ref={inputEmailRef}
                       error={email.error}
                />
            </div>

            <div className="relative flex flex-col gap-1">
                <label htmlFor="message" className={message.error ? 'text-red-400' : ''}>{lang.common.message} *</label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder={lang.common.message}
                    value={message.value}
                    onChange={handleMessageChange}
                    onBlur={handleInputBlur}
                    ref={inputMessageRef}
                    error={message.error}
                />
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
                       active={error}
                       arrow="left"
                >
                    {lang.alerts.commonError}
                </Alert>

                <Alert className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
                       theme="success"
                       active={success}
                       arrow="left"
                >
                    {lang.alerts.contactSuccess}
                </Alert>
            </div>
        </form>
    )
}