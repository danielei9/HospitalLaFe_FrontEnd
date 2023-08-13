const SERVER_IP = "localhost:7878"
// const API_VERSION = "v1_1"
export const ENV = {
    BASE_API:`http://${SERVER_IP}`,
    API_ROUTES:{
        REGISTER: "signup",
        LOGIN: "login",
        MEASURE: "measure",
        USER: "user",
        // REFRESH_TOKEN: "auth/refresh",
    },
    JWT:{
        ACCESS:"token",
        REFRESH:"refreshToken",
    }
}