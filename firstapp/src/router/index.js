import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({ 
    history: createWebHistory(""), 
    routes: [
        { 
            path: "/", 
            name: "main", 
            component: () => import("../components/Main.vue"),
        }, 
        { 
            path: "/login", 
            name: "login", 
            component: () => import("../components/Login.vue"), 
        },
        { 
            path: "/register", 
            name: "register", 
            component: () => import("../components/Register.vue"), 
        },
        { 
            path: "/home", 
            name: "home", 
            component: () => import("../components/Home.vue"),
            props:true,
        },
        { 
            path: "/user", 
            name: "user", 
            component: () => import("../components/UserSetting.vue"),
            props:true,
        },
    ], 
}); 
export default router;