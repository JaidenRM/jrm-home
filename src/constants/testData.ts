interface DataEntry {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
};

export const PIE_CHART_DATA: DataEntry[] = [
    { title: 'Cool Thing 1', value: 25, color: '#E38627' },
    { title: 'Cool Thing 2', value: 20, color: '#C13C37' },
    { title: 'Cool Thing 3', value: 35, color: '#6A2135' }
];