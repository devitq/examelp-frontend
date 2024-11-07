import Cookies from 'js-cookie';

export const getSuggestedTask = async (topicId) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/tasks/suggest?topic_id=${topicId}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('session')}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        if (!response.ok) {
            return {
                success: false,
                message: 'Ошибка при получении задания',
                response: response,
            };
        }

        const data = await response.json();
        return {success: true, response: data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};

export const submitTask = async (taskId, answer) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/tasks/${taskId}/answer`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Cookies.get('session')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    answer: answer,
                }),
            },
        );

        if (!response.ok) {
            return {
                success: false,
                message: 'Ошибка при получении задания',
                response: response,
            };
        }

        const data = await response.json();
        return {success: true, response: data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
