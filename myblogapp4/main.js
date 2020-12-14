/***********************************************
 
* JavaScript Alarm Clock- by JavaScript Kit (www.javascriptkit.com)
* This notice must stay intact for usage
* Visit JavaScript Kit at http://www.javascriptkit.com/ for this script and 100s more
 
***********************************************/
var jsalarm = {
    padfield: function (f) {
        return (f < 10) ? "0" + f : f
    },
    showcurrenttime: function () {
        var birds = document.getElementsByClassName('bird')
        var nature_sounds = document.getElementsByClassName('nature')
        var classical_music = document.getElementsByClassName('classical')
        var dateobj = new Date()
        var ct = this.padfield(dateobj.getHours()) + ":" + this.padfield(dateobj.getMinutes()) + ":" + this.padfield(dateobj.getSeconds())
        var ct2 = this.padfield(dateobj.getMinutes()) + ":" + this.padfield(dateobj.getSeconds())
        this.ctref.innerHTML = ct
        this.ctref.setAttribute("title", ct)
        if (typeof this.hourwake != "undefined") { //if alarm is set
            if (ct2 == (/*this.hourwake + ":" + */this.minutewake + ":" + this.secondwake)) {
                //clearInterval(jsalarm.timer)
                //window.location = document.getElementById("musicloc").value
                //window.open(document.getElementById("musicloc").value)
                //alert(document.getElementById("audio").src)
                //setInterval(function(){window.close}, 5000)
                birds[ Math.floor(Math.random() * birds.length)].play()
            } else if (this.ctref.title == (this.hourwake2 + ":" + this.minutewake2 + ":" + this.secondwake2)) {
                //window.location = document.getElementById("musicloc").value
                nature_sounds[ Math.floor(Math.random() * nature_sounds.length)].play()
                //sounds[1].play()
                //sounds[2].play()
            } else if (this.ctref.title == (this.hourwake3 + ":" + this.minutewake3 + ":" + this.secondwake3)) {
                //window.location = document.getElementById("musicloc").value
                classical_music[ Math.floor(Math.random() * classical_music.length)].play()
            }
        }
    },
    init: function () {
        var dateobj = new Date()
        this.ctref = document.getElementById("jsalarm_ct")
        this.submitref = document.getElementById("submitbutton")
        this.submitref.onclick = function () {
            jsalarm.setalarm()
            this.value = "Alarm Set"
            this.disabled = true
            return false
        }
        this.resetref = document.getElementById("resetbutton")
        this.resetref.onclick = function () {
            jsalarm.submitref.disabled = false

            jsalarm.hourwake = undefined
            jsalarm.hourselect.disabled = false
            jsalarm.minuteselect.disabled = false
            jsalarm.secondselect.disabled = false

            jsalarm.hourwake2 = undefined
            jsalarm.hourselect2.disabled = false
            jsalarm.minuteselect2.disabled = false
            jsalarm.secondselect2.disabled = false

            jsalarm.hourwake3 = undefined
            jsalarm.hourselect3.disabled = false
            jsalarm.minuteselect3.disabled = false
            jsalarm.secondselect3.disabled = false
            return false
        }
        var selections = document.getElementsByTagName("select")
        this.hourselect = selections[0]
        this.minuteselect = selections[1]
        this.secondselect = selections[2]
        this.hourselect2 = selections[3]
        this.minuteselect2 = selections[4]
        this.secondselect2 = selections[5]
        this.hourselect3 = selections[6]
        this.minuteselect3 = selections[7]
        this.secondselect3 = selections[8]
        for (var i = 0; i < 60; i++) {
            if (i < 24) {//If still within range of hours field: 0-23
                this.hourselect[i] = new Option(this.padfield(i), this.padfield(i), false, 8 == i) //dateobj.getHours()->8 //another option: this.padfield(i)->i
                this.hourselect2[i] = new Option(this.padfield(i), this.padfield(i), false, 11 == i) //dateobj.getHours()->12
                this.hourselect3[i] = new Option(this.padfield(i), this.padfield(i), false, 16 == i) //dateobj.getHours()->16
            }
            this.minuteselect[i] = new Option(this.padfield(i), this.padfield(i), false, 0 == i) //dateobj.getMinutes()->0
            this.minuteselect2[i] = new Option(this.padfield(i), this.padfield(i), false, 15 == i) //dateobj.getMinutes()->0
            this.minuteselect3[i] = new Option(this.padfield(i), this.padfield(i), false, 45 == i) //dateobj.getMinutes()->45
            this.secondselect[i] = new Option(this.padfield(i), this.padfield(i), false, 0 == i) //dateobj.getSeconds()->0
            this.secondselect2[i] = new Option(this.padfield(i), this.padfield(i), false, 0 == i) //dateobj.getSeconds()->0
            this.secondselect3[i] = new Option(this.padfield(i), this.padfield(i), false, 0 == i) //dateobj.getSeconds()->0
        }
        jsalarm.showcurrenttime()
        jsalarm.timer = setInterval(function () { jsalarm.showcurrenttime() }, 1000)
    },
    setalarm: function () {
        this.hourwake = this.hourselect.options[this.hourselect.selectedIndex].value
        this.minutewake = this.minuteselect.options[this.minuteselect.selectedIndex].value
        this.secondwake = this.secondselect.options[this.secondselect.selectedIndex].value
        this.hourselect.disabled = true
        this.minuteselect.disabled = true
        this.secondselect.disabled = true

        this.hourwake2 = this.hourselect2.options[this.hourselect2.selectedIndex].value
        this.minutewake2 = this.minuteselect2.options[this.minuteselect2.selectedIndex].value
        this.secondwake2 = this.secondselect2.options[this.secondselect2.selectedIndex].value
        this.hourselect2.disabled = true
        this.minuteselect2.disabled = true
        this.secondselect2.disabled = true

        this.hourwake3 = this.hourselect3.options[this.hourselect3.selectedIndex].value
        this.minutewake3 = this.minuteselect3.options[this.minuteselect3.selectedIndex].value
        this.secondwake3 = this.secondselect3.options[this.secondselect3.selectedIndex].value
        this.hourselect3.disabled = true
        this.minuteselect3.disabled = true
        this.secondselect3.disabled = true
    }
}

function newFunction() {
    return new Audio('./posts/static/posts/hototogisu.mp3')
}
