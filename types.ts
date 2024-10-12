type Category = {
    id: number;
    description: string;
    type: string;
}

type Source = {
    id: number;
    type: string;
    name: string;
}

type Transaction = {
    id: number;
    category_id: number;
    source_id: number;
    amount: number;
    description: string;
    date: string;
    published_date: string;
}