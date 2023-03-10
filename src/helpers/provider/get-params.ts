export const getParams = (params: any) => {
    const result = new URLSearchParams(params);
    return result.toString();
};