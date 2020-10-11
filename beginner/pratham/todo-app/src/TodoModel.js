import React, { useState } from 'react'
import { Modal, Button, Input } from 'semantic-ui-react'


export const TodoModel = ({toggleModel, setToggleModel, addTodo}) => {

    const [ task, setTask ] = useState("")

    const onChange = (_, data) => {
        setTask(data.value)
    }

    return (
        <Modal
        size={"mini"}
        open={toggleModel}
        dimmer={"blurring"}
      >
        <Modal.Header>Enter the task</Modal.Header>
        <Modal.Content>
          <Input focus={true} size="massive" onChange={onChange} onKeyPress={(e)=> {
                    if (e.key==="Enter") addTodo(task)
                }}/>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setToggleModel(false)}>
            Cancel
          </Button>
          <Button positive onClick={()=>addTodo(task)}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    )
}
