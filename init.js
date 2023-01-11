window.onload = (event) => {
    document.getElementById("navBar").innerHTML = `<ul>
    <li><a href="index.html">Home</a></li>
    <li>
        <a href="about me.html">About Me</a>
    </li>
    <li>
        <a href="#services">Counseling Services</a>
        <div class="dropdown">
            <ul>
                <li><a href="LGBTQIACounseling.html">LGBTQIA+ Counseling</a></li>
                <li><a href="Depression.html">Depression</a></li>
                <li><a href="Anxiety.html">Anxiety</a></li>
                <li><a href="Grief.html">Grief</a></li>
                <li><a href="Trauma.html">Trauma</a></li>
                <li><a href="BipolarDisorder.html">Bipolar Disorder</a></li>
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
                <br>
                <p><b>Hours</b></p>
                <p>I conduct online appointments only. My hours are:</p>
                <p>M-F from 10 am to 7 pm</p>
                <br>
                <p><b>Insurance and fees:</b></p>
                <p>I take Aetna and Cigna/ Evernorth - your copay will be decided by your insurance company.</p>
                <p>I also accept self-pay clients. The fee is $110 per 55 minute session.</p>
            </div>
            <br>
            <div class="links">
                <p><b>Other Links:</b></p>
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
    `;

document.getElementById("resourceLinksWrapper").innerHTML = `
<img src="Photos/love2.jpg" alt="">

<ul class="resourceLinks">
<h2>Helpful Pages</h2>
<a href="BeingLGBTQIA.html">Being LGBTQIA+</a></li>
<a href="LGBTQIAResources.html">Resources for LGBTQIA+</a>
<a href="CopingSkills.html">Coping Skills for LGBTQIA+</a>
<a href="QuestionstoAsk.html">Questions to Ask</a>
<a href="CommonTerms.html">Common Terms Used</a>
<a href="Privacy.html">Privacy</a>
</ul>
`;
  };