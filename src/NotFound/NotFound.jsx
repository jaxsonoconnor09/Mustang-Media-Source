import "../../public/global.css";

function NotFound() {
  return (
    <div style={{height: "calc(100vh - 80px)"}}>
      <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  )
}

export default NotFound;