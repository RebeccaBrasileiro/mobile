
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
  },
  header: {
    backgroundColor:colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    backgroundColor: colors.fourth,
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  data: {
    fontSize: 12,
    color: "gray",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 4,
  },
  localizacao: {
    fontSize: 14,
    color: "gray",
  },
  imagem: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: colors.secondary,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});

export default styles;
