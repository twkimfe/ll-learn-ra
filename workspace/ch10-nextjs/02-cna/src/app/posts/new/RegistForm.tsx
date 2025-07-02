'use client';

import { createPost } from "@/data/actions/boardAction";
import { useActionState } from "react";

export default function RegistForm() {
  const [ state, formAction, isPending ] = useActionState(createPost, null);

  console.log('isPending state', isPending, state);

  return (  
    <form action={formAction} className='space-y-4'>
      <div className='flex flex-col'>
        <label htmlFor='title' className='mb-1 text-sm font-medium text-gray-700'>
          제목
        </label>
        <input type='text' id='title' name='title' className='border border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='제목을 입력하세요' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='content' className='mb-1 text-sm font-medium text-gray-700'>
          내용
        </label>
        <textarea id='content' name='content' rows={6} className='border border-gray-500 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='내용을 입력하세요' />
      </div>
      <div className='text-right'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow'>
          등록
        </button>
      </div>
    </form>
  );
}