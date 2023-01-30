import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        border-radius: 24px;
        min-width: ${minWidth};
        padding: 8px 16px;
        color: white;
        &:hover {
            background: #5C96F5;
        }
        &:active {
            background: #276EE2;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;