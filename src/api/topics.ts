export const getTopicsBySubjectId = async (subjectId) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/subjects/${subjectId}/topics`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        if (!response.ok) {
            return {
                success: false,
                message: 'Ошибка при получении тем',
                response: response,
            };
        }

        const data = await response.json();
        return {success: true, response: data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
