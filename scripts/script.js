function comment(){
  var input = document.getElementById("comment1").value;
  var p = document.getElementById("usercomment");
  p.innerHTML = "<h3>&nbsp&nbsp&nbsp&nbspJumping_Jackrabbit</h3>  &nbsp&nbsp&nbsp&nbsp"+input;

}

function comment2(){
  var input = document.getElementById("comment2").value;
  var p = document.getElementById("usercomment2");
  p.innerHTML = "<h3>&nbsp&nbsp&nbsp&nbspJumping_Jackrabbit</h3>  &nbsp&nbsp&nbsp&nbsp"+input;

}

function makepost(){
  var input = document.getElementById("userpost").value;
  var p = document.getElementById("postedbyuser");
  p.innerHTML = "<div id='post1' class='post' onclick='>    <div class='text'><h3> &nbsp&nbsp&nbsp&nbsp&nbsp&nbspJumping_Jackrabbit says:</h3><br />      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp "+ input +"    </div>    <div class='comment'>        <div id='usercomment3' class='comment'>      <br />      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type='text' placeholder='Add comment' id='comment3'>      <button type='button' onclick='comment3()'>Submit</button>    </div>  </div>  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <div class='></div>";
}
function comment3(){
  var input = document.getElementById("comment3").value;
  var p = document.getElementById("usercomment3");
  p.innerHTML = "<h3>&nbsp&nbsp&nbsp&nbspJumping_Jackrabbit</h3>  &nbsp&nbsp&nbsp&nbsp"+input;

}
