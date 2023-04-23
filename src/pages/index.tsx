import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect, useRef } from "react"; // 追加
import ReactHowler from 'react-howler'
import useSound from 'use-sound';
export default function Home() {
  const [play] = useSound("SE1.mp3")
  const [play2] = useSound("BGM1.mp3")
  // const [play] = useSound(SOUND)

  return (
    <>
      <div id="aa"></div>
      <button onClick={() => {
        play()
        document.getElementById("aa")?.classList.add("gaming")

        window.setTimeout(() => {
          play2()
          document.getElementById("aa")?.classList.remove("gaming")
          document.getElementById("aa")?.classList.add("gaming2")
        }, 3500)
      }
      }>演出テスト</button>
    </>
  )
}
