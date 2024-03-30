import { Text, TextInput, TouchableOpacity, View, Image, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Task from '../../components/Task';
import Icon from '../../components/Icon';
import Logo from '../../components/Logo';

export default function Home() {
    const [tasks, setTasks] = useState<{ content: string, finished: boolean }[]>([])
    const [name, setName] = useState('')

    function handleTaskAdd() {
        if (tasks.find(item => item.content === name)) {
            return Alert.alert("Tarefa existente", "Já existe uma tarefa na lista com esse nome.")
        }

        setTasks(prevState => [...prevState, { content: name, finished: false }])
        setName('')
    }

    function handleTaskRemove(name: string) {
        Alert.alert("Remover tarefa", `Deseja remover a tarefa ${name}? Essa ação não poderá ser desfeita.`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task.content !== name))
                    Alert.alert('Deletado com sucesso!')
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleTaskFinish(content: string, value: boolean) {
        const index = tasks.findIndex((task) => task.content === content)

        if (index < 0) {
            return Alert.alert('Tarefa não encontrada')
        }

        const array = [...tasks]
        array[index].finished = value

        setTasks(array)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Icon icon='add' />
                    </TouchableOpacity>
                </View>
                <View style={styles.countContainer}>
                    <View style={styles.countItem}>
                        <Text style={styles.createdText}>
                            Criadas
                        </Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{tasks.length}</Text>
                        </View>
                    </View>
                    <View style={styles.countItem}>
                        <Text style={styles.finishedText}>
                            Concluídas
                        </Text>
                        <View style={styles.count}>
                            <Text style={styles.countText}>
                                {tasks.filter((task => task.finished)).length}
                            </Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tasks.sort((a, b) => Number(a.finished) - Number(b.finished))}
                    renderItem={({ item }) => (
                        <Task
                            key={item.content}
                            content={item.content}
                            finished={item.finished}
                            onRemove={handleTaskRemove}
                            onFinish={handleTaskFinish}
                        />
                    )}
                    keyExtractor={item => item.content}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <Image source={require('./clipboard.png')} />
                            <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.listEmptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}

                />
            </View>
        </View>
    );
}
