// this file can be housed global custom types

import React from 'react';

export type AlignFlexItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export type JustifyFlexItems =
	| 'center'
	| 'flex-end'
	| 'flex-start'
	| 'space-around'
	| 'space-between'
	| 'space-evenly';

export type AlignGridItems = 'baseline' | 'center' | 'end' | 'start' | 'stretch';

export type Children = React.ReactNode;

export type ButtonMode = 'primary' | 'secondary';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
