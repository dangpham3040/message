import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  numberCart: {
    right: 12,
    position: 'absolute',
    top: 18,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    height: 15,
    width: 15,
    alignItems: 'center'
  },
  textnumberCart: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.second
  },
  header: {
    backgroundColor: Colors.eighth,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  icon: {
    width: '18%'
  },
  center: {
    justifyContent: 'center',
    width: '64%'
  },
  nameapp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.second,
    textAlign: 'center',
    padding: 20,
  },
  touchIconMenu: {
    padding: 20,
  },
  textnumberCart: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.second
  },
})