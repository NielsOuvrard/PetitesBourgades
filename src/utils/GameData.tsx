export interface MaterialType {
    name: string;
    color: string;
}

export const materialList: MaterialType[] = [
    {
        name: "wood",
        color: "#8B4513"
    },
    {
        name: "wheat",
        color: "#FFD700"
    },
    {
        name: "brick",
        color: "#DC143C"
    },
    {
        name: "glass",
        color: "#00FFFF"
    },
    {
        name: "stone",
        color: "#808080"
    }
]

export const allTypesBatiment = [
    "blue", "orange", "red", "green", "grey", "yellow", "black", "pink"
]

export interface ResourceType {
    type: string;
    x: number;
    y: number;
}

export interface BatimentType {
    name: string;
    type: string;
    resources?: ResourceType[];
}

export const batiments: BatimentType[] = [
    {
        type: "blue", name: "house",
        resources: [
            {
                type: 'glass',
                x: 0,
                y: 0,
            },
            {
                type: 'wheat',
                x: 0,
                y: 1,
            },
            {
                type: 'brick',
                x: 1,
                y: 0,
            },
        ],
    },
    { type: "orange", name: "abbey" },
    { type: "orange", name: "chapel" },
    { type: "orange", name: "cloister" },
    { type: "orange", name: "temple" },
    { type: "red", name: "farm" },
    { type: "red", name: "attic" },
    { type: "red", name: "greenhouse" },
    { type: "red", name: "orchard" },
    { type: "green", name: "hospice" },
    { type: "green", name: "salle_des_fetes" },
    { type: "green", name: "hostel" },
    {
        type: "green", name: "tavern", resources: [
            {
                type: 'brick',
                x: 0,
                y: 0,
            },
            {
                type: 'brick',
                x: 1,
                y: 0,
            },
            {
                type: 'glass',
                x: 2,
                y: 0,
            },
        ],
    },
    { type: "grey", name: "fountain" },
    { type: "grey", name: "grindstone" },
    { type: "grey", name: "grange" },
    {
        type: "grey", name: "well", resources: [
            {
                type: 'stone',
                x: 0,
                y: 0,
            },
            {
                type: 'wood',
                x: 0,
                y: 1,
            },
        ],
    },
    { type: "yellow", name: "bakery" },
    { type: "yellow", name: "market" },
    { type: "yellow", name: "tailor" },
    {
        type: "yellow", name: "theater", resources: [
            {
                type: 'wood',
                x: 0,
                y: 0,
            },
            {
                type: 'glass',
                x: 1,
                y: 0,
            },
            {
                type: 'wood',
                x: 2,
                y: 0,
            },
            {
                type: 'stone',
                x: 1,
                y: 1,
            },
        ],
    },
    { type: "black", name: "bank" },
    { type: "black", name: "factory" },
    { type: "black", name: "trading_post" },
    { type: "black", name: "warehouse" },
    { type: "pink", name: "architects_guild" },
    { type: "pink", name: "archives_of_the_second_age" },
    { type: "pink", name: "barrett_Castle" },
    { type: "pink", name: "cathedral_of_caterina" },
    { type: "pink", name: "veronia_fortress" },
    { type: "pink", name: "bosquet_university" },
    { type: "pink", name: "mandras_palace" },
    { type: "pink", name: "eye_tower_opalin" },
    { type: "pink", name: "altar_of_the_tree_of_the_ancients" },
    { type: "pink", name: "silva_theater" },
    { type: "pink", name: "observatory" },
    { type: "pink", name: "statue_of_allegiance" },
];
