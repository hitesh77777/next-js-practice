/* eslint-disable @next/next/no-async-client-component */
export default async function DynamicComp() {
  let data = [];
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store", // Ensures fresh fetch every time without client-side revalidation
  });
  data = await res.json();
  console.log("hello ~ file: page.js:4 ~ getapiData ~ data:", data);
  // getapiData();
  // useEffect(() => {
  //   getapiData();
  // }, []);

  console.log("hello ~ file: page.js:4 ~ Dynamic ~ data:", data);

  return (
    <div>
      <h1>Books:</h1>
      {Array.isArray(data) &&
        data?.map((e) => (
          <div key={e.id}>
            <p>title: {e.title}</p>
            <p>body: {e.body}</p>

            {/* <img
              src={e?.strMealThumb}
              alt={e?.strMeal}
              style={{ width: 200 }}
            /> */}
          </div>
        ))}
    </div>
  );
}
