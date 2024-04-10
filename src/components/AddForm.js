import {Picker} from '@react-native-picker/picker';
import {Button, Text, TextInput, View} from 'react-native';
import styles from '../styles';

export default function Addform({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  categories,
  setExpenses,
  expenses,
  chartData,
  setChartData,
  setAddForm,
  theme,
}) {
  return (
    <View>
      <Text style={[styles.heading3, {color: theme.text}]}>Add Form</Text>

      {/* Input field for expense name */}
      <Text style={[styles.label, {color: theme.text}]}>Expense Name</Text>
      <TextInput
        onChangeText={value => setName(value)}
        value={name}
        style={[styles.textInput, {color: theme.text}]}
        placeholder="Enter the expense name"
        placeholderTextColor={theme.placeholderText}
      />

      {/* Input field for expense amount */}
      <Text style={[styles.label, {color: theme.text}]}>Amount</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={value => {
          // Ensure only numeric values are entered for the amount
          value = value.replace(/[^0-9.]/g, '');

          if (value.split('.').length > 2) {
            value = value.replace(/\.+$/, '');
          }

          setAmount(value);
        }}
        value={amount}
        style={[styles.textInput, {color: theme.text}]}
        placeholder="Amount"
        placeholderTextColor={theme.placeholderText}
      />

      {/* Dropdown to select expense category */}
      <Text style={[styles.label, {color: theme.text}]}>Category</Text>
      <Picker
        style={[
          styles.textInput,
          {
            color: theme.text,
          },
        ]}
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
        {categories.map((category, index) => {
          return <Picker.Item key={index} label={category} value={category} />;
        })}
      </Picker>

      {/* Buttons to add or cancel expense */}
      <View style={styles.row}>
        {/* Add Expense button */}
        <Button
          onPress={() => {
            let amountNumber = parseFloat(amount);
            if (amountNumber <= 0 || name == '') {
              // Validation: Ensure valid amount
              // and name are entered
              alert('Please enter a valid amount and name');
              return;
            }

            // Add the new expense to the list of expenses
            setExpenses([
              ...expenses,
              {
                id: new Date().getTime(),
                category,
                name,
                amount: amountNumber,
              },
            ]);

            // Update the chart data to reflect the new expense
            let newChartData = [...chartData];
            let index = newChartData.findIndex(item => item.name == category);
            newChartData[index].amount += amountNumber;
            setChartData(newChartData);

            // Reset form fields and close the form
            setAddForm(false);
            setName('');
            setAmount('');
            setCategory('Rent');
          }}
          title="Add Expense"
          color={theme.accent}
        />

        {/* Cancel button to close the form
					without adding an expense */}
        <Button
          onPress={() => {
            setAddForm(false);
          }}
          title="Cancel"
          color={theme.accent}
        />
      </View>
    </View>
  );
}
