export type Vehicle = {
	cargo_capacity: string;
	consumables: string;
	cost_in_credits: string;
	created: string;
	crew: string;
	edited: string;
	length: string;
	manufacturer: string;
	max_atmosphering_speed: string;
	model: string;
	name: string;
	passengers: string;
	films: Films;
	pilots: string[];
	vehicle_class: string;
	url: string;
};

export type Starship = {
	MGLT: string;
	cargo_capacity: string;
	consumables: string;
	cost_in_credits: string;
	created: string;
	crew: string;
	edited: string;
	hyperdrive_rating: string;
	length: string;
	manufacturer: string;
	max_atmosphering_speed: string;
	model: string;
	name: string;
	passengers: string;
	films: Films;
	pilots: string[];
	starship_class: string;
	url: string;
};

export type Film = {
	character: string[];
	created: string;
	director: string;
	edited: string;
	episode_id: number;
	opening_crawl: string;
	planets: string[];
	producer: string;
	release_date: string;
	species: string[];
	starships: Starships;
	title: string;
	url: string;
	vehicles: Vehicles;
};

export type Planet = {
	climate: string;
	created: string;
	diameter: string;
	edited: string;
	films: Films;
	gavity: string;
	name: string;
	orbital_period: string;
	population: string;
	residents: string[];
	rotation_period: string;
	surface_water: string;
	terrain: string;
	url: string;
};

export type Person = {
	birth_year?: string;
	eye_color?: string;
	films: string[];
	gender?: string;
	hair_color?: string;
	homeworld: string;
	mass?: string;
	name: string;
	skin_color?: string;
	created?: string;
	editied?: string;
	species?: string[];
	starships: string[];
	url?: string;
	vehicles: string[];
};

export type Films = string[];

export type People = Person[];

export type Vehicles = Vehicle[];

export type Starships = Starship[];

export type RootState = {
	people: People;
	loading: { loading: boolean };
	personOne: { personOne: string };
	personTwo: { personTwo: string };
	results: string[];
	showingResults: { showingResults: boolean };
};
