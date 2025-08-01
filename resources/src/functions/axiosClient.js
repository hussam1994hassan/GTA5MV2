// src/api/axiosClient.js
import axios from "axios";

// إنشاء instance جديدة من axios
const axiosClient = axios.create({
    baseURL: "/api", // غيّر هذا حسب سيرفرك
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true, // ضروري إذا كنت تستخدم Laravel Sanctum
});

// إضافة توكن المصادقة تلقائيًا إن وجد
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") ?? null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// التقاط الأخطاء العامة من السيرفر (مثلاً 401)
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // يمكن تنفيذ logout تلقائيًا هنا أو إعادة التوجيه
            console.warn("Unauthorized - redirecting to login");
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
