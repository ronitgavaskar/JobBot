var B = "B";
var E = "E";
var L = "L";
var K = "K";
var V = "V";

var jobTs = {
  "modern": {
    K: "job_tmpl",
    V: {
      B: `<article>`,
      E: `</article>`,
      L: [
        {
          K: "company",
          V: {
            B: `<h2>`,
            E: `</h2>`
          }
        },
        {
          K: "start_date",
          V: {
            B: `<p class="subDetails">`,
            E: ""
          }
        },
        {
          K: "end_date",
          V: {
            B: " - ",
            E: `</p>`
          }
        },
        {
          K: "description_str",
          V: {
            B: `<p>`,
            E: `</p>`
          }
        }
      ]
    }
  }
};
var templates = {
	"modern":
	 {
     K: "resume_tmpl",
     V: {
      B: 
        `
        <!DOCTYPE html>
        <html>
        <head>
        
        <meta name="viewport" content="width=device-width"/>
        <meta name="description" content="The Curriculum Vitae of Joe Bloggs."/>
        <meta charset="UTF-8"> 
        
        <style>
          html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
            border:0;
            font:inherit;
            font-size:100%;
            margin:0;
            padding:0;
            vertical-align:baseline;
            }
            
            article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
            display:block;
            }
            
            html, body {background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;}
            
            .clear {clear: both;}
            
            p {
              font-size: 1em;
              line-height: 1.4em;
              margin-bottom: 20px;
              color: #444;
            }
            
            #cv {
              width: 90%;
              max-width: 800px;
              background: #f3f3f3;
              margin: 30px auto;
            }
            
            .mainDetails {
              padding: 25px 35px;
              border-bottom: 2px solid #cf8a05;
              background: #ededed;
            }
            
            #name h1 {
              font-size: 2.5em;
              font-weight: 700;
              font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
              margin-bottom: -6px;
            }
            
            #name h2 {
              font-size: 2em;
              margin-left: 2px;
              font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            }
            
            #mainArea {
              padding: 0 40px;
            }
            
            #headshot {
              width: 12.5%;
              float: left;
              margin-right: 30px;
            }
            
            #headshot img {
              width: 100%;
              height: auto;
              -webkit-border-radius: 50px;
              border-radius: 50px;
            }
            
            #name {
              float: left;
            }
            
            #contactDetails {
              float: right;
            }
            
            #contactDetails ul {
              list-style-type: none;
              font-size: 0.9em;
              margin-top: 2px;
            }
            
            #contactDetails ul li {
              margin-bottom: 3px;
              color: #444;
            }
            
            #contactDetails ul li a, a[href^=tel] {
              color: #444; 
              text-decoration: none;
              -webkit-transition: all .3s ease-in;
              -moz-transition: all .3s ease-in;
              -o-transition: all .3s ease-in;
              -ms-transition: all .3s ease-in;
              transition: all .3s ease-in;
            }
            
            #contactDetails ul li a:hover { 
              color: #cf8a05;
            }
            
            
            section {
              border-top: 1px solid #dedede;
              padding: 20px 0 0;
            }
            
            section:first-child {
              border-top: 0;
            }
            
            section:last-child {
              padding: 20px 0 10px;
            }
            
            .sectionTitle {
              float: left;
              width: 25%;
            }
            
            .sectionContent {
              float: right;
              width: 72.5%;
            }
            
            .sectionTitle h1 {
              font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
              font-style: italic;
              font-size: 1.5em;
              color: #cf8a05;
            }
            
            .sectionContent h2 {
              font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
              font-size: 1.5em;
              margin-bottom: -2px;
            }
            
            .subDetails {
              font-size: 0.8em;
              font-style: italic;
              margin-bottom: 3px;
            }
            
            .keySkills {
              list-style-type: none;
              -moz-column-count:3;
              -webkit-column-count:3;
              column-count:3;
              margin-bottom: 20px;
              font-size: 1em;
              color: #444;
            }
            
            .keySkills ul li {
              margin-bottom: 3px;
            }
            
            @media all and (min-width: 602px) and (max-width: 800px) {
              #headshot {
                display: none;
              }
              
              .keySkills {
              -moz-column-count:2;
              -webkit-column-count:2;
              column-count:2;
              }
            }
            
            @media all and (max-width: 601px) {
              #cv {
                width: 95%;
                margin: 10px auto;
                min-width: 280px;
              }
              
              #headshot {
                display: none;
              }
              
              #name, #contactDetails {
                float: none;
                width: 100%;
                text-align: center;
              }
              
              .sectionTitle, .sectionContent {
                float: none;
                width: 100%;
              }
              
              .sectionTitle {
                margin-left: -2px;
                font-size: 1.25em;
              }
              
              .keySkills {
                -moz-column-count:2;
                -webkit-column-count:2;
                column-count:2;
              }
            }
            
            @media all and (max-width: 480px) {
              .mainDetails {
                padding: 15px 15px;
              }
              
              section {
                padding: 15px 0 0;
              }
              
              #mainArea {
                padding: 0 25px;
              }
            
              
              .keySkills {
              -moz-column-count:1;
              -webkit-column-count:1;
              column-count:1;
              }
              
              #name h1 {
                line-height: .8em;
                margin-bottom: 4px;
              }
            }
            
            @media print {
              #cv {
                width: 100%;
              }
            }
        </style>
        
        <style>
          /* latin-ext */
          @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 300;
          src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 300;
          src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* vietnamese */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 400;
          src: local('Rokkitt Regular'), local('Rokkitt-Regular'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdE35qfgYFjGy5hkEmCdubL.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 400;
          src: local('Rokkitt Regular'), local('Rokkitt-Regular'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdE35qfgYFjGy5hkEiCdubL.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 400;
          src: local('Rokkitt Regular'), local('Rokkitt-Regular'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdE35qfgYFjGy5hkEaCdg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* vietnamese */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 700;
          src: local('Rokkitt Bold'), local('Rokkitt-Bold'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdB35qfgYFjGy5hmP2nY9bqxycJ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 700;
          src: local('Rokkitt Bold'), local('Rokkitt-Bold'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdB35qfgYFjGy5hmP2nY9fqxycJ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
          font-family: 'Rokkitt';
          font-style: normal;
          font-weight: 700;
          src: local('Rokkitt Bold'), local('Rokkitt-Bold'), url(https://fonts.gstatic.com/s/rokkitt/v14/qFdB35qfgYFjGy5hmP2nY9nqxw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        </style>
        </head>
        <body id="top">
        <div id="cv" class="instaFade">
        `,
      E: 
        `
        <section>
        <div class="sectionTitle">
          <h1>Work Experience</h1>
        </div>
        
        <div class="sectionContent">
          <article>
            <h2>Job Title at Company</h2>
            <p class="subDetails">April 2011 - Present</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </article>
          
          <article>
            <h2>Job Title at Company</h2>
            <p class="subDetails">Janruary 2007 - March 2011</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </article>
          
          <article>
            <h2>Job Title at Company</h2>
            <p class="subDetails">October 2004 - December 2006</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
          </article>
        </div>
        <div class="clear"></div>
      </section>
      
      
      <section>
        <div class="sectionTitle">
          <h1>Key Skills</h1>
        </div>
        
        <div class="sectionContent">
          <ul class="keySkills">
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ul>
        </div>
        <div class="clear"></div>
      </section>
      
      <section>
        <div class="sectionTitle">
          <h1>Education</h1>
        </div>
        
        <div class="sectionContent">
          <article>
            <h2>College/University</h2>
            <p class="subDetails">Qualification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
          </article>
          
          <article>
            <h2>College/University</h2>
            <p class="subDetails">Qualification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
          </article>
        </div>
        <div class="clear"></div>
      </section>
    </div>
  </div>
  </body>
  </html>
        `,
      L: [  
        {
          K: "personal_info",
          V: {
            B: `<div class="mainDetails">`, // typeof = 'string'
            E: `</div><div class="clear">
                </div></div><div id="mainArea">`,
            L: [
              {
                K: "name",
                V: {
                  B: `<div id="name"><h1>`,
                  E: `</h1></div><div id="contactDetails"><ul>`,
                }
              },
              {
                K: "email",
                V: {
                  B: `<li>`,
                  E: `</li>`,
                }
              },
              {
                K: "website",
                V: {
                  B: `<li>`,
                  E: `</li>`,
                }
              },
              {
                K: "linkedin",
                V: {
                  B: `<li>`,
                  E: `</li></ul>`,
                }
              }
            ]
          }
        },
        {
          K: "personal_statement",
          V: {
            B: `<section>
            <article>
              <div class="sectionTitle">
                <h1>Personal Profile</h1>
              </div>
              
              <div class="sectionContent"><p>`,
            E: `</p>
            </div>
          </article>
          <div class="clear"></div>
        </section>`,
            L: [
              {
                K: "statement",
                V: {
                  B: "",
                  E: ""
                }
              }
            ]
          }
        },
        {
          K: "work_experience",
          V: {
            B: `<section>
            <div class="sectionTitle">
              <h1>Work Experience</h1>
            </div>
            <div class="sectionContent">`,
            E: `</div>
            <div class="clear"></div>
          </section>`
          }
        },
        {
          K: "personal_skills",
          V: {
            B: `<section>
            <div class="sectionTitle">
              <h1>Key Skills</h1>
            </div>
            
            <div class="sectionContent">
              <ul class="keySkills">`,
            E: `</ul>
            </div>
            <div class="clear"></div>
          </section>`
          }
        },
        {
          K: "education",
          V: {
            B: `		<section>
            <div class="sectionTitle">
              <h1>Education</h1>
            </div>
            <div class="sectionContent">`,
            E: `</div>
                <div class="clear"></div>
              </section>
            </div>`
          }
        }
      ]
    }
  }
};

