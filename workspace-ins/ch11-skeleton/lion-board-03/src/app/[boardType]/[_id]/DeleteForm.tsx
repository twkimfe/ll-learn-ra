'use client';

import { Button } from "@/components/ui/Button";
import { deletePost } from "@/data/actions/post";
import useUserStore from "@/zustand/userStore";
import { useActionState } from "react";

export default function DeleteForm({ boardType, _id, ownerId }: { boardType: string, _id: string, ownerId: number }) {
  const { user } = useUserStore();
  const [state, formAction, isLoading] = useActionState(deletePost, null);
  console.log(state, isLoading);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) event.preventDefault();
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="type" value={boardType} />
      <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
      <Button type="submit" disabled={isLoading} bgColor="red" ownerId={ownerId}>삭제</Button>
    </form>
  );
}
