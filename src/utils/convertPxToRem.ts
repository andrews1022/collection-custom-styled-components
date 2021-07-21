const convertPxToRem = (pixels: number) => {
	const base = 16;
	return `${pixels / base}rem`;
};

export default convertPxToRem;
