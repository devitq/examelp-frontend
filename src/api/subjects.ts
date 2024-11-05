export const getSubjectsByExam = async (examId) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_MAIN_API_ENDPOINT}/v1/exams/${examId}/subjects`,
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
                message: 'Ошибка при получении предметов',
                response: response,
            };
        }

        const data = await response.json();
        return {success: true, response: data};
    } catch (err) {
        return {success: false, message: 'Ошибка при подключении к серверу'};
    }
};
