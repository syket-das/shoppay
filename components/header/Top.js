import React, { useState } from 'react';
import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import UserMenu from './UserMenu';
import { useSession } from 'next-auth/react';

const Top = ({ country }) => {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            {/* USA flag src link */}
            <img src={country?.flag} alt={country?.name} />
            <span>
              {country?.name} - {country?.currency}
            </span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>

          <li className={styles.li}>
            <span>Couster Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                  />
                  <span>{session.user.name.split(' ')[0]}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;

// random img unsplash link
