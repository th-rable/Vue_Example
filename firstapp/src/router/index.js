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
            path: "/home", 
            name: "home", 
            component: () => import("../components/Home.vue"),
            props:true,
        },
    ], 
}); 
export default router;