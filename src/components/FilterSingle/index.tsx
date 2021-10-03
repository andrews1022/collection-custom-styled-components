import React, { useState } from 'react';

// styled components
import {
	Card,
	CardGrid,
	FilterButton,
	FilterRow,
	FilterSingleWrapper,
	Name,
	PicturePlaceholder,
	Position,
	Tagline
} from './styles';

// mock data
import mockData from './data';

const FilterSingle = () => {
	const initialTeamMembers = mockData;

	// state
	const [teamMembers, setTeamMembers] = useState(mockData);
	const [activeFilter, setActiveFilter] = useState<string | undefined>('');

	const filterTeamMembers = (event: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = (event.currentTarget as HTMLButtonElement).dataset;

		// if the user clicks the active filter, reset the filter
		if (value === activeFilter) {
			setActiveFilter('');
			setTeamMembers(initialTeamMembers);
			return;
		}

		// get filtered team members
		const filteredTeamMembers = initialTeamMembers.filter((member) => member.department === value);

		// set team member state (what cards are displayed)
		setTeamMembers(filteredTeamMembers);

		// set active filter state (for button styling)
		setActiveFilter(value);
	};

	// get a dynamic, no-duplicates array of all roles from the team members
	const departments = Array.from(new Set(mockData.map((data) => data.department.trim()))).sort();

	return (
		<FilterSingleWrapper>
			<Tagline>Filter these mock team members by department:</Tagline>

			<FilterRow>
				{departments.map((dept) => (
					<FilterButton
						key={dept}
						data-value={dept}
						onClick={filterTeamMembers}
						type='button'
						isActive={dept === activeFilter}
					>
						{dept}
					</FilterButton>
				))}
			</FilterRow>

			<CardGrid>
				{teamMembers.map((member) => (
					<Card key={member.id}>
						<PicturePlaceholder />
						<Name>{member.name}</Name>
						<Position>{member.position}</Position>
					</Card>
				))}
			</CardGrid>
		</FilterSingleWrapper>
	);
};

export default FilterSingle;
