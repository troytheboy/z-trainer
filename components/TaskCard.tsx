import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type TaskCardProps = {
    taskId: number,
    taskDuration: number
}

const TaskCard = (props: TaskCardProps) => {
    const [timerOn, toggleTimer] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [completed, setCompleted] = useState(false);
    const taskId = useRef(props.taskId);
    const taskDuration = useRef(props.taskDuration);
    const taskDurationString = useRef(null);

    const _toggleTimer = () => {
        console.log('TOGGLE!');
        toggleTimer(!timerOn);
        if (!timerOn) {
            setSeconds(taskDuration.current);
        }
    }

    const _startTask = (taskId: number) => {
        // if (timerOn) {
        //     setSeconds(taskDuration.current);
        // }
        _toggleTimer();
    }

    const _buildTaskDurationString = (duration: number) => {
        let mins = Math.floor(duration / 60)
        let secs = duration - (mins * 60);
        return mins + ':' + (secs < 10 ? '0' + secs : secs);
    }

    useEffect(() => {
        if (seconds == 0 && timerOn) {
            alert("Task complete!");
            _toggleTimer();
        }
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000); // Update every second

        // Cleanup the interval when the component unmounts or seconds reach 0
        return () => clearInterval(interval);
    }, [seconds]);

    useEffect(() => {
        if (taskDurationString == null) {
            _buildTaskDurationString(taskDuration.current);
        }
    }, []);

    return (
        <View style={styles.card}>
            <Text>Task 1</Text>
            <Text>{_buildTaskDurationString(timerOn ? seconds : taskDuration.current)}</Text>
            <Button onPress={() => _startTask(taskId.current)} title={timerOn ? 'Stop' : 'Start'} />
        </View>
    );
};

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
    }
});

export default TaskCard;