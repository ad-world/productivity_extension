import React, { useState } from 'react'
import { Container, Grid, FormControl, Input, InputLabel, Button } from '@material-ui/core'


export default function Landing() {
    const [name, setName] = useState('');
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Enter your name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                        setName(e.target.value);
                        console.log(name)
                    }}/>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    <Button type='submit' onClick={() =>{
                        localStorage.setItem('name', name);
                    }}>Submit</Button>
                </FormControl>
            </Grid>
        </Grid>
    )
}
