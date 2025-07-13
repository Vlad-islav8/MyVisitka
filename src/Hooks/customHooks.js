export const useSetMainColor = (name, value) => {
    debugger
    useEffect(() => {
        const cssVars = new CSSGlobalVariables();
        cssVars[name]  = value
    }, [name, value]);
}
