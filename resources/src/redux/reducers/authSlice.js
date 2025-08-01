import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../functions/axiosClient";

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post(`/login`, { email, password });
            const { token } = res.data;
            localStorage.setItem("token", token); // تخزين التوكن
            return token;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Login failed"
            );
        }
    }
);

export const createUser = createAsyncThunk(
    "auth/create",
    async ({ name, email, password, confirmed }, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post(`/create`, {
                name,
                email,
                password,
                confirmed,
            });
            const { token } = res.data;
            localStorage.setItem("token", token); // تخزين التوكن
            return token;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "User creation failed!"
            );
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No token");

            const res = await axiosClient.get("/user");

            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Unauthorized"
            );
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post("/logout");
            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Failed to logged out"
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        userDiscord: null,
        notifications: [],
        token: null,
        status: "loading",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 🟢 التحقق من المستخدم
            .addCase(checkAuth.pending, (state) => {
                state.status = "loading";
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.status = "failed";
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
                localStorage.removeItem("token");
            })

            // 🟢 تسجيل الدخول
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loading = false;
                state.isAuthenticated = true;
                state.status = "succeeded";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 🟢 تسجيل الخروج
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.status = "succeeded";
                state.user = null;
                state.token = null;
                localStorage.removeItem("token");
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 🟢 انشاء حساب جديد
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loading = false;
                state.isAuthenticated = true;
                state.status = "succeeded";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
