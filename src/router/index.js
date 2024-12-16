import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import Notice from '../views/Board/Notice.vue';
const routes = [
    {
        path: '/',
        name: 'login', /* 전체에 대한 이름 */
        component: Login,
    },
    {
        path: '/vue',
        name: 'vue',
        component: DashBoard,
        children: [
            {
                path: 'board',
                name: 'board',
                children:[
                    {
                        //notice.do-> board/notice.do
                        //   /notice.do-> notice.do
                        path: 'notice.do',
                        name: 'notice',
                        component: Notice,
                    }
                ]
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
