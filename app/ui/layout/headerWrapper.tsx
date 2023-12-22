import Header from "./header"
import { readObjects } from "@/app/lib/parse-server";
export default async function HeaderWrapper(){
  const projectsList = await readObjects(); 
  return (
    <Header projectsList={projectsList}></Header>
  )
}