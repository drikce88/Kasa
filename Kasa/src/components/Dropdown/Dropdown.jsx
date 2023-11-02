import React from 'react';



export default function Dropdown() {
    return (
        <div className='bloc-select'>
            <div className='select'>
                <select>
                    <option>Fiabilité</option>
                    <option className='option-txt'>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                        et toutes les informations sont régulierement vérifiées par nos équipes.
                    </option>
                </select>
            </div>
            <div className='select'>
                <select>
                    <option>Respect</option>
                    <option></option>
                </select>
            </div>
            <div className='select'>
                <select>
                    <option>Service</option>
                    <option></option>
                </select>
            </div>
            <div className='select'>
                <select>
                    <option>Sécurité</option>
                    <option></option>
                </select>
            </div>
        </div>
    )
}