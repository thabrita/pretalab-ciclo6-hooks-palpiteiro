import styles from './Footer.module.css';

const Footer = ({nomeFooter}) => {
    return (
        <>
        <p className={styles.footer}>{nomeFooter}</p>
        </>
    )
}

export default Footer