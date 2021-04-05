const Admin = () => {

  return (
    <div>
      <h1>Next.js and Auth0 Example</h1>
      <>
        <p>
          To test the login click in <a href="/api/auth/login"><i>Login</i> </a>
        </p>
        <p>
          Once you have logged in you should be able to click in{' '}
          <a href="/profile"><i>Profile</i></a> and <a href="/api/auth/logout"><i>Logout</i></a>
        </p>
      </>

    </div>
  )
}
export default Admin;