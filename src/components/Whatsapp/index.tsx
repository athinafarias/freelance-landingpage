import styles from './styles.module.css'

const Whatsapp = () => {
    return (
        <a href='' target='_blank' className={`${styles.Whatsapp}`}>
            <img
                src="/assets/icons/zap.svg"
                alt="Ícone do Whatsapp"
            />
        </a>
    )
}

export default Whatsapp  