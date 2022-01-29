import { createStore } from 'redux';

const initialState = {
    players: [
        {
            id: 1,
            name: "Martin Abel",
            img: "https://assets.laliga.com/squad/2021/t3567/p490310/256x256/p490310_t3567_2021_1_002_000.jpg"
        },
        {
            id: 2,
            name: "Mariano Abel",
            img: "https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic1.abc.es%2Fmedia%2Fdeportes%2F2020%2F10%2F29%2F3-kxyH--220x220%40abc.jpg&nuevoancho=256&medio=abc"
        },
        {
            id: 3,
            name: "Agustin Rubio",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJWZQqTVzQs91K_d44qIp_dYhn9mB4pE3Hg&usqp=CAU"
        },
        {
            id: 4,
            name: "Carlos Smuckler",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2O562uNAmhKPuGA2MSZuhxfnDTkI40lPoA&usqp=CAU"
        },
        {
            id: 5,
            name: "Facundo Chacon",
            img: "https://assets.laliga.com/squad/2021/t192/p170929/256x256/p170929_t192_2021_1_002_000.jpg"
        },
        {
            id: 6,
            name: "Mariela Vega",
            img: "https://i.pinimg.com/474x/a2/d7/31/a2d731243cecb31f865e00bfd15d8a8c.jpg"
        },
        {
            id: 7,
            name: "Daniela Quintana",
            img: "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4-sevilla.abc.es%2Fmedia%2Falfinaldelapalmera%2F2022%2F01%2F22%2Fs%2Fcardoso-basilea-U12260026580jgf-220x220%40abc.jpg&nuevoancho=256&medio=sevilla.abc"
        },
        {
            id: 8,
            name: "Pamela Calderon",
            img: "https://cdn.soccerwiki.org/images/player/97096-action.png"
        },
        {
            id: 9,
            name: "Fernando Parapuño",
            img: "https://pbs.twimg.com/profile_images/606777833302683648/dHcfFFWy_400x400.jpg"
        },
        {
            id: 10,
            name: "Flavio Montecino",
            img: "https://i.pinimg.com/originals/9a/e5/c2/9ae5c217d43ecf05da23e60ccc8f485b.png"
        },
        {
            id: 11,
            name: "Pio Mauricio",
            img: "https://assets.laliga.com/squad/2021/t186/p246333/256x256/p246333_t186_2021_1_002_000.jpg"
        },
        {
            id: 12,
            name: "Agustin Honorato",
            img: "https://cdn.pesmaster.com/players/pes-2021/player_220242026_l.png"
        },
        {
            id: 13,
            name: "Augusto Marnetti",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDY9WCwMAWafToEHYnUR0bcmrKaEJRwroaQ&usqp=CAU"
        }
    ],
    startings: [],
    replacements: []
};

const reducerTrainer = (state = initialState, action) => {

    if(action.type === "ADD_STARTING"){
        return {
            ...state,
            startings: state.startings.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if(action.type === "ADD_REPLACEMENT"){
        return {
            ...state,
            replacements: state.replacements.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if(action.type === "REMOVE_STARTING"){
        return {
            ...state,
            startings: state.startings.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }

    if(action.type === "REMOVE_REPLACEMENT"){
        return {
            ...state,
            replacements: state.replacements.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }

    return state;
};



export default createStore(reducerTrainer);