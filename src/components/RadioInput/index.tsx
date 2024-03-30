import { TouchableOpacity, View } from 'react-native';
import Icon from '../Icon';

type RadioInputProps = {
    checked: boolean
    onChange: (value: boolean) => void
}

export default function RadioInput({ checked, onChange }: RadioInputProps) {
    return (
        <View>
            {checked ? (
                <TouchableOpacity onPress={() => onChange(false)}>
                    <Icon icon='checked' />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => onChange(true)}>
                    <Icon icon='unchecked' />
                </TouchableOpacity>
            )}
        </View>
    );
}
