const convertPxToRem = (pixels: number): string => {
	const base = 16;
	return `${pixels / base}rem`;
};

export default convertPxToRem;
