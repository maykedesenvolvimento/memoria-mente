export function getImg(path: string, name: string) {
    return `assets/images/${path}/${name}.png`;
};

export function getRandom(max: number) {
    return Math.floor(Math.random()*max);
}