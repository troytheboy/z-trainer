import TaskCard from '@/components/TaskCard';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function TrainingScreen() {

    // const [timerOn, toggleTimer] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [activeTask, setActiveTask] = useState<null | number>(null);
    // var timerOn = false;
    // const _toggleTimer = () => {
    //     toggleTimer(!timerOn);
    //     if (!timerOn) {
    //         setSeconds(0);
    //     }
    // }

    // const _startTask = (taskId: number) => {
    //     if (!timerOn) {
    //         setActiveTask(taskId);
    //     }
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000); // Update every second

        // Cleanup the interval when the component unmounts or seconds reach 0
        return () => clearInterval(interval);
    }, [seconds]); // Re-run effect when seconds change

    return (
        <View style={styles.container}>
            {/* <View style={styles.card}> */}
            {/* <Text>Task 1</Text> */}
            {/* <Text>30 seconds</Text> */}
            {/* <Button onPress={() => _startTask(1)} title='Start' /> */}
            {/* </View> */}
            <TaskCard taskId={1} taskDuration={60} />
            <TaskCard taskId={1} taskDuration={30} />
            <TaskCard taskId={1} taskDuration={90} />
            {/* <Button onPress={_toggleTimer} title={timerOn ? 'Stop' : 'Start'} /> */}
            {/* <Text style={styles.timerText}>{timerOn ? seconds : 'Ready?'}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        minWidth: 300,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 48
    },
    timerText: {
        marginTop: 22,
        fontSize: 72,
        color: '#fff'
    }
});
