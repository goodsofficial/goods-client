import Header from '../header';
import styles from './layout.module.scss';
import Footer from '../footer';

function Layout({ children, headerTitle }) {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<Header title={headerTitle} />
			</div>
			<div className={styles.layOutMain}>{children}</div>
			<div className={styles.footer}></div>
			<Footer />
		</div>
	);
}

export default Layout;
