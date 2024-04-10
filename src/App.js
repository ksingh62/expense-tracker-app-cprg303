import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, Image, Switch} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import styles from './styles';
import Addform from './components/AddForm';
import ExpenseComponent from './components/ExpenseComponent';
import ToggleSwitch from './components/ToggleSwitch';
import {themes} from './utils/themes';

export default function App() {
  // Define state variables using the useState hook
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Rent');
  const [expenses, setExpenses] = useState([]);
  const categories = ['Rent','Mortgage','Utilities', 'Grocery','Dining out','Clothes', 'Transportation','Investment', 'Subscriptions', 'Others'];
  const [addForm, setAddForm] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? themes.dark : themes.light;

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  // Function to open the add expense form
  const addExpense = () => {
    setAddForm(true);
  };

  // Initialize the chart data with default values
  const [chartData, setChartData] = useState([
    {
      name: 'Rent',
      amount: 0,
      color: '#e62d20',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Mortgage',
      amount: 0,
      color: '#FFA07A',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Utilities',
      amount: 0,
      color: '#1c6bd9',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Grocery',
      amount: 0,
      color: '#FFD700',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Dining out',
      amount: 0,
      color: '#FF4500',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Clothes',
      amount: 0,
      color: '#6A5ACD',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transportation',
      amount: 0,
      color: '#20B2AA',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Investment',
      amount: 0,
      color: '#008B8B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Subscriptions',
      amount: 0,
      color: '#9932CC',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Others',
      amount: 0,
      color: '#5adbac',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]);

  // categories array for when no expense is added
  const categories1 = [
    {name: 'Rent', color: '#e62d20'},
    {name: 'Mortgage', color: '#FFA07A'},
    {name: 'Utilities', color: '#1c6bd9'},
    {name: 'Grocery', color: '#FFD700'},
    {name: 'Dining out', color: '#FF4500'},
    {name: 'Clothes', color: '#6A5ACD'},
    {name: 'Transportation', color: '#20B2AA'},
    {name: 'Investment', color: '#008B8B'},
    {name: 'Subscriptions', color: '#9932CC'},
    {name: 'Others', color: '#5adbac'},
  ];

  const hasExpenses = expenses.length > 0;

  const displayChartData = hasExpenses ? chartData : [
  ...categories1.map(category => ({
    ...category,
    amount: 0,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  })),
  {
    name: 'No Expenses',
    amount: 1, 
    color: 'lightgrey',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }
];

  // Render the components and UI
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={[styles.heading, {color: theme.text}]}>SpendWise</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>

      {/* Render the PieChart component with data */}
      <PieChart
        data={displayChartData}
        width={350}
        height={250}
        chartConfig={{
          backgroundGradientFrom: theme.background,
          backgroundGradientTo: theme.background,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => theme.text,
        }}
        accessor={'amount'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 10]}
        absolute
      />
      {!hasExpenses && (
        <Text style={{color: theme.text, textAlign: 'center', marginTop: 10}}>
          No expenses to display. Add a new expense to get started!
        </Text>
      )}

      {/* Conditional rendering: If addForm is true, 
				render the Addform component */}
      {addForm == true ? (
        <Addform
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          categories={categories}
          setExpenses={setExpenses}
          expenses={expenses}
          chartData={chartData}
          setChartData={setChartData}
          setAddForm={setAddForm}
          theme={theme}
        />
      ) : (
        /* If addForm is false, render the "Add Expense" button */
        <View style={styles.row}>
          <Button
            onPress={addExpense}
            color="green"
            style={styles.addButton}
            title="Add Expense"
          />
        </View>
      )}

      {/* Render the ExpenseComponent */}
      <ExpenseComponent
        expenses={expenses}
        setExpenses={setExpenses}
        chartData={chartData}
        setChartData={setChartData}
      />
    </SafeAreaView>
  );
}
