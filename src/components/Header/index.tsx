import format from 'date-fns/format';
import Image from 'next/image';
import ptBR from 'date-fns/locale/pt-BR';
import styles from '../Header/styles.module.scss'

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, dd MMMM', {
        locale: ptBR,
    });
    return (
        <header className={styles.headerContainer}>
            <Image 
                width= {250}
                height= {250}
                src="/logo.svg"
                alt="Logo" 
            />
           
            <p> O melhor para você ouvir, sempre</p>
            <span> {currentDate} </span>
        </header>
    );
}