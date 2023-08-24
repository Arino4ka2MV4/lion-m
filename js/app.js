gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})

gsap.from('.hero-section-img', {
    marginTop: 50,
    opacity: 0,
    duration: .7
});

gsap.from('.about-title__line', {
    x: 800,
    scrollTrigger: {
        trigger: '.about-title',
        start: 'top bottom',
        end: '+=50',
    }
})

gsap.fromTo('.triangle', {x: 200}, {
    x: -100, transform: 'rotate(40deg)',
    scrollTrigger: {
        trigger: '.triangle',
        scrub: true
    }
})

gsap.fromTo('.sqr', {x: -200}, {
    x: 300, transform: 'rotate(40deg)',
    scrollTrigger: {
        trigger: '.sqr',
        scrub: true
    }
})

let prodL = gsap.utils.toArray('.production-left .production-item');
let prodR = gsap.utils.toArray('.production-right .production-item')

prodL.forEach(item => {
    gsap.from(item, {
    opacity: 0,
    x: -500,
    scrollTrigger: {
        trigger: item,
        start: '-1000',
        end: '-300',
        scrub: true
        }
    })
})

prodR.forEach(item => {
    gsap.from(item, {
        opacity: 0,
        x: 500,
        scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: '-300',
            scrub: true
        }
    })
})