document.querySelectorAll(".home-scroll-section").forEach(section => {
    let triggers = section.querySelectorAll(".home-scroll-img");
    let targets = section.querySelectorAll(".home-scroll-img-item");

    triggers[0].classList.add("is-active");
    targets[0].classList.add("is-active");

    triggers.forEach((trigger, index) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            onToggle: ({ isActive }) => {
                triggers[index].classList.toggle("is-active", isActive);
                targets[index].classList.toggle("is-active", isActive);
            }
        });
    });
});
