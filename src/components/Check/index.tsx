import styles from './styles.module.css'
import { CheckProps } from './types'
import { FC } from 'react'

const Check: FC <CheckProps> = ({ pergunta, opcao1, opcao2, name = 'opcao', onChange }) => {
    return (
        <div className={styles.Check}>
            <p>{pergunta}</p>
            <div className={styles.options}>
                <label>
                    <input 
                        type="checkbox" 
                        name={`${name}-1`} 
                        value={opcao1}
                        onChange={(e) => onChange?.(opcao1, e.target.checked)} 
                    />
                    {opcao1}
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name={`${name}-2`} 
                        value={opcao2} 
                        onChange={(e) => onChange?.(opcao2, e.target.checked)}
                    />
                    {opcao2}
                </label>
            </div>
        </div>
    )
}

export default Check