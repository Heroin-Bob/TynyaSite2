
document.getElementById("navBar").innerHTML = `<ul>
<li><a href="index.html">Home</a></li>
<li>
    <a href="about me.html">About Me</a>
</li>
<li>
    <a href="#services">Counseling Services</a>
    <div class="dropdown">
        <ul>
            <li><a href="#">Service One</a></li>
            <li><a href="#">Service Two</a></li>
            <li><a href="#">Service Three</a></li>
            <li><a href="#">Service Four</a></li>
        </ul>
    </div>
</li>
<li><a href="https://www.loveislove-blog.com/">Blog</a></li>
<li><a href="#footer">Contact</a></li>
</ul>`;

document.getElementById("footerWrapper").innerHTML = `
    <div id="footer">
        <div id="footerAlign">
        <div class="details">
            <div class="info">
                <p>Tynya Patton, LPC</p>
                <p>She/Her/Hers</p>
                <p>Nashville, TN</p>
            </div>
            <div class="links">
                <a href="https://www.loveislove-blog.com/">loveislove-blog.com</a>
                <a href="https://caringtherapytn.com/">caringtherapytn.com</a>
            </div>    
        </div>
        <form action="" id="contactForm">
            <h2 style="font-weight: 300;">Contact</h2>
            <div class="row">
                <input type="text" id="formName" placeholder="Name"></input>
                <input type="text" id="formEmail" placeholder="Email"></input>
            </div>
            <input type="text" id="formSubject" placeholder="Subject"></input>
            <textarea type="text" id="formBodyText" placeholder="Message"></textarea>
            <button>Submit</button>
        </form>
        </div>
    </div>
`