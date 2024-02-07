
export const getToken =  (): string | undefined  => {
    try {
        const storedUserJson = localStorage.getItem('user');
        if (!storedUserJson) {
            throw new Error('No user data found in storage');
        }

        const storedUser = JSON.parse(storedUserJson);
        const { token } = storedUser;
        if (!token) {
            throw new Error('Authentication token not found');
        }

        return token;
    } catch (error :any) {
        console.error('Error retrieving token:', error.message);
    }
}
