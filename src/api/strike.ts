import Cookies from 'js-cookie';

export const getStrike = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/me/strike`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('session')}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 401) {
            return {success: false, message: 'Сессия недействительна', response: response};
        }
        if (!response.ok) {
            return {success: false, message: 'Неудалось получить страйк', response: response};
        }

        const data = await response.json();
        return {success: true, response: data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
