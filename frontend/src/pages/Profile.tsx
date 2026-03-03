import { useEffect } from "react";
import axios from "axios";

function Profile() {

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:3000/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          },
        )

        console.log(response.data)
      } 
      catch(err) {
        console.log(err)
      }
    } ;

    fetchProfile();
  }, [])
  return (
    <>
      <h1>Sim</h1>
    </>
  );
}

export default Profile;
