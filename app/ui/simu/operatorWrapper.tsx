import ProjectOperator from "./projectOperator"
import MapOperator from "./mapOperator"
export default  function OperatorWrapper(){
  return (
    <div className="w-full h-full flex-grow flex">
      <ProjectOperator></ProjectOperator>
      <MapOperator></MapOperator>
    </div>
  )
}