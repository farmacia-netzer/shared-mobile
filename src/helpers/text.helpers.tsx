export const textShorter = (name: string, maxLength: number) => {
    return name.length > maxLength ? `${name.substring(maxLength, -1)}...` : name
}