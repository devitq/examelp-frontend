export const pingServer = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/ping`);

        if (!response.ok) {
            return {success: false, message: 'Ошибка при подключении к серверу'};
        }

        const data = await response.json();
        return {success: true, data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
