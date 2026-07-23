export interface CardListItem {
    title: string;
    subtitle?: string;
    trailingText?: string;
    image?: string;
}

export interface CardListData {
    heading: string;
    items: CardListItem[];
}
