import styled from "styled-components";

const Input = styled.input`
    width: 447px;
    height: 34px;
    outline-offset: 8px 16px;
    gap: 16px;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        opacity: 80;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='auto' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;