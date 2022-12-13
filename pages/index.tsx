import styles from '../styles/Home.module.css'
import SampleTab from '../components/home/SampleTab'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <SampleTab/>
    </div>
  )
}
