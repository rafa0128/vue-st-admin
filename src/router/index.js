import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store/index';
import Main from '@/modules/main/main.vue';
import Login from '@/modules/login/login.vue';
import Register from '@/modules/register/register.vue';
import Dashboard from '@/pages/dashboard/dashboard.vue';
import ApiManualTest from '@/pages/service-test/api-manual-test/api-manual-test.vue';
import ApiAutomationTest from '@/pages/service-test/api-automation-test/api-automation-test.vue';
import ApiStressTest from '@/pages/service-test/api-stress-test/api-stress-test.vue';
import ServiceMonitor from '@/pages/service-test/service-monitor/service-monitor.vue';
import Profile from '@/pages/profile/profile.vue';
import ForgotPassword from '@/modules/forgot-password/forgot-password.vue';
import RecoverPassword from '@/modules/recover-password/recover-password.vue';
import PrivacyPolicy from '@/modules/privacy-policy/privacy-policy.vue';
import SubMenu from '@/pages/main-menu/sub-menu/sub-menu.vue';
import Blank from '@/pages/blank/blank.vue';
var routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        redirect: '/home'
    },
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'blank',
                name: 'Blank',
                component: Blank,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'sub-menu-1',
                name: 'Sub Menu 1',
                component: SubMenu,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'sub-menu-2',
                name: 'Sub Menu 2',
                component: Blank,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'home',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'service-test/api-manual-test',
                name: 'ApiManualTest',
                component: ApiManualTest,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'service-test/api-automation-test',
                name: 'ApiAutomationTest',
                component: ApiAutomationTest,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'service-test/api-stress-test',
                name: 'ApiStressTest',
                component: ApiStressTest,
                meta: {
                    requiresAuth: true
                }
            }, {
                path: 'service-test/service-monitor',
                name: 'ServiceMonitor',
                component: ServiceMonitor,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/recover-password',
        name: 'RecoverPassword',
        component: RecoverPassword,
        meta: {
            requiresUnauth: true
        }
    },
    {
        path: '/privacy-policy',
        name: 'RecoverPassword',
        component: PrivacyPolicy
    }
];
var router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes
});
router.beforeEach(function (to, from, next) {
    if (to.path == '/') {
        next('/home');
    }
    if (to.meta.requiresAuth && !store.getters['auth/token']) {
        next('/login');
    }
    else if (to.meta.requiresUnauth && !!store.getters['auth/token']) {
        next('/home');
    }
    else {
        next();
    }
});
export default router;
//# sourceMappingURL=index.js.map