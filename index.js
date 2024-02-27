window.addEventListener('load', () => {
    let navigators = document.querySelectorAll(".navigators");
    navigators.forEach((e) => {
        e.addEventListener('click', () => {
            navigators.forEach(n => {
                n.classList.remove('selected')
            })
            e.classList.add('selected')

            // guard for frequent clicks
            if (document.querySelector('main').childElementCount > 1) {
                return;
            }

            let w = document.createElement('div');
            let f = document.createElement('iframe');
            w.setAttribute('class', 'none');
            f.setAttribute('src', 'Pages/' + e.innerHTML.replaceAll(' ', '-') + '/page.html');
            w.appendChild(f)
            document.querySelector("main").appendChild(w);
            // innerDoc = (f.contentDocument) ? f.contentDocument : f.contentWindow.document;
            // function wait_for_image_load_then(function_to_be_called) {
            //     new Promise((res, rej) => {
            //         setTimeout(() => {
            //             images = innerDoc.querySelectorAll("img");
            //             let all_complete = Array.from(images).every((img) => img.complete)
            //             if (all_complete) {
            //                 res('images load finish (iframe)');
            //             }
            //             else {
            //                 rej('image loading (iframe)');
            //             }
            //         }, Math.random() + 10) // necessary to make each Promise a new instance 
            //     }).then(
            //         (res) => { console.log(res); function_to_be_called(); }
            //     ).catch(
            //         (reason) => { console.log(reason); wait_for_image_load_then(function_to_be_called); }
            //     );
            // }
            // wait_for_image_load_then(window_swipe);
            window_swipe();
        })
    })
})

function window_swipe() {
    let w = document.querySelector('main').lastChild;
    w.setAttribute('class', 'windows opening_window');
    document.querySelector('.windows').setAttribute('class', 'windows closing_window')
    setTimeout(() => {
        document.querySelector('.windows.closing_window').remove();
        document.querySelector('.windows.opening_window').setAttribute('class', 'windows');
    }, 500)
}

function pause_or_play_background_video() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}