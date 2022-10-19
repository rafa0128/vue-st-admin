import router from '@/router/index';
export default {
    login: function (context, payload) {
        context.commit('setToken', payload);
        router.replace('/');
    },
    getUser: function (context, payload) {
        context.commit('setUser', payload);
    },
    logout: function (context) {
        context.commit('setToken', null);
        context.commit('setUser', null);
        localStorage.removeItem('gatekeeper_token');
        router.replace('/login');
    }
};
//# sourceMappingURL=actions.js.map