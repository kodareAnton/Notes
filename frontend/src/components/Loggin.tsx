import { Link } from "react-router-dom";

export function Loggin(){

    let Admin = {
        username: 'test',
        password: 'test'
    }

    let loggedin = `/AllPosts/`;

    return ( <>
    <h1>Loggin</h1>

      <label htmlFor="username">username</label><br />
      <input type="text" name="username" /><br />

      <label htmlFor="Password">Password</label><br />
      <input type="text" name="Password" /><br />

      <Link to={loggedin}>
          <button>Logga in</button>
        </Link>
      </>
    )
}