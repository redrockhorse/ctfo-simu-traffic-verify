import { readObjects } from "@/app/lib/parse-server";
export default async function Test() {
  const objs = await readObjects();
  return (
    <div className="w-full md:col-span-4">
      {objs?.map((obj: any) => (
        <p key={obj.objectId}>{obj.objectId} : {obj.field2}</p>
      )
      )}
    </div>
  );
}