window.onload = (event) => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width > 641){
        document.getElementById("navBar").innerHTML = `
            <ul id="fullNav">
                <li><a href="index.html">Home</a></li>
                <li><a href="about me.html">About Me</a></li>
                <li>
                    <a href="#services">Counseling Services</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="LGBTQIACounseling.html">LGBTQIA+ Counseling</a></li>
                            <li><a href="GenderDysphoria.html">Gender Dysphoria</a></li>
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
    } else {
        document.getElementById("navBar").innerHTML = `
            <ul id="mobileNav">
                <h1 id="mobileMenu">Menu</h1>
                <li><a href="index.html">Home</a></li>
                <li><a href="about me.html">About Me</a></li>
                <li>
                    <a href="#services" id="navServices">Counseling Services</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="LGBTQIACounseling.html">LGBTQIA+ Counseling</a></li>
                            <li><a href="GenderDysphoria.html">Gender Dysphoria</a></li>
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
            var mobMenu = document.getElementById("mobileMenu");
            var mobNav = document.getElementById("mobileNav");

            mobMenu.addEventListener("click", function(){
                if (mobNav.style.maxHeight == "100vh"){
                    mobNav.style.maxHeight = "48px";
                } else {
                    mobNav.style.maxHeight = "100vh";
                }
            });
    }
    

    document.getElementById("footerWrapper").innerHTML = `
    <div id="footer">
        <div id="footerAlign">
        <div class="details">
            <div class="info">
                <p>Tynya Patton, LPC</p>
                <p>She/Her/Hers</p>
                <p><a style="text-decoration: underline;" href="mailto:tpattonlpc@gmail.com">tpattonlpc@gmail.com</a></p>
                <p>Nashville, TN</p>
                <br>
                <p><b>Hours</b></p>
                <p>I conduct online appointments only. My hours are:</p>
                <p>M-F from 10 am to 7 pm</p>
                <br>
                <p><b>Fees:</b></p>
                <p>The fee is $150 per 55 minute session.</p> 
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
            </div>
            <input type="text" id="formSubject" placeholder="Subject"></input>
            <textarea type="text" id="formBodyText" placeholder="Message"></textarea>
            <button onclick="sendEmail()">Submit</button>
        </form>
        </div>
    </div>
    `;
    try {
        document.getElementById("resourceLinksWrapper").innerHTML = `
            <img src="Photos/love2.jpg" id="resourcePhoto" alt="">

            <ul class="resourceLinks">
            <h2>Helpful Pages</h2>
            <a href="BeingLGBTQIA.html">Being LGBTQIA+</a></li>
            <a href="GenderDysphoria.html">Gender Dysphoria and Questioning</a>
            <a href="LGBTQIAResources.html">Resources for LGBTQIA+</a>
            <a href="CopingSkills.html">Coping Skills for LGBTQIA+</a>
            <a href="QuestionstoAsk.html">Questions to Ask</a>
            <a href="CommonTerms.html">Common Terms Used</a>
            <a href="Privacy.html">Privacy</a>
            
            </ul>
            `;
    }
    catch {}


    try{
        
      }
      catch (e){
        alert(e);
      }
  };

  function sendEmail(){
    var email = "tpattonlpc@gmail.com";
    var name = "Signed,\n-" + document.getElementById("formName").value;
    var subject = document.getElementById("formSubject").value;
    var emailBody = document.getElementById("formBodyText").value;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody + "\n\n" + name);
  }
  