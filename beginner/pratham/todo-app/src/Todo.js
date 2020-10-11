import React, { useState } from 'react';
import { Segment, Button, Grid, Input } from 'semantic-ui-react'

export const Todo = ({todo, editTask, deleteTask, completeTask}) => {
    const { id, task, completed} = todo;

    const [ showEdit, setShowEdit ] = useState(false)

    const toggleEdit = () => {
        setShowEdit(!showEdit)
    }

    return (
        <Segment color="purple"  as={Grid}>
            <Grid.Column mobile={11} tablet={13} computer={14} verticalAlign="middle" style={
                {
                    textDecoration: completed && "line-through"
                }
            }>
                <div onDoubleClick={toggleEdit} onKeyPress={(e)=> {
                    if (e.key==="Enter") toggleEdit()
                }}>
                    { showEdit ? <Input onChange={(_,{value})=> editTask(id,value)}></Input> : task }
                </div>
            </Grid.Column>
            <Grid.Column mobile={5} tablet={3} computer={2}>
                <Button icon="check" color="green" inverted onClick={()=>completeTask(id)}/>
                <Button icon="delete" color="red" inverted onClick={()=>deleteTask(id)}/>
            </Grid.Column>
        </Segment>
    )
}
