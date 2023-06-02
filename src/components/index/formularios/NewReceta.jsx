import { useState } from "react";
import { LabelInput } from "./LabelInput";
import { GenericForm } from "./GenericForm";

export function NewReceta(){

    //Hooks to inputs
    const [nameFoot, setNameFoot] = useState("");
    const [ingredients, setIngredients] = useState(""); 
    const [price, setPrice] = useState(0);    
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);
    const [showFormButton, setShowFormButton] = useState(false)

    async function handleDataReceta(e) {

        e.preventDefault();
        const form = e.target;

        const dataForm = {
            name: form['nombre'].value,
            ingredients: form['ingredientes'].value,
            price: form['precio'].value,
            descripcion: form['descripcion'].value,
        };

        fetch("http://localhost:8089/recetas/add-recetas", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dataForm)
        })
            .then(response => response.json())
            .then(body => body.id)
            .then((id) => handleImage(id));
    }

    
    function handleImage(id) {
        const form = new FormData();
        form.append("imagen", imagen[0]);

        fetch("http://localhost:8089/recetas/add-img/" + id, {
            //headers: {'Content-Type': 'multipart/form-data'},
            method: "POST",
            body: form
        })
            .then(response => {
                if (response.status >= 200 && response.status <= 300)
                    setShowFormButton(false);

            });
    }
    
    const labelFor =[
        {
           id:0,
           text: "nombre",
           type: "text",
           placeholder:"Nombre del Plato",
           nameForm: "name",
           value : nameFoot,
           setValue : setNameFoot
           
               
        },
        {
            id:1,
            text: "ingredientes",
            type: "text",
            placeholder:"Ingredientes de la receta",     
            nameForm: "ingredients",
            value : ingredients,
            setValue : setIngredients
            
        },
        {
            id:2,
            text: "precio",
            type: "number",
            placeholder:"Precio de la comida",
            nameForm: "price",
            value : price,
            setValue : setPrice
               
         },
         {
            id:3,
            text:"descripcion",
            type:"text",
            nameForm: "descripcion",
            value : descripcion,
            setValue : setDescripcion
            
        }
        
    ];
        
    return(
        <>
        
        <GenericForm sendForm={handleDataReceta} title = "Añadir nueva receta">
        {
            labelFor.map(element =>(
                <div className="col-md-4 mx-5 mb-5  justify-content-start" key={element.id}>
                    <LabelInput 
                        key={element.id} 
                        value={element.text} 
                        type={element.type} 
                        name={element.nameForm}
                        currentValue={element.value} 
                        onHandleChangue={element.setValue}
                        required
                    />
                </div>  
            ))
        }
        <div className="col-md-4 mx-5 mb-5  justify-content-start">
                    <input  className="form-control" 
                    name="imagen"
                    id="imagen"
                    type="file"
                    onChange={(event)=>(setImagen(event.target.files))}
                    required
                    /> 
        </div>

        {   
            !showFormButton &&

                <div className="col-12  mx-2 mb-5 d-flex justify-content-center align-items-center">
                    <button  type="submit" className="btn btn-warning w-25 my-3 mt-5">Enviar</button>
                </div>
        }
        
        </GenericForm>
    </>
        
    );
 
}