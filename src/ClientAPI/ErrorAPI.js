class ErrorAPI {
    errorCode = null;
    errorMessageForDev = null;
    errorMessageForUser = null;
    errorObject = null;

    constructor(errorCode, messageForDev, errorObject = null) {
        this.errorCode = errorCode;
        this.errorMessageForDev = messageForDev;
        this.errorObject = errorObject;

        this.errorMessageForUser = this.createText(errorCode, messageForDev);
    }

    createText(errorCode, messageForDev) {
        switch (errorCode) {
            case 404:
                if (messageForDev === "Not Found")
                    return "Nie znaleziono użytkownika.";
                else return messageForDev;
            case 401:
                if (messageForDev === "Bad credentials")
                    return "Niepoprawna autoryzacja.";
                else return messageForDev;
            case 403:
                return "Przekroczono limit 60 zapytań na godzinę, proszę spróbować później.";
            case 500:
                if (messageForDev === "Failed to fetch")
                    return "Błąd połączenia z usługą. Sprawdź połączenie z internetem.";
                else return messageForDev;
            default:
                return "Nie rozpoznany błąd.";
        }
    }
}

export default ErrorAPI;
