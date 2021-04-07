import { Deck } from '../../types';

const initial: Array<Deck> = [
    {
        slug: 'animals',
        name: 'Animais',
        dificulty: 'Fácil',
        score: 10,
        cards: [
            {slug: 'camel'},
            {slug: 'cat'},
            {slug: 'chicken'},
            {slug: 'cow'},
            {slug: 'dog'},
            {slug: 'fox'},
            {slug: 'goat'},
            {slug: 'lion'},
            {slug: 'monkey'},
            {slug: 'octopus'},
            {slug: 'owl'},
            {slug: 'panda'},
            {slug: 'pig'},
            {slug: 'rat'},
            {slug: 'snake'},
            {slug: 'tiger'},
            {slug: 'turtle'},
            {slug: 'unicorn'},
        ]
    },
    {
        slug: 'space',
        name: 'Espaço',
        dificulty: 'Médio',
        score: 12,
        cards: [
            {slug: 'alien'},
            {slug: 'astronaut'},
            {slug: 'galaxy'},
            {slug: 'jupiter'},
            {slug: 'mars'},
            {slug: 'meteorites'},
            {slug: 'moon'},
            {slug: 'planet-earth'},
            {slug: 'radar'},
            {slug: 'radar2'},
            {slug: 'rocket-ship'},
            {slug: 'satellite'},
            {slug: 'saturn'},
            {slug: 'solar-system'},
            {slug: 'space-shuttle'},
            {slug: 'sun'},
            {slug: 'telescope'},
            {slug: 'uranus'}
        ]
    },
    {
        slug: 'medicine',
        name: 'Medicina',
        dificulty: 'Médio',
        score: 12,
        cards: [
            {slug: 'ambulance'},
            {slug: 'cardiogram'},
            {slug: 'heart'},
            {slug: 'hospital'},
            {slug: 'hospital2'},
            {slug: 'hospital3'},
            {slug: 'hospital4'},
            {slug: 'magnifying-glass'},
            {slug: 'medical-kit'},
            {slug: 'medicine'},
            {slug: 'nurse'},
            {slug: 'nurse2'},
            {slug: 'pills'},
            {slug: 'placeholder'},
            {slug: 'stethoscope'},
            {slug: 'syringe'},
            {slug: 'water'},
            {slug: 'dna'}
        ]
    },
    {
        slug: 'people',
        name: 'Pessoas',
        dificulty: 'Difícil',
        score: 15,
        cards: [
            {slug: 'boy'},
            {slug: 'boy2'},
            {slug: 'boy3'},
            {slug: 'boy4'},
            {slug: 'boy5'},
            {slug: 'boy6'},
            {slug: 'boy7'},
            {slug: 'boy8'},
            {slug: 'girl'},
            {slug: 'girl2'},
            {slug: 'girl3'},
            {slug: 'girl4'},
            {slug: 'girl5'},
            {slug: 'girl6'},
            {slug: 'girl7'},
            {slug: 'girl8'},
            {slug: 'girl9'},
            {slug: 'girl10'}
        ]
    }
];

function reducer(state = initial) {
    return state;
};

export default reducer;