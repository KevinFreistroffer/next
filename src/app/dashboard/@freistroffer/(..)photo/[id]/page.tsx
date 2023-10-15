import { useRouter } from "next/router";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Photo ID: {params.id?.toString()}</h1>
    </div>
  );
};

export default Page;
