export const telegramAuth = async (params: {data_check_string: string}): Promise<any> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/auth/telegram`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.data_check_string),
        });

        if (!response.ok) {
            return {success: false, message: 'ГООООЛ ХХАХАХАХ ПАСХАЛКО УХАХАХХААХ'};
        }

        const data = await response.json();
        return {success: true, data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
