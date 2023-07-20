import { useEffect, useState } from 'react'
import style from './Create.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../Redux/actions';
function controlForm (input){
    const reg = new RegExp('\.(jpg|jpeg|png|gif|bmp)$')
    let errors = {};
    if(!input.name) errors.name = "Please enter a name";
    if(!input.img || !reg.test(input.img)) errors.img = "Please insert a valid image URL"
    if(!input.hp || input.hp === "0") errors.hp = "Please insert a life level"
    if(!input.attack || input.attack === "0") errors.attack = "Please insert an attack level"
    if(!input.defense || input.defense === "0") errors.defense = "Please insert a defense level"
    
    return errors;
};

export default function Create (){
    
    const [errors, setErrors] = useState({
        name: "*",
        img: "*",
        hp: "*",
        attack: "*",
        defense: "*"
    });
    const [input, setInput] = useState({
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });
    
    const dispatch = useDispatch();
    const types = useSelector((state) => state.pokemonTypes);
    
    const validate = (input, name) => {
        if (name === "name") {
          if (input.name !== "") setErrors({ ...errors, name: "" });
          else setErrors({ ...errors, name: "Name es requerido" });
          return;
        } else if (name === "life") {
          if (input.life !== "") setErrors({ ...errors, life: "" });
          else setErrors({ ...errors, life: "life es requerido" });
          return;
        } else if (name === "attack") {
          if (input.attack !== "") setErrors({ ...errors, attack: "" });
          else setErrors({ ...errors, attack: "Attack es requerido" });
          return;     
        } else if (name === "defense") {
          if (input.defense !== "") setErrors({ ...errors, defense: "" });
          else setErrors({ ...errors, defense: "Defense es requerido" });
          return;
        } else if (name === "speed") {
          if (input.speed !== "") setErrors({ ...errors, speed: "" });
          else setErrors({ ...errors, speed: "Attack es requerido" });
          return;
        } else if (name === "weight") {
          if (input.weight !== "") setErrors({ ...errors, weight: "" });
          else setErrors({ ...errors, weight: "Attack es requerido" });
          return;
        } else if (name === "height") {
          if (input.height !== "") setErrors({ ...errors, height: "" });
          else setErrors({ ...errors, height: "Attack es requerido" });
          return;
        } else if (name === "img") {
          if (input.img !== "") setErrors({ ...errors, img: "" });
          else setErrors({ ...errors, img: "Imagen es requerido" });
          return;
        }
    }
    
    const disabled = () => {
        let disabled = false;
        for(let error in errors) {
            if(errors[error] !== "1"){
                disabled = true;
                break;
            }
        }
        return disabled;
    };

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const handleChange = (event) => {
        validate({...input,[event.target.name]: event.target.value,})
        setInput({...input,[event.target.name]: event.target.value,});
        setErrors(controlForm({...input, [event.target.name]: event.target.value})
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            dispatch(postPokemon(input));
            alert("The pokemon has been created successfully")
            setInput({
            name: "",
            img: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        })
        event.target.reset()
    } catch {
        alert('Has been an error')
        }
    };
    
    const handleCheck = (event) => {
         setInput({ ...input, types: [...input.types, event.target.id]})
    }
    
    return (
        <div className={style.background}>
            <form className={style.form} onSubmit={handleSubmit}>
            <input className={style.inputSubmit} disabled={disabled()} type="submit" value="Create"/>
                <h1 className={style.h1}>Create your Pokémon!</h1>
                <br />
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
                    <div className={style.containerCheckbox}>
                        <span className={style.span}>Select type... Or types!</span>
                        <br />
                        {types.map((type) => (
                            <div key={type.name} className={style.divCheckbox}>
                            <label key={type.name} className={style.checkboxLabel}>
                            {type.name}
                            <input 
                            key={type.name}
                            id={type.id}
                            name={type.name}
                            value={type.name}
                            type='checkbox'
                            onClick={handleCheck}/>
                            </label>
                            </div>
                        ))}
                    <span className={style.error}>{errors.type}</span>
                    </div>
                <br />
                </div>
            </form>
        </div>
    )
}