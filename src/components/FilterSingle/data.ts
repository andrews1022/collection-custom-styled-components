// mock data was generated using https://randomuser.me/

type TeamMember = {
	id: string;
	name: string;
	position: string;
	department: 'Executive' | 'Customer Care' | 'Design' | 'Development' | 'Sales';
}[];

const filterData: TeamMember = [
	{
		id: 'tm-01',
		name: 'Sherry Welch',
		position: 'CEO',
		department: 'Executive'
	},
	{
		id: 'tm-02',
		name: 'Ashley Holland',
		position: 'COO',
		department: 'Executive'
	},
	{
		id: 'tm-03',
		name: 'Keith Anderson',
		position: 'CTO',
		department: 'Executive'
	},
	{
		id: 'tm-04',
		name: 'Stephen Bates',
		position: 'Front End Developer',
		department: 'Development'
	},
	{
		id: 'tm-05',
		name: 'Herminia Gonzales',
		position: 'Back End Developer',
		department: 'Development'
	},
	{
		id: 'tm-06',
		name: 'Catherine Hill',
		position: 'UI/UX Design',
		department: 'Design'
	},
	{
		id: 'tm-07',
		name: 'Brian Collins',
		position: 'Customer Support',
		department: 'Customer Care'
	},
	{
		id: 'tm-08',
		name: 'Anna Ellis',
		position: 'Sales',
		department: 'Sales'
	}
];

export default filterData;
