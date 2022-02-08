import { ReactNode } from 'react';

// general
export type Children = ReactNode;

// flex
export type AlignFlexItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type JustifyFlexItems =
	| 'center'
	| 'flex-end'
	| 'flex-start'
	| 'space-around'
	| 'space-between'
	| 'space-evenly';

// grid
export type AlignGridItems = 'baseline' | 'center' | 'end' | 'start' | 'stretch';

// headings
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
