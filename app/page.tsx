"use client"
import Login from "./login"
import Homepage from "./(main)/home/page"
import Product from "./(main)/product/page"
import { useEffect, useLayoutEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
export default function Home() {
  

useLayoutEffect(() => {
  const user = localStorage.getItem('user')
    if (user) {
      redirect('/home');
    }
  }, [])
  return (
    <>
      <Login />
    </>
  )
}
