import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";
export default function Copyright({ country }) {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 SHOPPAY All Rights Resereved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> {country?.name}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
const data = [
  {
    name: "Privacy Center",
    link: "",
    id: 1
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
    id: 2
  },
  {
    name: "Manage Cookies",
    link: "",
    id: 3
  },
  {
    name: "Terms & Conditions",
    link: "",
    id: 4
  },
  {
    name: "Copyright Notice",
    link: "",
    id: 5
  },
];
