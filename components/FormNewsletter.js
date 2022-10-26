import Button from "./Button";
import Input from "./Input";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import Alert from "./Alert";

export default function FormNewsletter() {
    const lang = getLocaleStrings(useRouter().locale);

    const inputRef = useRef();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(lang.alerts.newsletterError);
    const [success, setSuccess] = useState(false);

    const resetStatuses = () => {
        setSuccess(false);
        setError(false);
        setErrorMessage(lang.alerts.newsletterError);
    }

    const resetForm = () => {
        resetStatuses();
        setEmail('');
    }

    const handleInputChange = (e) => {
        const {value} = e.target;

        if (value) {
            setError(false);
        }

        setEmail(value);
    }

    const handleInputBlur = () => {
        setError(false);
    }

    const showError = (message) => {
        setSuccess(false);
        setError(true);
        setErrorMessage(message);
        inputRef.current.focus();
    };

    const showSuccess = () => {
        setEmail('');
        setError(false);
        setSuccess(true);

        setTimeout(() => {
            resetForm();
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        resetStatuses();

        if (!email) {
            showError(lang.alerts.newsletterError);
            return;
        }

        fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email}),
        }).then((res) => {
            res.status === 200 ? showSuccess() : showError(lang.alerts.commonError);
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <form action="" className="relative w-full flex items-stretch h-full"
              onSubmit={handleSubmit}
        >
            <div className="relative flex-1">
                <Input type="text"
                       placeholder={lang.common.yourEmail}
                       value={email}
                       onChange={handleInputChange}
                       onBlur={handleInputBlur}
                       ref={inputRef}
                />


                <Alert className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
                       active={error}
                >
                    {errorMessage}
                </Alert>

                <Alert className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2"
                       theme="success"
                       active={success}
                >
                    {lang.alerts.newsletterSuccess}
                </Alert>
            </div>
            <Button type="submit"
                    theme="secondary"
                    size="small"
                    textSize="tiny"
                    className="max-w-[150px]"
                    padding="none"
            >
                {lang.common.subscribe}
            </Button>
        </form>
    )
}