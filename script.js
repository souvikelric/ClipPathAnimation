document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const containers = document.querySelectorAll('.container');
    const container1 = containers[0];
    const container2 = containers[1];
    const container3 = containers[2];
    const img1 = container1.querySelector('img');
    const img2 = container2.querySelector('img');
    const tl = gsap.timeline()

    tl.fromTo(img1,{
        clipPath: "polygon(20% 36%, 74% 36%, 75% 77%, 20% 77%)"
    },
    {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        delay:1,
        duration: 1.6, 
        ease: 'power3.inOut'
    })
    .set(container1,{
        backgroundColor:"transparent",
    }).to(img1,
       {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration:1.5,
        ease:'power3.out'
    }).fromTo(img2,
        {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},
        {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration:1,
        ease:'power3.out'
    },"-=0.8")
    .fromTo(".overlay h1",{
        opacity:0,
        y:50
    },{
        opacity:1,
        y:0,
        zIndex:9,
        stagger:0.1,
        duration:1,
        ease:'power3.inOut'
    },"-=0.4")
    .set(container3,{
        zIndex:9,
    })
    .fromTo(".overlay button",{
        opacity:0,
        y:50
    },{
        opacity:1,
        y:0,
        duration:1,
        ease:'power3.inOut'
    },"-=1")
});

