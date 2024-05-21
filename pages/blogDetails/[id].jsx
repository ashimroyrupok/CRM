"use client"
import { useRouter } from "next/router";
import React from "react";
import BlogDetailsPage from "../../src/components/app/blog/Details/index.jsx";

const DetailsPage = () => {
  const router = useRouter();
  const id = router?.query?.id;
  console.log(router.asPath )
  return (
    <div>
      <BlogDetailsPage />
  
    </div>
  );
};

export default DetailsPage;
