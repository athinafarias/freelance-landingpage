export interface ButtonNavProps {
    link?: string;
    text: string;
    variant?: 'fill' | 'outline';
    type?: 'button' | 'submit';
    onClick?: () => void;
}