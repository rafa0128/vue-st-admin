import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from '@/utils/themes';
export default {
    toggleDarkMode: function (state) {
        state.darkMode = !state.darkMode;
        if (state.darkMode) {
            state.navbarVariant = NAVBAR_DARK_VARIANTS[0].value;
            state.sidebarSkin = SIDEBAR_DARK_SKINS[0].value;
        }
        else {
            state.navbarVariant = NAVBAR_LIGHT_VARIANTS[0].value;
            state.sidebarSkin = SIDEBAR_LIGHT_SKINS[0].value;
        }
    },
    toggleMenuSidebar: function (state) {
        state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
    },
    toggleControlSidebar: function (state) {
        state.controlSidebarCollapsed = !state.controlSidebarCollapsed;
    },
    setWindowSize: function (state, payload) {
        state.screenSize = payload;
    },
    setNavbarVariant: function (state, payload) {
        if (state.darkMode) {
            state.navbarVariant = payload || NAVBAR_DARK_VARIANTS[0].value;
        }
        else {
            state.navbarVariant = payload || NAVBAR_LIGHT_VARIANTS[0].value;
        }
    },
    setSidebarSkin: function (state, payload) {
        if (state.darkMode) {
            state.sidebarSkin = payload || SIDEBAR_DARK_SKINS[0].value;
        }
        else {
            state.sidebarSkin = payload || SIDEBAR_LIGHT_SKINS[0].value;
        }
    }
};
//# sourceMappingURL=mutations.js.map