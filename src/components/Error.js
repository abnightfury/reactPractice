import { useRouteError } from "react-router-dom";
const Error = () => {
    const err =useRouteError();
    console.log(err);
  return (
    <div class="container">
    <div class="gif">
      <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
    </div>
    <div class="content">
      <h1 class="main-heading">{err.data}</h1>
      <p>
        {err.statusText}:{err.status}
      </p>
      
    </div>
  </div>
  )
}

export default Error