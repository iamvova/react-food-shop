import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Container = styled.div`
    padding-top: 100px;
`
const SubmitButton = styled.button`
    margin: 0 auto;
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #274C5B;
    border: 0;
    color: #fff;
    font-size: 20px;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        opacity: 0.7;
    }
    & img{
        margin-left: 15px;
    }
`

const FormFields = styled.div`

`
const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & div{
        margin-bottom: 30px;
    }
`
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #274C5B;
`
const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #7EB693;
    border-radius: 8px;
    padding: 10px 100px 10px 20px;
    margin-right: 50px;
`
const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const FormCol = styled.div`
    flex-basis: 48%;
`
const Textarea = styled.textarea`
    margin-right: 30px;
    background: #FFFFFF;
    border: 1px solid #7EB693;
    border-radius: 8px;
`
const CartForm = () => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const [buttonColor, setButtonColor] = useState("#274C5B")
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case "input1":
                setInput1(value)
                break;
            case "input2":
                setInput2(value)
                break;
            case "input3":
                setInput3(value)
                break
            case "input4":
                setInput4(value)
                break
            default:
                break
        }

        if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
            setButtonColor("#EFD372")
        }
    }

    return (
        <Container>
            
            <FormFields>
                <FormContainer>
                    <FormRow >
                        <FormCol>
                            <Label for="input1">Full Name*</Label>
                            <Input onChange={handleInputChange} type="text" name="input1" required/>
                        </FormCol>
                        <FormCol>
                            <Label for="input2">Your Email*</Label>
                            <Input onChange={handleInputChange} type="text" name="input2" required/>
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol>
                            <Label for="input3">Address*</Label>
                            <Input onChange={handleInputChange} type="text" name="input3" required/>
                        </FormCol>
                        <FormCol>
                            <Label for="input4">Phone number*</Label>
                            <Input onChange={handleInputChange} type="text" name="input4" required/>
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol>
                            <Label for="input5">Message</Label>
                            <Textarea name="input5" cols="85" rows="10"></Textarea>
                        </FormCol>
                    </FormRow>
                    <Link to={'/thank'}><SubmitButton style={{ backgroundColor: buttonColor }} type="submit">Confirm</SubmitButton></Link>
                </FormContainer>

            </FormFields>
            
        </Container>
    )
}

export default CartForm
