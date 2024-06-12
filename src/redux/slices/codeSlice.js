import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: {
    html: `<div>\n  <h1>CodeWriter</h1>\n</div>`,
    css: `body {\n  margin: 20px;\n}`,
    javascript: `console.log("Hello World");`,
  },
  currentLanguage: "html",
  fontSize: "16px",
};

export const codeSlice = createSlice({
  name: "codeSlice",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },

    updateCodeValue: (state, action) => {
      state.code[state.currentLanguage] = action.payload;
    },

    changeFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { changeLanguage, updateCodeValue, changeFontSize } =
  codeSlice.actions;
export default codeSlice.reducer;
