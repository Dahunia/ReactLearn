import React from 'react'
import { StyleSheet, SectionList, Text } from 'react-native'
import { List } from 'react-native-paper';
import { ITransaction, ITransactionFormValues } from '../../app/models/models';
import { format } from 'date-fns';
import { THEME } from '../../theme';
import AppAlert from '../../app/common/components/AppAlert';

interface IProps {
    title?: string;
    transactions: ITransaction[];
    setInitialTransaction: (transaction: ITransactionFormValues) => void;
}

export default function TransactionList({ title, transactions, setInitialTransaction}: IProps) {

    const DATA = [
        {
            title,
            data: transactions
        }
    ];



    return (
        <SectionList
            sections={DATA}
            keyExtractor={(transaction: ITransaction, index: number) => transaction.id + index}
            renderItem={({ item: transaction }) => (
                <List.Item
                    onPress={() => {
                        console.log('press and init transaction', {transaction});
                        const func = () => setInitialTransaction({ 
                            username: transaction.username,
                            amount: Number(transaction.amount)
                        });
                        AppAlert(
                            "New Transaction", 
                            "Create a new transaction from the existing transactions?", 
                            func
                        );
                    }}
                    underlayColor={THEME.UNDERLINE_COLOR}
                    title={`to ${transaction.username}, amount: ${transaction.amount}`}
                    description={format(new Date(transaction.date), 'MMMM d, yyyy h:mm:ss')}
                    left={props => <List.Icon {...props} icon="credit-card-check-outline" color="green" />}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.title}>{title}</Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: THEME.TITLE_FONT_SIZE,
        textAlign: 'center',
        marginTop: 18
    }
});


/* <FlatList
    data={transactions}
    keyExtractor={(transaction: ITransaction) => transaction.id}
    renderItem={({ item: transaction }) => (
        <List.Item
            title={`to ${transaction.username}, amount: ${transaction.amount}`}
            description={format(new Date(transaction.date), 'MMMM d, yyyy h:mm:ss')}
            left={props => <List.Icon {...props} icon="credit-card-check-outline" color="green" />}
        />
    )}
/* 
const DATA = [
    {
        id: "1",
        username: "user 1"
    },
    {
        id: "1",
        username: "user 1"
    }
]
<FlatList
    data={DATA}
    keyExtractor={item => item.id}
    renderItem={({ item }) => item.username}
/> */
