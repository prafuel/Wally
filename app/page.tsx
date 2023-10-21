'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'

import bgHome from "../public/home_background.jpg"

export default function Home() {
  return (
    <main>
      <Section1></Section1>
      <Navbar></Navbar>
    </main>
  )
}
