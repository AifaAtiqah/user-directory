import logoBeyodHorizon from "./assets/logoBeyondHorizon.jpg"
import "./index.css"
import { useEffect, useState } from "react"

function App() {
  const [userList, setUserList] = useState([])
  const [search, setSearch] = useState("")

  const fetchUsers = async () => {
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com/users")
      const userData = await response.json()
      setUserList(userData)
    } catch (error) {
      console.log("Try check fetching user, this part has an error", error)
    }
  }

  useEffect(()=>{
    fetchUsers()
  }, []
)
  
const filteredUsers = userList.filter(user =>
  user.name.toLowerCase().includes(search.toLocaleLowerCase())
)


if (userList.length === 0) {
  return <p style={{textAlign:"center",marginTop:"50px", color:"white"} }>Loading Users..</p>
}

return (
  <>
  {/*try nk buat glow*/}
  <div className="bg-glow"></div>
  <div className="app">

    {/*
    <div style = {{minHeight:"100vh", background:"linear-gradient(to right, #141e30, #243b55)", padding:"30px"}}>
    */}

    {/*header punya section*/}
    <div style={{
      maxWidth: "1100px", 
      padding: "20px", 
      margin:"0 auto 30px auto",
      background: "rgba(255,255,255,0.08)", 
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      backdropFilter:"blur(15px)",
      borderRadius:"15px", 
      display:"flex", 
      alignItems:"center", 
      gap: "15px"
    }}>


    {/*logo punya section*/}
      <img src={logoBeyodHorizon} alt="logoBeyondHorizon" style={{width:"120px", height:"120px", objectFit:"contain"}}/>
      
      <h1 style={{
        color: "white", margin: 0, fontWeight:"600", letterSpacing: "1px"}}>User Directory</h1>
    </div>

  

    {/* search input*/}
    <input
    type="text"
    placeholder="Search user by name.."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "14px 18px", 
      margin: "0 auto 40px auto",
      width: "320px",
      borderRadius:"12px", 
      border:"1px solid rgba(255,255,255,0.2)", 
      outline:"none", 
      textAlign: "center",

      display: "block", 
      background:"rgba(255,255,255,0.1)", 
      color: "white", backdropFilter: "blur(8px)",
    
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  transition:"0.3s"}}
    />

    {/* user cards punya sec*/}
    <div style={{
      display: "grid",
      maxWidth:"1100px",
      margin: "0 auto",
      gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"}}>

      {filteredUsers.map(user => (
        <div
        key={user.id}
        style={{
          padding: "15px", 
          borderRadius:"12px",
          background: "rgba(255,255,255,0.15)", 
          backdropFilter: "blur(10px)", 
          transition:"0.3s", 
          cursor: "pointer", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          color: "white"}}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px) scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translate(0)"}>

          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          </div>
        ))}
      </div>
      </div>
     </>
  )
}

export default App