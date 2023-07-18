import { useEffect, useState } from 'react'
import style from './Create.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes, postPokemon } from '../../Redux/actions';
import { useHistory } from 'react-router-dom';
export default function Create (){

    const [input, setInput] = useState({
        name: "",
        img: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
    });
    const [errors, setErrors] = useState({
        name: "Please enter a name",
        hp: "Please select an life level",
        attack: "Please select an attack level",
        defense: "Please select a defense level",
        speed: "Please select a speed level",
        height: "Please select the height",
        weight: "Please select the weight",
        img: "Image is required",
    })

    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.pokemonTypes);
    
    const disabled = () => {
        let disabled = false;
        for(let error in errors) {
            if(errors[error] !== ""){
                disabled = true;
                break;
            }
        }
        return disabled;
    };

    const validate = (input, name) => {
        if (name === "name"){
            if(input.name !== "") setErrors({...errors, name: "" });
            else setErrors({...errors, name: "Name is required"});
            return;
        } else if (name === "hp") {
            if (input.hp !== "") setErrors({ ...errors, hp: "" });
            else setErrors({ ...errors, hp: "Life is required" });
            return;
        } else if (name === "attack") {
            if (input.attack !== "") setErrors({ ...errors, attack: "" });
            else setErrors({ ...errors, attack: "Attack is required" });
            return;     
          } else if (name === "defense") {
            if (input.defense !== "") setErrors({ ...errors, defense: "" });
            else setErrors({ ...errors, defense: "Defense is required" });
            return;
          } else if (name === "speed") {
            if (input.speed !== "") setErrors({ ...errors, speed: "" });
            else setErrors({ ...errors, speed: "Speed is required" });
            return;
          } else if (name === "weight") {
            if (input.weight !== "") setErrors({ ...errors, weight: "" });
            else setErrors({ ...errors, weight: "Weight is required" });
            return;
          } else if (name === "height") {
            if (input.height !== "") setErrors({ ...errors, height: "" });
            else setErrors({ ...errors, height: "Height is required" });
            return;
          } else if (name === "img") {
            if (input.img !== "") setErrors({ ...errors, img: "" });
            else setErrors({ ...errors, img: "Imagen is required" });
            return;
          }
    };

    useEffect( () => {
        dispatch(getTypes());
        dispatch(getAllPokemons());
    }, [dispatch]);

    const handleChange = (event) => {
        setInput({...input,[event.target.name]: event.target.value,});
        validate({...input, [event.target.name]: event.target.value,},
        event.target.name
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            dispatch(postPokemon(input));
            alert("The pokemon has been created successfully")
            history.push("/home")
        } catch {
            alert('Has been an error')
        }
    };

    const handleSelect = (event) => {
        setInput({
            ...input,
            types: [...input.types, event.target.value],
        });
    };

    return (
        <div className={style.background}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h1 className={style.h1}>Create your Pokémon!</h1>
                <div>
                    <div className={style.container}>
                    <label className={style.label}>Name:</label>
                    <input 
                    placeholder='Insert name'
                    className={style.input}
                    name='name'
                    type="text"
                    value={input.name}
                    onChange={handleChange}/>
                    <span className={style.error}>{errors.name}</span>
                    </div>
                <br/>
                    <div className={style.container}>
                    <label className={style.label}>Attack:</label>
                    <input 
                    className={style.input}
                    name="attack" 
                    type="number"
                    placeholder='Insert Attack'
                    min="0" 
                    value={input.attack}
                    onChange={handleChange}/>
                    <span className={style.error}>{errors.attack}</span>
                    </div>
                <br/>
                    <div className={style.container}>
                    <label className={style.label}>Life:</label>
                    <input 
                    className={style.input}
                    name="hp"
                    placeholder='Insert Life'
                    type="number"
                    min="0" 
                    value={input.hp} 
                    onChange={handleChange}
                    />
                    <p className={style.error}>{errors.hp}</p>
                    </div>
                <br/>
                    <div className={style.container}>
                    <label className={style.label}>Defense:</label>
                    <input
                    className={style.input}
                    placeholder='Insert Defense'
                    name="defense"
                    type="number"
                    min="0" 
                    value={input.defense}
                    onChange={handleChange}
                    />
                    <span className={style.error}>{errors.defense}</span>
                    </div>
                <br/>
                    <div className={style.container}> 
                    <label className={style.label}>Speed:</label>
                    <input
                    className={style.input}
                    placeholder='Insert Speed'
                    name="speed"
                    type="number"
                    min="0" 
                    value={input.speed}
                    onChange={handleChange}
                    />
                    <span className={style.error}>{errors.speed}</span>
                    </div>   
                <br />
                    <div className={style.container}>
                    <label className={style.label}>Height:</label>
                    <input
                    className={style.input}
                    placeholder='Insert Height'
                    name="height"
                    type="number"
                    min="0" 
                    value={input.height}
                    onChange={handleChange}
                    />
                    <span className={style.error}>{errors.height}</span>
                    </div>
                <br />
                    <div className={style.container}>
                    <label className={style.label}>Weight:</label>
                    <input
                    className={style.input}
                    placeholder='Insert Weight'
                    name="weight"
                    type="number"
                    min="0" 
                    value={input.weight}
                    onChange={handleChange}
                     />
                    <span className={style.error}>{errors.weight}</span>
                    </div>
                <br />
                    <div className={style.container}>
                    <label className={style.label}>Image:</label>
                    <input
                    placeholder='Insert image URL'
                    className={style.input}
                    name="img"
                    type="text"
                    value={input.img}
                    onChange={handleChange}
                    />
                    <span className={style.error}>{errors.img}</span>
                    </div>
                <br />
                    <div className={style.container}>
                    <select className={style.select} onChange={handleSelect}>
                    <option defaultValue="unknow">Select type</option>
                    {types.map((type) => (
                    <option key={type.name} value={type.id}>{type.name}</option>
                    ))}
                    </select>
                    <span className={style.error}>{errors.type}</span>
                    </div>
                <br />
                    <input className={style.inputSubmit} disabled={disabled()} type="submit" value="Create"/>
                </div>
            </form>
        </div>
    )
}