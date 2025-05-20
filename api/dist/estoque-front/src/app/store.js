"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const themeSlice_1 = require("../features/themeSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        theme: themeSlice_1.default,
    },
});
//# sourceMappingURL=store.js.map