import { User } from "../API/user";

export async function getAllUsers(accessToken) {
    try {
        const userApi = new User();
        const users = await userApi.getAll(accessToken)
        return users;
    } catch (error) {
        console.error(error);
    }
}