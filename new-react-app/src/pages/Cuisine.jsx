import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`  https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])
    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}
const Grid = styled.div`
 display: grid;
 grid-gap: 30px;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 `;

const Card = styled.div`
 img {
     width: 100%;
     border-radius: 2rem;
 }
 a {
     text-decoration: none;
 }
 h4 {
padding: 1rem;
text-align: center;
 }
 `;

export default Cuisine