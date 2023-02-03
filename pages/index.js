import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import axios from 'axios';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ country }) {
    const { data: session } = useSession();


  return (
    <>
      <Header country={country} />

      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get('https://api.ipregistry.co/?key=20oycbwsppbou2xp')
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return {
    props: {
      // country: {
      //   name: data.location.country.name,
      //   flag: data.location.country.flag.emojitwo,
      //   currency: data.currency.code,
      // }
      country: {
        name: 'India',
        flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
        currency: 'INR',
      },
    },
  };
}
