import styles from './styles.module.css'
import { CheckProps } from './types'
import { FC } from 'react'

const Check: FC <CheckProps> = ({ pergunta, opcao1, opcao2 }) => {
    return (
        <div className={styles.Check}>
            <p>{pergunta}</p>
            <div className={styles.options}>
                <label>
                    <input type="radio" name="opcao" value={opcao1} />
                    {opcao1}
                </label>
                <label>
                    <input type="radio" name="opcao" value={opcao2} />
                    {opcao2}
                </label>
            </div>
        </div>
    )
}

export default Check