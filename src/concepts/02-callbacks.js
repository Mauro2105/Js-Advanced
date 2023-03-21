import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';
    findHero( id1, (error, hero1 ) => {

       
        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2 ) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero1.name } / ${ hero2.name }`
        });
        //element.innerHTML = hero.name; //Retorna el nombre del heroe que es el elemento que se le pasa a la funcion 

    });

}

/**
 * 
 * @param {String} id 
 * @param { ( error: String|Null, hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {  //Recibe una funcion que es la encargada de buscar el id del hereo y lo retorna 

    const hero = heroes.find( hero => hero.id === id );
    
    if ( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return; // undefined;
    }

    callback( null, hero );
}