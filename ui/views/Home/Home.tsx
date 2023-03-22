'use client';
import Head from "next/head";
import styles from "./Home.module.scss";

// Importing custom components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
// import Sidebar from '../../components/Sidebar';
// import Searchbar from 'components/Searchbar';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Sparsh App</title>
      </Head>
      <Header />
      {/* <Searchbar placeholder='Search' value='' onChange={() => console.log("Searchbar changed")}/> */}
      {/* <Sidebar/> */}
      <main className={styles.mainContent}>
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
