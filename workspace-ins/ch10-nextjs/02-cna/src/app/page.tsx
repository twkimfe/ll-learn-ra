import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home 페이지입니다.'
};

export default function RootPage() {
  return (
    <h1>Home</h1>
  );
}