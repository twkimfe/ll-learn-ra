import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About 페이지입니다.'
}

export default function AboutPage() {
  if(Math.random() > 0.5) {
    throw new Error('About 페이지에서 에러 강제로 발생')
  }
  
  return(
    <h1>About</h1>
  )
}