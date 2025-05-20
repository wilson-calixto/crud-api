"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTheme = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    mode: 'light',
};
const themeSlice = (0, toolkit_1.createSlice)({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});
exports.toggleTheme = themeSlice.actions.toggleTheme;
exports.default = themeSlice.reducer;
//# sourceMappingURL=themeSlice.js.map