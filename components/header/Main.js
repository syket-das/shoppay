import Link from 'next/link';
import styles from './styles.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';

import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Main() {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search || '');


  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          <img src="../../../logo.png" alt="" />
        </Link>
        <form className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link href="/cart" className={styles.cart}>
     
            <FaOpencart />
            <span>0</span>
         
        </Link>
      </div>
    </div>
  );
}
