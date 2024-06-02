"use client"

import {useRouter} from "next/navigation";

const page = () => {
  const router = useRouter();
  const navigate = (page) => {
      router.push(page);
  }
  return (
      <section>
        <h1>useRouter</h1>
        <button onClick={() => navigate("/users/about")}>Go to Users About Page</button>
      </section>
  )
}

export default page;