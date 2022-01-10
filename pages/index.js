import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>products</h1>
        <ul>
          <li>product1</li>
          <li>product2</li>
        </ul>
      </div>
    </Layout>
  );
}
