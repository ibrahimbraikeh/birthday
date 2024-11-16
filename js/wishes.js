function showText() {
    const text = "صرتي ٢٤ و فتي بال٢٥. ما بحب ذكرك بس قربتي من ال٣٠. بشكر الله اني لقيتك و تجرأت اسئلك اذا بتبادليني مشاعري. و بشكر الله انك ما حكمتي عليي من قدرتي على تركيب جملة بهداك الوقت.من هداك اليوم كل نهار بيمرق عم نصير أقرب من بعض و لسا شوي منصير أقرب اكتر. مستحيل كنت اتخيل اقدر اتعامل مع أي حدا بالاريحية يلي بحس فيها معك. اقدر كون معك متل كأني ربحت الجائزة الكبرى باليانصيب. كل سنة و انت سالمة و بتمنى حياتك تكوني مليانة فرح و سعادة و توفيق من كل النواحي. و تحصلي على كل شي بيتمناه قلبك الطيب.";
    const outputElement = document.getElementById("output-text");
    outputElement.style.display = "block"; // Show the text area
    outputElement.innerHTML = ""; // Clear any existing content
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            outputElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 70); // Adjust typing speed
        }
    }

    typeWriter(); // Start typing effect
}
