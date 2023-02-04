import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch justify-content-between gap-2'>
            <Option className='flex-grow-1 py-3 gap-3'>{props.children}</Option>
            <div className='d-inline-flex flex-row'>
                <IconOnlyButton icon={<EditIcon/>}/>
                <IconOnlyButton icon={<RemoveIcon/>}/>
            </div>
        </div>
    );
}

export default ListElement;