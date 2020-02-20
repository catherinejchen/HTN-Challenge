// accessing data
window.addEventListener('load', function () {
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    test = JSON.parse(httpGet("https://hackthenorth.netlify.com/api/fe-challenge-attendee"));

    if(test == null){
        document.getElementById("profile").style.display = "none";
        document.getElementById("null-profile").style.display = "block";
    }
    else{
        document.getElementById("profile").style.display = "block";
        document.getElementById("null-profile").style.display = "none";
    }

    if(test.type == "hacker"){
        document.getElementById("hacker").style.display = "block";
        document.getElementById("workshop").style.display = "block";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "sponsor"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "block";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "volunteer"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "block";
        document.getElementById("organizer").style.display = "none";
        document.getElementById("call").style.display = "none";
    }
    else if(test.type == "organizer"){
        document.getElementById("hacker").style.display = "none";
        document.getElementById("workshop").style.display = "none";
        document.getElementById("sponsor").style.display = "none";
        document.getElementById("volunteer").style.display = "none";
        document.getElementById("organizer").style.display = "block";
        document.getElementById("call").style.display = "block";
    }

    document.getElementById("pfp").src = test.profile_pic;
    document.getElementById("name").innerHTML = test.name;
    if (test.checked_in == true){
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: Yes | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    else if(test.checked_in == false){
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: No | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    else{
        document.getElementById("caption").innerHTML = "ID: " + test.id + " | " + test.type[0].toUpperCase() + test.type.slice(1);
    }
    // document.getElementById("caption").innerHTML = "ID: " + test.id + " | Checked In: " + test.checked_in + " | " + test.type;
    document.getElementById("bio").innerHTML = test.bio;

    document.getElementById("num-workshops").innerHTML = test.num_workshops_attended;

    document.getElementById("company").innerHTML = test.sponsor_company;
    document.getElementById("company-link").innerHTML = test.sponsor_company_link;

    var date = new Date(test.next_shift)
    document.getElementById("next-shift").innerHTML = date;

    document.getElementById("phone-num").innerHTML = test.phone_number;
})

// particles

particlesJS("particleCanvas-Blue", {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#1B5F70"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 3
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.6,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 250,
            color: "#00ccff",
            opacity: 0.6,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 394.57382081613633,
                rotateY: 157.82952832645452
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.2
                }
            },
            bubble: {
                distance: 1500,
                size: 40,
                duration: 7.272727272727273,
                opacity: 0.3676323676323676,
                speed: 3
            },
            repulse: {
                distance: 50,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

particlesJS("particleCanvas-White", {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 3
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 0.2,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 15,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 3945.7382081613637,
                rotateY: 157.82952832645452
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.2
                }
            },
            bubble: {
                distance: 1500,
                size: 40,
                duration: 7.272727272727273,
                opacity: 0.3676323676323676,
                speed: 3
            },
            repulse: {
                distance: 50,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});


// Arrow
$.fn.characterize = function (wrapper, options) {
    var txt = this.text(),
        self = this;
  
    this.empty();
  
    wrapper = wrapper || '<span />';
    options = options || {};
  
    Array.prototype.forEach.call(txt, function (c) {
      options.text = c;
      self.append($(wrapper, options));
    });
  };
  
  
  function animateHeader() {
    var wlc = $('#header-text');
  
    wlc.characterize('<span />', {
      class: 'fd',
      css: {
        opacity: 0
      }
    });
    
    wlc.css('opacity', 1);
  
    $('.fd').each(function (i) {
      $(this).delay(i* 750).animate({opacity: 1}, (i + 1) * 300);
    });
  }
  
  
  animateHeader();
  