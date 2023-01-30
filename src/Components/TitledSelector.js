import styled from "styled-components";

const Select = styled.select`
    background: url("data:image/svg+xml,<svg height='20px' width='20px' viewBox='0 0 20 20' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M15.8332 7.5L9.99984 13.3333L4.1665 7.5'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    width: 447px;
    height: 34px;
    outline-offset: 8px 16px;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        opacity: 80;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='p-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;