function isLeaf(obj) {
  return "undefined" === typeof(obj)
      || "undefined" === typeof(obj[V]) 
      || "undefined" === typeof(obj[V][L]);
}


function writeToFile(str) {
  const fs = require('fs');
  fs.writeFile('index.html', str, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Resume printed!');
});
}

// Concat is the fastest based on benchmarks at: 
// https://www.freecodecamp.org/forum/t/which-is-more-efficient-str-some-string-or-array-push-join/5802/3
function buildString(objects, template) {
  console.log(template[K]);
  console.log(objects);
  if (isLeaf(template)) {
    return template[V][B] + objects[template[K]] + template[V][E];
  }

  var output = template[V][B];
  fields = template[V][L];
  fields.forEach(f => {
    output += buildString(objects[f[K]], f)
  });

  // console.log("objects")

  output += template[V][E];
  // console.log(output);
  // writeToFile(output)

  return output;
}

var resume_tmpl = {
  personal_info : {
    name : "Bimesh",
    email : "bimeshde@gmail.com",
    website : "bimesh.dev",
    linkedin : "linkedin.com/in/bimesh"
  },
  personal_statement : {
    statement : "I bike"
  },
  work_experience : {
    // type: job_tmpl
    jobs : []
  },
  personal_skills : {
    skills : null
  },
  education : {
    // type: college_tmpl
    colleges : []
  },
  personal_interests : {
    // type: string
    interests : []
  },
  personal_projects : {
    // type: project_tmpl
    projects : []
  }
}

