import logoBeyodHorizon from "./assets/logoBeyondHorizon.jpg"
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
  return <p style={{textAlign:"center",marginTop:"50px", } }>Loading Users..</p>
}

return (
  <div style = {{minHeight:"100vh", background:"linear-gradient(to right, #141e30, #243b55)", padding:"30px"}}>

    {/*header punya section*/}
  <div style={{width: " 100%", padding: "20px", background: "rgba(0,0,0,0.3)", 
    backdropFilter:"blur(10px)", borderRadius:"12px", display:"flex", alignItems:"center", gap: "15px", marginBottom: "30px"}}>

    {/*logo punya section*/}
    <div style={{display:"flex", alignItems:"center", gap: "10px"}}>
      <img src={logoBeyodHorizon} alt="logoBeyondHorizon" style={{width:"120px", height:"120px", objectFit:"contain"}}/>
      <h1>User Directory</h1>
    </div>

  </div>

    {/* search input*/}
    <input
    type="text"
    placeholder="Search User"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{padding: "12px", width: "300px", borderRadius:"10px", border:"none", outline:"none", display: "block", margin: "0 auto 30px auto",
      background:"rgba(255,255,255,0.2)", color: "white", backdropFilter: "blur(5px)"}}
    />

    {/* user cards punya sec*/}
    <div style={{
      display: "grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"}}>
      {filteredUsers.map(user => (
        <div
        key={user.id}
        style={{padding: "15px", borderRadius:"12px",background: "rgba(255,255,255,0.15", backdropFilter: "blur(10px)", 
        transition:"0.3s", cursor: "pointer", boxshadow: "0 4px 12px rgba(0,0,0,0.2)"}}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          </div>

      ))}
      </div>

  </div>
)


}

export default App