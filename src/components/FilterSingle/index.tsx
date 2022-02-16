import React, { useState } from 'react';
import type { MouseEvent } from 'react';

// styled components
import * as S from './styles';

// data
import filterData from './data';

const FilterSingle = () => {
	const initialTeamMembers = filterData;

	// state
	const [teamMembers, setTeamMembers] = useState(filterData);
	const [activeFilter, setActiveFilter] = useState<string | undefined>('');

	const filterTeamMembers = (event: MouseEvent<HTMLButtonElement>) => {
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
	const departments = Array.from(new Set(filterData.map((data) => data.department.trim()))).sort();

	return (
		<S.Wrapper>
			<S.Tagline>Filter these mock team members by department:</S.Tagline>

			<S.FilterRow>
				{departments.map((dept) => (
					<S.FilterButton
						key={dept}
						data-value={dept}
						isActive={dept === activeFilter}
						onClick={filterTeamMembers}
						type='button'
					>
						{dept}
					</S.FilterButton>
				))}
			</S.FilterRow>

			<S.CardGrid>
				{teamMembers.map((member) => (
					<S.Card key={member.id}>
						<S.PicturePlaceholder />
						<S.Name>{member.name}</S.Name>
						<S.Position>{member.position}</S.Position>
					</S.Card>
				))}
			</S.CardGrid>
		</S.Wrapper>
	);
};

export default FilterSingle;
