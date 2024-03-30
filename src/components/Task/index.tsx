import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import RadioInput from '../RadioInput';
import Icon from '../Icon';

type TaskProps = {
    content: string
    finished: boolean
    onRemove: (content: string) => void
    onFinish: (content: string, value: boolean) => void
}

export default function Task({ content, finished, onRemove, onFinish }: TaskProps) {
    return (
        <View style={styles.container}>
            <RadioInput checked={finished} onChange={(value) => onFinish(content, value)} />
            <Text style={[styles.content, finished && styles.finished]}>{content}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onRemove(content)}>
                <Icon icon='trash' />
            </TouchableOpacity>
        </View>
    );
}
