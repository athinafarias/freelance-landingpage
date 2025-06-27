export interface CheckProps {
    pergunta: string;
    opcao1: string;
    opcao2: string;
    name?: string;
    onChange?: (value: string, checked: boolean) => void;
}