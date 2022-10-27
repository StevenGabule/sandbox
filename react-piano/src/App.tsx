import React from 'react';
import { Footer } from './component/Footer';
import { Logo } from './component/Logo';
import styles from './App.module.css';

export const App() {
  return (
    <div className={styles.app}>
		<Logo />
		<main className={styles.content} />
		<Footer />
	</div>
  );
}
