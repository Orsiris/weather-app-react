const getMoonIcon = (moonPhase) => {

    const moonIcons = [{
        phase: 'New Moon',
        icon: 'moon-new.svg'
    },
    {
        phase: 'Waxing Crescent',
        icon: 'moon-waxing-crescent.svg'
    },
    {
        phase: 'First Quarter',
        icon: 'moon-first-quarter.svg'
    },
    {
        phase: 'Waxing Gibbous',
        icon: 'moon-waxing-gibbous.svg'
    },
    {
        phase: 'Full Moon',
        icon: 'moon-full.svg'
    },
    {
        phase: 'Waning Gibbous',
        icon: 'moon-waning-gibbous.svg'
    },
    {
        phase: 'Last Quarter',
        icon: 'moon-last-quarter.svg'
    },

    {
        phase: 'Waning Crescent',
        icon: 'moon-waning-crescent.svg'
    }

]

    const matchingMoonIcon = moonIcons.find((moon) => moon.phase === moonPhase);

    if (matchingMoonIcon) {
        return (`${matchingMoonIcon.icon}`);
    }

    else{
        return null;
    }

}

export default getMoonIcon;