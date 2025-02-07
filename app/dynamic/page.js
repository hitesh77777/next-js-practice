// app/page.js

import DynamicComp from "../components/DynamicComp";

export default function Dynamic() {
  // let data = [];
  // const res = await fetch(`https://api.jiejiariapi.com/v1/holidays/2024`, {
  //   cache: "no-store", // Ensures fresh fetch every time without client-side revalidation
  // });
  // data = await res.json();
  // console.log("hello ~ file: page.js:4 ~ getapiData ~ data:", data);
  // getapiData();
  // useEffect(() => {
  //   getapiData();
  // }, []);

  // console.log("hello ~ file: page.js:4 ~ Dynamic ~ data:", data);

  return (
    <div>
      <h1>Books:</h1>
      <DynamicComp />
    </div>
  );
}
