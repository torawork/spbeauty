import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-4 mt-5'>
            <TitledTextInput className='caption' title='Название компании' def='SPBEAUTY'/>
            <TitledSelector className='caption' title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput className='caption' title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            <PrimaryButton>Сохранить</PrimaryButton>
        </div>
    );
}

export default Preferences;