import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	container: {
		// flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: "#fff",
		height: "100%",
	},
	heading: {
		fontSize: 32,
		textAlign: "center",
		fontWeight: "bold",
		justifyContent: "center",
		marginRight: 105
	},
	addButton: {
		padding: 10,		
		margin: 10,
		marginBottom: 50,
	},
	heading2: {
		color: "black",
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold",
	},
	heading3: {
		color: "black",
		fontSize: 20,
		textAlign: "center",
	},
	label: {
		color: "black",
		fontSize: 16,
		textAlign: "left",
		fontWeight: "bold",
		marginLeft: 10,
	},
	expenseTile: {
		// column with 3 cells
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "lightgrey",
		width: "95%",
		padding: 10,
		margin: 5,
		alignItems: "center"
	},
	expenseTileText: {
		fontSize: 18,
		width: "22%",
		textAlign: "center",
		alignContent: 'center',
		justifyContent: "center"
	},
	formAdd: {
		// display: "none",
	},
	textInput: {
		borderRadius: 12,
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		margin: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	  },
	  logo: {
		width: 50,
		height: 50, 
		resizeMode: 'contain',
	  }
});
export default styles;
