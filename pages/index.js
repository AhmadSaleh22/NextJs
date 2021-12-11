import Link from "next/link";
import Todo from "../components/Todo/Todo";

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do App Shoman</title>
        <meta
          name="description"
          content="SHOMANS Converted app - this code is converted from react todo app"
        />
      </Head>
      <h1>Home page</h1>
      <Todo />
    </>
  )
}