var order = 
{
  K: "resume_tmpl",
  L:
    [
      {
        K: "personal_info",
        L: ["name", "email", "website", "linkedin"]
      },
      {
        K: "personal_statement",
        L: ["statement"]
      }
      // {
      //   K: "work_experience", 
      //   L: [
      //     {
      //       K: "jobs",
      //       L: jobOrder
      //     }
      //   ]
      // }
      // {
      //   K: "personal_skills", 
      //   L: [{
      //     K: "skills",
      //     L: [
            
      //     ]
      //   }]
      // },
      // {
      //   K: "education", 
      //   L: [{
      //     K: "colleges",
      //     L: [
            
      //     ]
      //   }]
      // }
    ]
}

var wrapper = {
  resume_tmpl: resume_tmpl,
  // skills_tmpl: skills_tmpl,
  // interest_tmpl: interest_tmpl,
  // job_tmpl: job_tmpl,
  // college_tmpl: college_tmpl,
  // project_tmpl: project_tmpl
}

function fillInTemplates(html, tmpl) {
  // console.log(html[V][E])
  tmpl["_" + html[K]] = html[V][B];
  tmpl[html[K] + "_"] = html[V][E];
  if (isLeaf(html)) {
    return;
  }

  html[V][L].forEach(t => {
    fillInTemplates(t, tmpl[html[K]])
  });
}

console.log("yo");
fillInTemplates(templates["modern"], wrapper);
// fillInTemplates(jobTs["modern"], wrapper);
// console.log(wrapper);
// console.log(buildString(objects, templates["modern"]));

console.log(wrapper.job_tmpl);

function buildHTML(obj, template) {
  console.log("---");
  console.log(obj[K])
  if ("undefined" === typeof(obj[L])) {
    return template["_" + obj] + template[obj] + template[obj + "_"];
  }
  output = template["_" + obj[K]];
  obj[L].forEach(f => {
    console.log("f: " + f);
    // console.log(template);
    if (template[obj[K]] === undefined) {
      console.log("HELLO");
      console.log(obj[K]);
      console.log(template);
    } 
      output += buildHTML(f, template[obj[K]]);
  });
  output += template[obj[K] + "_"];
  return output;
}
console.log(buildHTML(order, wrapper));
