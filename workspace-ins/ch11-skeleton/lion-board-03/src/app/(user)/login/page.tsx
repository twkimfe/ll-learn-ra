import { Metadata } from "next";
import LoginForm from "@/app/(user)/login/LoginForm";

export async function generateMetadata(): Promise<Metadata>{
  return {
    title: `로그인 - Lion Board`,
    description: `로그인 후 라이언 보드의 모든 서비스를 이용하세요.`,
    openGraph: {
      title: `로그인 - Lion Board`,
      description: `로그인 후 라이언 보드의 모든 서비스를 이용하세요.`,
      url: `/login`,
      images: {
        url: '/images/front-end.png'
      }
    }
  };
}

export default async function LoginPage() {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">로그인</h2>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
