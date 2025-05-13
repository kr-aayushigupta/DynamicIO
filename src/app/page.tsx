import { Suspense } from "react";
import { unstable_cacheTag as cacheTag } from "next/cache";
import { unstable_cacheLife as cacheLife } from "next/cache";

export default  function Home() {
  return (
    <div className="text-center font-bold mt-10">
      <h2 className="text-2xl text-center ">
        DynamicIO mode - that causes data fetching operations in the App Router
        to be excluded from pre-renders unless they are explicitly cached.{" "}
      </h2>

      <div className="flex gap-2 justify-center bg-purple-100 mt-10">
        <h3 className="text-xl ">Random Number : </h3>

        <Suspense fallback={<p className="text-purple-600 text-xl">LOADING...</p>}>
          <SuspendedComponent />
        </Suspense>
        {/* <p className="text-purple-600 text-xl">{await getRandomData()}</p> */}

      </div>
    </div>
  );
}

async function SuspendedComponent() {
  return <p className="text-purple-600 text-xl">{await getRandomData()}</p>;
}

async function getRandomData() {
  "use cache"
  cacheTag("randomNumber","math")
  cacheLife({
    stale:1,
    revalidate:5,
    expire:10,

  })

  // revalidateTag("/")
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random();
}
