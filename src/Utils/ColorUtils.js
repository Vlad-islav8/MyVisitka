import { CSSGlobalVariables } from "css-global-variables";

const setNewThemeColor = (name, value) => {
    const cssVars = new CSSGlobalVariables();
    cssVars[name] = value
}

export const colorSetter = (colors) => {
    setNewThemeColor("textColor", colors.textColor)
    setNewThemeColor("bgColor", colors.bgColor)
    setNewThemeColor("btnBgc", colors.btnBgc)
    setNewThemeColor("btnText", colors.btnText) 
}