function signup(){

    return `
    <div id="logtop">
    <p>Grill and chill........!!!!!!!!!</p>
  </div>
  <div id="backimg">
    <div id="formmain">
      <form id='register' >
        <div id="inplog">
          <div>Name</div>
          <div><input type="text" id='name' placeholder="Enter Your Name" /></div>
        </div>
        <div id="inplog">
          <div>Email-Id</div>
          <div><input type="email" id='email' placeholder="Email-Id" /></div>
        </div>
        <div id="inplog">
          <div>User Name</div>
          <div><input type="text" id='user_name' placeholder="User Name" /></div>
        </div>
        <div id="inplog">
          <div>Password</div>
          <div><input type="password" id='password' placeholder="Password" /></div>
        </div>
        <div id="inplog">
          <div>Mobile No.</div>
          <div><input type="text" id='mobile' placeholder="Mobile No." /></div>
        </div>
        <div id="inplog">
          <div>Description</div>
          <div><input type="text" id='des' placeholder="Description" /></div>
        </div>

        <button id="signupbutton">Submit</button>
        <h1 id="go_login">Go to Login Page</h1>
      </form>
    </div>
    `
}


export default signup