export interface Task {
    province: string;
    city: string;
}

export interface Region {
    id: string;
    name: string;
};

const provinces: Region[] = [
    { id: '1', name: '北京' },
    { id: '2', name: '安徽' },
    { id: '3', name: '福建' },
];

const cities: {
    [key: string]: Region[]
} = {
    '1': [
        { id: '1', name: '海淀区' },
        { id: '2', name: '东城区' },
        { id: '3', name: '西城区' },
    ],
    '2': [
        { id: '1', name: '合肥' },
        { id: '2', name: '安庆' },
        { id: '3', name: '亳州' },
    ],
    '3': [
        { id: '1', name: '福州' },
        { id: '2', name: '厦门' },
        { id: '3', name: '莆田' },
    ]
}

export async function fetchProvinces(): Promise<Region[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(provinces), 1500);
    })
}

export async function fetchCites(provinceId: string): Promise<Region[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(cities[provinceId]), 1500);
    })
}

export async function createTask(task: Task): Promise<{ result: number, data: Task }> {
    return new Promise(resolve => {
        setTimeout(() => resolve({ result: 1, data: task }), 1500);
    })
}