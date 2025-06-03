import { ReactNode } from "react"

export interface CardProdutoProps {
    txtTag: string;
    titulo: string;
    text: string;
    txtList1: ReactNode;
    txtList2: ReactNode;
    txtList3: ReactNode;
    text2?: string;
    txtButton: string;
    srcImg: string;
    imgPosition?: 'left' | 'right';
}