
export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    next: string;
    prev: string;
}

export interface Info {
    next: string | null;
    prev: string | null;
}