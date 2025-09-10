function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Create SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "60");
    svg.style.background = "#f5f5f5";
    svg.style.borderRadius = "4px";

    // Add random lines for noise
    for (let i = 0; i < 7; i++) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", Math.random() * 200);
        line.setAttribute("y1", Math.random() * 60);
        line.setAttribute("x2", Math.random() * 200);
        line.setAttribute("y2", Math.random() * 60);
        line.setAttribute("stroke", "#000");
        line.setAttribute("stroke-width", 1);
        svg.appendChild(line);
    }

    // Add captcha text
    for (let i = 0; i < captchaText.length; i++) {
        const text = document.createElementNS(svgNS, "text");
        text.textContent = captchaText[i];
        text.setAttribute("x", 25 + i * 28);
        text.setAttribute("y", 40);
        text.setAttribute("font-size", "28");
        text.setAttribute("font-family", "Arial, sans-serif");
        text.setAttribute("fill", "#000");
        text.setAttribute("transform", `rotate(${Math.random() * 30 - 15}, ${25 + i * 28}, 40)`);
        svg.appendChild(text);
    }

    // Save captcha value for validation
    window.currentCaptcha = captchaText;

    // Render inside captcha_box
    const box = document.getElementById("captcha_box");
    box.innerHTML = "";
    box.appendChild(svg);
}
// Generate on load
generateCaptcha();