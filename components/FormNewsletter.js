import Button from "./Button";
import Input from "./Input";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import Alert from "./Alert";

export default function FormNewsletter() {
    const lang = getLocaleStrings(useRouter().locale, 'common');

    const inputRef = useRef();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

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

    const showError = () => {
        setSuccess(false);
        setError(true);
        inputRef.current.focus();
    };

    const showSuccess = () => {
        setError(false);
        setSuccess(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            showError();
            return;
        }

        fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email}),
        }).then((res) => {
            if (res.status === 200) {
                setEmail(null);
                showSuccess();
            } else {
                showError();
            }
        });

    }

    return (
        <form action="" className="relative w-full flex items-stretch h-full"
              onSubmit={handleSubmit}
        >
            <div className="relative flex-1">
                <Input type="text"
                       placeholder={lang.yourEmail}
                       value={email}
                       onChange={handleInputChange}
                       onBlur={handleInputBlur}
                       ref={inputRef}
                />

                {error && (
                    <Alert className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2">
                        Please enter a valid email address.
                    </Alert>
                )}
            </div>
            <Button type="submit"
                    theme="secondary"
                    size="small"
                    textSize="tiny"
                    className="max-w-[150px]"
                    padding="none"
            >
                {lang.subscribe}
            </Button>
        </form>
    )
}