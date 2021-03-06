import React from 'react';
import Link from 'next/link';

import styles from './setting.module.scss';
import Footer from '../../components/footer';
import Layout from '../../components/layout';

const Setting = () => (
	<>
		<Layout headerTitle='تنظیمات' />
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-12'>
					<Link href='/delete-account'>
						<a>
							<div className={styles.box}>
								<a className={styles.link}>حذف حساب</a>
							</div>
						</a>
					</Link>

					<Footer />
				</div>
			</div>
		</div>
	</>
);

export default Setting;
