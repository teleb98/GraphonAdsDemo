/**
 * Graphon Ads Demo App
 */

let state = {
    playing: false,
    focusedIndex: 0,
    autoScroll: true,
    mainVideoUrl: "media/video.mp4",
    brandVideoPlaying: false
};

window.onload = function () {
    initApp();
};

function initApp() {
    console.log("Docs Demo Init");
    renderInsights();
    setupKeys();

    // Focus first item initially
    updateFocus();

    // Auto-return to main video when brand video ends
    const video = document.getElementById('main-player');
    video.addEventListener('ended', () => {
        if (state.brandVideoPlaying) {
            returnToMainVideo();
        }
    });
}

function renderInsights() {
    const container = document.getElementById('insight-list');
    container.innerHTML = '';

    REPORT_DATA.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'insight-card';
        div.id = `insight-${index}`;
        div.innerHTML = `
            <div class="insight-title">${item.prompt}</div>
            <div class="insight-query">${item.query}</div>
            <div class="insight-body">${item.response}</div>
        `;
        container.appendChild(div);
    });
}

function updateFocus() {
    // Remove active class
    document.querySelectorAll('.insight-card').forEach(el => el.classList.remove('active'));

    // Add to current
    const el = document.getElementById(`insight-${state.focusedIndex}`);
    if (el) {
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function toggleVideo() {
    const video = document.getElementById('main-player');
    if (video.paused) {
        video.play();
        state.playing = true;
        document.getElementById('status-hint').innerText = "Playing... (Press ENTER to Pause)";
    } else {
        video.pause();
        state.playing = false;
        document.getElementById('status-hint').innerText = "Paused (Press ENTER to Play)";
    }
}

function setupKeys() {
    document.addEventListener('keydown', (e) => {
        console.log("Key:", e.keyCode);
        const code = e.keyCode;

        switch (code) {
            case 13: // Enter
                // Check if current insight has a video
                const currentInsight = REPORT_DATA[state.focusedIndex];
                if (currentInsight && currentInsight.videoUrl && !state.brandVideoPlaying) {
                    playBrandVideo(currentInsight.videoUrl);
                } else {
                    toggleVideo();
                }
                break;
            case 38: // Up
                if (state.focusedIndex > 0) {
                    state.focusedIndex--;
                    updateFocus();
                }
                break;
            case 40: // Down
                if (state.focusedIndex < REPORT_DATA.length - 1) {
                    state.focusedIndex++;
                    updateFocus();
                }
                break;
            case 10009: // Return / Back
                try { tizen.application.getCurrentApplication().exit(); } catch (e) { window.close(); }
                break;
        }
    });
}

function playBrandVideo(videoUrl) {
    const video = document.getElementById('main-player');

    // Pause current video
    video.pause();

    // Switch to brand video
    video.src = videoUrl;
    video.load();
    video.play();

    // Update state
    state.brandVideoPlaying = true;
    state.playing = true;

    // Update status hint
    document.getElementById('status-hint').innerText = "Playing Brand Video... (Will auto-return when finished)";
}

function returnToMainVideo() {
    const video = document.getElementById('main-player');

    // Switch back to main video
    video.src = state.mainVideoUrl;
    video.load();

    // Reset state
    state.brandVideoPlaying = false;
    state.playing = false;

    // Update status hint
    document.getElementById('status-hint').innerText = "Press ENTER to Play/Pause | UP/DOWN to Browse Insights";
}
